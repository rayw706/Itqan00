// Vercel serverless function: proxies chat requests to Groq using a
// server-side API key (set as the GROQ_API_KEY environment variable in
// your Vercel project settings). The key never reaches the browser.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'GROQ_API_KEY is not configured on the server.' });
    return;
  }

  const { messages, model, max_tokens } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: 'messages array is required' });
    return;
  }

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model || 'llama-3.3-70b-versatile',
        max_tokens: max_tokens || 1000,
        messages
      })
    });

    const data = await groqRes.json();
    if (!groqRes.ok) {
      res.status(groqRes.status).json({ error: data?.error?.message || 'Groq request failed' });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error contacting Groq: ' + err.message });
  }
}
