/* ============================================================
   STATIC UI STRINGS (bilingual)
   ============================================================ */
const STR = {
  nav_dashboard:{ar:"لوحة التحكم", en:"Dashboard"},
  nav_assistant:{ar:"المساعد الذكي", en:"AI Assistant"},
  nav_assets:{ar:"الأصول والمرافق", en:"Assets & facilities"},
  nav_maintenance:{ar:"الصيانة التنبؤية", en:"Predictive maintenance"},
  nav_space:{ar:"استخدام المساحات", en:"Space utilization"},
  nav_recommendations:{ar:"التوصيات الذكية", en:"Smart recommendations"},
  foot_line1:{ar:"بيانات عرض تجريبية — تحليل حيّ بالذكاء الاصطناعي", en:"Demo dataset — live AI analysis"},
  foot_line2:{ar:"هاكاثون 2026", en:"Hackathon 2026"},
  assistant_sub:{ar:"اسأل عن بيانات مرافقك واحصل على تحليل فوري", en:"Ask about your facility data and get instant analysis"},
  chat_title:{ar:"مساعد إتقان الذكي", en:"Itqan AI Advisor"},
  chat_sub:{ar:"مدعوم بواسطة Groq — يحلل بياناتك الفعلية", en:"Powered by Groq — reasons over your real data"},
  chat_empty_hint:{ar:"اسأل أي سؤال عن استخدام المرافق، الصيانة، أو فرص التوفير...", en:"Ask anything about facility usage, maintenance, or savings opportunities..."},
  chat_ph:{ar:"اكتب سؤالك هنا...", en:"Type your question here..."},
  chat_error:{ar:"تعذر الاتصال بنموذج الذكاء الاصطناعي حاليًا. تحقق من الاتصال وحاول مرة أخرى.", en:"Couldn't reach the AI model right now. Please check your connection and try again."},
  suggestions_title:{ar:"أسئلة مقترحة", en:"Suggested questions"},
  chat_how_desc:{ar:"يحلل المساعد ملخصًا حيًا لبيانات الأصول والمرافق الفعلية في المنصة، ويستخدم Groq لتوليد إجابات دقيقة دون تلفيق أرقام.", en:"The assistant analyzes a live summary of the platform's real asset & facility data, using Groq to generate grounded answers without inventing numbers."},
  ai_not_configured:{ar:"لم يتم إعداد خادم الذكاء الاصطناعي بعد (متغيّر GROQ_API_KEY). راجع ملف README لإكمال الإعداد.", en:"The AI backend isn't configured yet (missing GROQ_API_KEY). See the README to finish setup."},
  live_ai:{ar:"ذكاء اصطناعي حي", en:"Live AI"},
  regenerate_btn:{ar:"توليد جديد", en:"Regenerate"},
  rec_initial_hint:{ar:"يجري توليد التوصيات...", en:"Generating recommendations..."},
  rec_ai_error:{ar:"تعذر توليد التوصيات عبر الذكاء الاصطناعي — تم عرض توصيات احتياطية مبنية على القواعد بدلًا من ذلك.", en:"Couldn't reach the AI model — showing rule-based fallback recommendations instead."},
  tab_maintenance:{ar:"صيانة عاجلة", en:"Urgent maintenance"},
  live:{ar:"مباشر", en:"Live"},
  search_ph:{ar:"بحث عن أصل أو مرفق...", en:"Search for an asset or facility..."},
  kpi1_label:{ar:"إجمالي الأصول والمرافق", en:"Total assets & facilities"},
  kpi1_trend:{ar:"▲ 6 أصول جديدة هذا الفصل", en:"▲ 6 new assets this term"},
  kpi2_label:{ar:"معدل الاستخدام العام", en:"Overall utilization rate"},
  kpi2_trend:{ar:"▼ أقل من المعدل المستهدف (75٪)", en:"▼ Below target rate (75%)"},
  kpi3_label:{ar:"تنبيهات صيانة نشطة", en:"Active maintenance alerts"},
  kpi3_trend:{ar:"{n} أصول بخطورة عالية", en:"{n} assets at high risk"},
  kpi4_label:{ar:"التوفير المحتمل سنويًا", en:"Potential annual savings"},
  kpi4_trend:{ar:"عبر إعادة التوزيع والصيانة الوقائية", en:"Via reallocation and preventive maintenance"},
  util_by_cat_title:{ar:"معدل الاستخدام حسب نوع المرفق", en:"Utilization rate by facility type"},
  last_30_days:{ar:"آخر 30 يومًا", en:"Last 30 days"},
  top_risk_title:{ar:"أعلى الأصول خطورة", en:"Highest-risk assets"},
  top_risk_sub:{ar:"مرتبة حسب احتمال العطل", en:"Ranked by failure probability"},
  status_dist_title:{ar:"توزيع حالة الأصول", en:"Asset status distribution"},
  status_dist_sub:{ar:"{n} أصل عبر 6 فئات", en:"{n} assets across 6 categories"},
  status_good:{ar:"تعمل بكفاءة", en:"Operating efficiently"},
  status_warning:{ar:"تحتاج متابعة", en:"Needs monitoring"},
  status_critical:{ar:"حرجة", en:"Critical"},
  th_category:{ar:"الفئة", en:"Category"},
  th_total:{ar:"العدد الكلي", en:"Total count"},
  th_status:{ar:"الحالة", en:"Status"},
  th_asset:{ar:"الأصل / المرفق", en:"Asset / facility"},
  th_location:{ar:"الموقع", en:"Location"},
  th_utilization:{ar:"نسبة الاستخدام", en:"Utilization"},
  th_health:{ar:"مؤشر الصحة", en:"Health score"},
  th_last_maint:{ar:"آخر صيانة", en:"Last maintenance"},
  no_results:{ar:"لا توجد نتائج مطابقة للبحث", en:"No results match your search"},
  maint_title:{ar:"الأصول المرشحة للصيانة الوقائية", en:"Assets flagged for preventive maintenance"},
  maint_sub:{ar:"مرتبة حسب احتمالية العطل المتوقعة من نموذج الذكاء الاصطناعي", en:"Ranked by AI-predicted failure probability"},
  how_title:{ar:"كيف يعمل التنبؤ؟", en:"How does the prediction work?"},
  how_desc:{ar:"يحلل النموذج بيانات الاستخدام، عمر المعدة، تكرار الأعطال السابقة، ودرجات الحرارة/الرطوبة التشغيلية لتوليد مؤشر خطورة لكل أصل، ثم يحدد نافذة زمنية متوقعة للعطل وإجراءً موصى به.",
    en:"The model analyzes usage data, equipment age, past failure frequency, and operating temperature/humidity to generate a risk score for each asset, then estimates a predicted failure window and a recommended action."},
  accuracy_label:{ar:"دقة النموذج (بيانات تجريبية)", en:"Model accuracy (sample data)"},
  lead_time_label:{ar:"متوسط مهلة الإنذار المبكر (أيام)", en:"Average early-warning lead time (days)"},
  heatmap_title:{ar:"متوسط الإشغال الأسبوعي حسب اليوم والفترة", en:"Average weekly occupancy by day and slot"},
  heatmap_sub:{ar:"القاعات والمختبرات — كل الحرم الجامعي", en:"Halls and labs — entire campus"},
  low:{ar:"منخفض", en:"Low"},
  high:{ar:"مرتفع", en:"High"},
  underused_title:{ar:"الفضاءات الأقل استخدامًا", en:"Least-utilized spaces"},
  underused_sub:{ar:"فرص لإعادة التخصيص", en:"Opportunities for reallocation"},
  building_chart_title:{ar:"معدل الاستخدام حسب المبنى", en:"Utilization rate by building"},
  building_chart_sub:{ar:"مقارنة بالطاقة الاستيعابية القصوى", en:"Compared to maximum capacity"},
  tab_all:{ar:"الكل", en:"All"},
  tab_redistribute:{ar:"إعادة توزيع", en:"Redistribute"},
  tab_rent:{ar:"تأجير", en:"Rent out"},
  tab_invest:{ar:"استثمار/توسعة", en:"Invest / expand"},
  cat_all:{ar:"كل الفئات", en:"All categories"},
  days_ago:{ar:"قبل {n} يومًا", en:"{n} days ago"},
  within_days:{ar:"خلال {n} يومًا", en:"in {n} days"},
  failure_expected:{ar:"العطل المتوقع {w}", en:"Failure expected {w}"},
  occ_pct:{ar:"{n}٪ إشغال", en:"{n}% occupied"},
  no_recs:{ar:"لا توجد توصيات في هذه الفئة حاليًا", en:"No recommendations in this category yet"},
  action_urgent:{ar:"فحص فوري + جدولة استبدال", en:"Immediate inspection + schedule replacement"},
  action_preventive:{ar:"صيانة وقائية خلال أسبوعين", en:"Preventive maintenance within two weeks"},
  action_routine:{ar:"متابعة روتينية", en:"Routine monitoring"},
  impact_label:{ar:"الأثر المتوقع:", en:"Expected impact:"},
};
let LANG = 'ar';
function T(key){ const e = STR[key]; return e ? (LANG==='ar'?e.ar:e.en) : key; }
function TF(key, vals){ let s = T(key); Object.keys(vals).forEach(k=> s = s.replace('{'+k+'}', vals[k])); return s; }
function L(pair){ return LANG==='ar' ? pair.ar : pair.en; }

/* ============================================================
   MOCK DATA — simulated bilingual facility/asset dataset
   ============================================================ */
const CATEGORIES = [
  {ar:"مبنى", en:"Building"},
  {ar:"قاعة محاضرات", en:"Lecture hall"},
  {ar:"مختبر", en:"Lab"},
  {ar:"معدات", en:"Equipment"},
  {ar:"مرفق رياضي", en:"Sports facility"},
  {ar:"مساحة عامة", en:"Public space"}
];
const BUILDINGS = [
  {ar:"مبنى الهندسة", en:"Engineering building"},
  {ar:"مبنى العلوم", en:"Science building"},
  {ar:"مبنى الإدارة", en:"Administration building"},
  {ar:"مركز الابتكار", en:"Innovation center"},
  {ar:"مبنى الرياضة", en:"Sports building"},
  {ar:"المكتبة المركزية", en:"Central library"}
];
const ASSET_NAMES = [
  [ {ar:"مبنى الهندسة A", en:"Engineering building A"}, {ar:"مبنى الهندسة B", en:"Engineering building B"},
    {ar:"مبنى العلوم", en:"Science building"}, {ar:"مبنى الإدارة", en:"Administration building"},
    {ar:"مركز الابتكار", en:"Innovation center"} ],
  [ {ar:"قاعة 101", en:"Hall 101"}, {ar:"قاعة 204", en:"Hall 204"}, {ar:"قاعة الأمير سلطان", en:"Prince Sultan hall"},
    {ar:"قاعة المؤتمرات الكبرى", en:"Grand conference hall"}, {ar:"قاعة 310", en:"Hall 310"}, {ar:"قاعة الحوسبة", en:"Computing hall"} ],
  [ {ar:"مختبر الفيزياء", en:"Physics lab"}, {ar:"مختبر الشبكات", en:"Networks lab"}, {ar:"مختبر الكيمياء", en:"Chemistry lab"},
    {ar:"مختبر الروبوتات", en:"Robotics lab"}, {ar:"مختبر الأحياء", en:"Biology lab"} ],
  [ {ar:"مكيف مركزي — مبنى الهندسة", en:"Central AC — engineering building"}, {ar:"مصعد B1", en:"Elevator B1"},
    {ar:"مولد كهرباء احتياطي", en:"Backup generator"}, {ar:"نظام تبريد المختبرات", en:"Lab cooling system"}, {ar:"مضخة مياه رئيسية", en:"Main water pump"} ],
  [ {ar:"الصالة الرياضية", en:"Sports hall"}, {ar:"ملعب كرة القدم", en:"Football field"},
    {ar:"حمام السباحة", en:"Swimming pool"}, {ar:"صالة اللياقة", en:"Fitness studio"} ],
  [ {ar:"فناء الطلاب الرئيسي", en:"Main student courtyard"}, {ar:"قاعة الدراسة الجماعية", en:"Group study room"},
    {ar:"ساحة الفعاليات", en:"Events plaza"}, {ar:"مساحة العمل المشترك", en:"Co-working space"} ]
];

function seededRandom(seed){ let s = seed; return () => { s = (s*9301+49297)%233280; return s/233280; }; }
const rnd = seededRandom(42);
function pick(arr){ return arr[Math.floor(rnd()*arr.length)]; }
function rangeInt(a,b){ return Math.floor(a + rnd()*(b-a)); }

/* Utilization, health and risk are derived from explainable underlying factors
   (usage hours, age, incident history, maintenance recency) rather than pure
   random noise, so the numbers the AI layer reasons over are internally
   consistent and auditable. */
let idCounter = 1;
const assets = [];
CATEGORIES.forEach((cat, ci) => {
  ASSET_NAMES[ci].forEach(name => {
    const ageYears = rangeInt(1, 16);
    const weeklyUsageHours = ci===3 ? rangeInt(20, 90) : rangeInt(2, 55); // equipment (ci=3) runs longer hours
    const incidents = rangeInt(0, 6);
    const lastMaintenance = rangeInt(2, 220);

    let utilization = Math.round((weeklyUsageHours/60)*100) + rangeInt(-8, 8);
    utilization = Math.max(4, Math.min(98, utilization));

    let health = 100 - ageYears*3 - incidents*6 - Math.max(0, lastMaintenance-90)*0.12 + rangeInt(-6, 6);
    health = Math.max(8, Math.min(99, Math.round(health)));

    let risk = Math.round((100-health)*0.6 + incidents*4 + Math.max(0, lastMaintenance-120)*0.09);
    risk = Math.max(3, Math.min(98, risk));

    assets.push({
      id: idCounter++,
      name, category: cat,
      building: pick(BUILDINGS),
      utilization, health, risk,
      ageYears, weeklyUsageHours, incidents,
      lastMaintenance,
      status: risk > 65 ? "critical" : risk > 35 ? "warning" : "good"
    });
  });
});

const statusMeta = {
  good:{key:"status_good", badge:"badge-green", dot:"dot-green"},
  warning:{key:"status_warning", badge:"badge-amber", dot:"dot-amber"},
  critical:{key:"status_critical", badge:"badge-red", dot:"dot-red"}
};

const sectionTitles = {
  dashboard:["nav_dashboard","dash_sub"],
  assistant:["nav_assistant","assistant_sub"],
  assets:["nav_assets","assets_sub"],
  maintenance:["nav_maintenance","maint_sub2"],
  space:["nav_space","space_sub"],
  recommendations:["nav_recommendations","recs_sub"]
};
STR.dash_sub = {ar:"نظرة عامة على أداء المرافق والأصول اليوم", en:"An overview of facility and asset performance today"};
STR.assets_sub = {ar:"سجل شامل لجميع المباني والقاعات والمعدات", en:"A full log of all buildings, halls, and equipment"};
STR.maint_sub2 = {ar:"تنبؤات الذكاء الاصطناعي بالأعطال المحتملة", en:"AI predictions of potential failures"};
STR.space_sub = {ar:"تحليل معدلات الإشغال عبر الحرم الجامعي", en:"Occupancy-rate analysis across campus"};
STR.recs_sub = {ar:"اقتراحات لإعادة التوزيع والتأجير والاستثمار", en:"Suggestions for reallocation, renting, and investment"};

/* ============================================================
   NAVIGATION
   ============================================================ */
let currentSection = 'dashboard';
function goToSection(sec){
  currentSection = sec;
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active', n.dataset.section===sec));
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById('sec-'+sec).classList.add('active');
  const [titleKey, subKey] = sectionTitles[sec];
  document.getElementById('topbarTitle').textContent = T(titleKey);
  document.getElementById('topbarSub').textContent = T(subKey);
  if(sec==='recommendations' && recCache===null && !recBusy){
    loadAIRecommendations(false);
  }
  if(sec==='assistant'){
    document.getElementById('chatInput').focus();
  }
}
document.getElementById('nav').addEventListener('click', e=>{
  const item = e.target.closest('.nav-item');
  if(!item) return;
  goToSection(item.dataset.section);
});

/* ============================================================
   RENDER: simple horizontal bar chart (no external libs)
   ============================================================ */
function renderHBarChart(container, data, colorFn){
  container.innerHTML = data.map(d=>{
    const pct = Math.max(4, d.value);
    const color = colorFn ? colorFn(d.value) : 'var(--teal-500)';
    return `<div class="hbar-row">
      <div class="hbar-label">${d.label}</div>
      <div class="hbar-track"><div class="hbar-fill" style="width:${pct}%; background:${color};"><span class="hbar-val">${d.value}${LANG==='ar'?'٪':'%'}</span></div></div>
    </div>`;
  }).join('');
}
function utilColor(v){ return v>85?'var(--red-500)': v>60?'var(--teal-500)': v>35?'var(--amber-500)':'#B7C0C7'; }
function pct(v){ return v + (LANG==='ar'?'٪':'%'); }

/* ============================================================
   DASHBOARD
   ============================================================ */
function renderDashboard(){
  document.getElementById('kpi1Value').textContent = assets.length;
  document.getElementById('statusDistSub').textContent = TF('status_dist_sub', {n:assets.length});

  const overallUtil = Math.round(assets.reduce((s,a)=>s+a.utilization,0)/assets.length);
  document.getElementById('kpi2Value').textContent = pct(overallUtil);

  const criticalCount = assets.filter(a=>a.status==='critical').length;
  document.getElementById('kpi3Value').textContent = criticalCount;
  document.getElementById('kpi3Trend').textContent = TF('kpi3_trend', {n:criticalCount});

  const lowUtilCount = assets.filter(a=>a.utilization<25).length;
  const overUtilCount = assets.filter(a=>a.utilization>85).length;
  const estSavingsK = Math.round((lowUtilCount*45 + overUtilCount*15));
  document.getElementById('kpi4Value').textContent = LANG==='ar' ? `${estSavingsK} ألف ﷼` : `SAR ${estSavingsK}K`;

  const catUtil = CATEGORIES.map((cat, ci)=>{
    const items = assets.filter(a=>a.category===cat);
    const avg = Math.round(items.reduce((s,a)=>s+a.utilization,0)/items.length);
    return {label:L(cat), value:avg};
  }).sort((a,b)=>b.value-a.value);
  renderHBarChart(document.getElementById('dashUtilChart'), catUtil, utilColor);

  const topRisk = [...assets].sort((a,b)=>b.risk-a.risk).slice(0,4);
  document.getElementById('dashRiskList').innerHTML = topRisk.map(a=>riskCardHTML(a)).join('');

  const rows = CATEGORIES.map(cat=>{
    const items = assets.filter(a=>a.category===cat);
    const good = items.filter(i=>i.status==='good').length;
    const warn = items.filter(i=>i.status==='warning').length;
    const crit = items.filter(i=>i.status==='critical').length;
    const overallStatus = crit>0 ? 'critical' : warn>0 ? 'warning':'good';
    const meta = statusMeta[overallStatus];
    return `<tr>
      <td style="font-weight:600;">${L(cat)}</td>
      <td>${items.length}</td>
      <td style="color:#1F7A45;">${good}</td>
      <td style="color:#9A6414;">${warn}</td>
      <td style="color:#B13D2F;">${crit}</td>
      <td><span class="badge ${meta.badge}"><span class="dot ${meta.dot}"></span>${T(meta.key)}</span></td>
    </tr>`;
  }).join('');
  document.getElementById('dashCategoryTable').innerHTML = rows;
}

function riskCardHTML(a){
  const color = a.risk>65?'var(--red-500)':a.risk>35?'var(--amber-500)':'var(--teal-500)';
  const circumference = 2*Math.PI*22;
  const offset = circumference - (a.risk/100)*circumference;
  return `<div class="risk-card">
    <div class="risk-ring">
      <svg width="54" height="54">
        <circle cx="27" cy="27" r="22" fill="none" stroke="#EEF1F3" stroke-width="5"/>
        <circle cx="27" cy="27" r="22" fill="none" stroke="${color}" stroke-width="5"
          stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round"/>
      </svg>
      <div class="risk-ring-val">${pct(a.risk)}</div>
    </div>
    <div style="flex:1;">
      <div style="font-weight:700; font-size:13.5px;">${L(a.name)}</div>
      <div style="font-size:11.5px; color:var(--text-2); margin-top:2px;">${L(a.building)} · ${L(a.category)}</div>
    </div>
  </div>`;
}

/* ============================================================
   ASSETS TABLE + SEARCH
   ============================================================ */
let assetFilter = 'all';
let searchQuery = '';

function renderAssetFilters(){
  document.getElementById('assetFilters').innerHTML =
    `<div class="filter-pill ${assetFilter==='all'?'active':''}" data-cat="all">${T('cat_all')}</div>` +
    CATEGORIES.map((c,ci)=>`<div class="filter-pill ${assetFilter===ci?'active':''}" data-cat="${ci}">${L(c)}</div>`).join('');
}
document.getElementById('assetFilters').addEventListener('click', e=>{
  const pillEl = e.target.closest('.filter-pill');
  if(!pillEl) return;
  assetFilter = pillEl.dataset.cat==='all' ? 'all' : Number(pillEl.dataset.cat);
  renderAssetFilters();
  renderAssetsTable();
});

function healthBar(v){
  const color = v>70?'var(--green-500)':v>40?'var(--amber-500)':'var(--red-500)';
  return `<div style="display:flex; align-items:center; gap:8px;">
    <div class="bar-track" style="width:60px;"><div class="bar-fill" style="width:${v}%; background:${color};"></div></div>
    <span style="font-size:11.5px; color:var(--text-2);">${v}</span>
  </div>`;
}

function matchesSearch(a, q){
  if(!q) return true;
  const hay = [a.name.ar, a.name.en, a.building.ar, a.building.en, a.category.ar, a.category.en]
    .join(' ').toLowerCase();
  return hay.includes(q.toLowerCase());
}

function renderAssetsTable(){
  let list = assetFilter==='all' ? assets : assets.filter(a=>a.category===CATEGORIES[assetFilter]);
  list = list.filter(a=>matchesSearch(a, searchQuery));

  const countEl = document.getElementById('searchCount');
  if(searchQuery){
    countEl.style.display = 'block';
    countEl.textContent = LANG==='ar'
      ? `${list.length} نتيجة لبحثك عن "${searchQuery}"`
      : `${list.length} results for "${searchQuery}"`;
  } else {
    countEl.style.display = 'none';
  }

  document.getElementById('assetsEmpty').style.display = list.length ? 'none' : 'block';
  document.getElementById('assetsTable').innerHTML = list.map(a=>{
    const meta = statusMeta[a.status];
    return `<tr>
      <td style="font-weight:600;">${L(a.name)}</td>
      <td><span class="badge badge-gray">${L(a.category)}</span></td>
      <td style="color:var(--text-2);">${L(a.building)}</td>
      <td>${pct(a.utilization)}</td>
      <td>${healthBar(a.health)}</td>
      <td style="color:var(--text-2);">${TF('days_ago',{n:a.lastMaintenance})}</td>
      <td><span class="badge ${meta.badge}"><span class="dot ${meta.dot}"></span>${T(meta.key)}</span></td>
    </tr>`;
  }).join('');
}

/* live search: filters immediately and jumps to Assets so results are visible */
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
searchInput.addEventListener('input', e=>{
  searchQuery = e.target.value.trim();
  searchClear.classList.toggle('show', searchQuery.length>0);
  if(searchQuery && currentSection!=='assets'){
    assetFilter = 'all';
    renderAssetFilters();
    goToSection('assets');
  }
  renderAssetsTable();
});
searchClear.addEventListener('click', ()=>{
  searchQuery = '';
  searchInput.value = '';
  searchClear.classList.remove('show');
  renderAssetsTable();
  searchInput.focus();
});

/* ============================================================
   MAINTENANCE
   ============================================================ */
function actionFor(a){
  if(a.risk>65) return T('action_urgent');
  if(a.risk>35) return T('action_preventive');
  return T('action_routine');
}
function windowFor(a){
  const days = Math.max(2, Math.round((100-a.risk)/2.2));
  return TF('within_days',{n:days});
}
function renderMaintenance(){
  const sorted = [...assets].sort((a,b)=>b.risk-a.risk).slice(0,10);
  document.getElementById('maintenanceList').innerHTML = sorted.map(a=>{
    const color = a.risk>65?'var(--red-500)':a.risk>35?'var(--amber-500)':'var(--teal-500)';
    const circumference = 2*Math.PI*22;
    const offset = circumference - (a.risk/100)*circumference;
    return `<div class="risk-card">
      <div class="risk-ring">
        <svg width="54" height="54">
          <circle cx="27" cy="27" r="22" fill="none" stroke="#EEF1F3" stroke-width="5"/>
          <circle cx="27" cy="27" r="22" fill="none" stroke="${color}" stroke-width="5"
            stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round"/>
        </svg>
        <div class="risk-ring-val">${pct(a.risk)}</div>
      </div>
      <div style="flex:1;">
        <div style="font-weight:700; font-size:13.5px;">${L(a.name)}</div>
        <div style="font-size:11.5px; color:var(--text-2); margin-top:2px;">${L(a.building)} · ${TF('failure_expected',{w:windowFor(a)})}</div>
      </div>
      <div style="text-align:left;">
        <span class="badge badge-teal">${actionFor(a)}</span>
      </div>
    </div>`;
  }).join('');
}

/* ============================================================
   SPACE UTILIZATION
   ============================================================ */
const DAY_LABELS = [
  {ar:"أحد", en:"Sun"}, {ar:"اثنين", en:"Mon"}, {ar:"ثلاثاء", en:"Tue"}, {ar:"أربعاء", en:"Wed"},
  {ar:"خميس", en:"Thu"}, {ar:"جمعة", en:"Fri"}, {ar:"سبت", en:"Sat"}
];
const HOUR_LABELS = [
  {ar:"8ص", en:"8 AM"},
  {ar:"9ص", en:"9 AM"},
  {ar:"10ص", en:"10 AM"},
  {ar:"11ص", en:"11 AM"},
  {ar:"12م", en:"12 PM"},
  {ar:"1ع", en:"1 PM"},
  {ar:"2ع", en:"2 PM"},
  {ar:"3ع", en:"3 PM"}
];
const heatValues = [];
for(let h=0; h<HOUR_LABELS.length; h++){
  const rowVals = [];
  for(let d=0; d<DAY_LABELS.length; d++){
    const isWeekend = d===5; // Friday column
    rowVals.push(isWeekend ? rangeInt(0,20) : rangeInt(20,95));
  }
  heatValues.push(rowVals);
}
function renderHeatmap(){
  const table = document.getElementById('heatmap');
  let html = '<tr><th></th>' + DAY_LABELS.map(d=>`<th>${L(d)}</th>`).join('') + '</tr>';
  HOUR_LABELS.forEach((hourLabel, hi)=>{
    html += `<tr><th>${L(hourLabel)}</th>`;
    heatValues[hi].forEach(v=>{
      const shade = v>75?'#0B7A6A': v>50?'#0EA894': v>25?'#7FCFC0':'#DCE9E7';
      html += `<td style="background:${shade};">${v}</td>`;
    });
    html += '</tr>';
  });
  table.innerHTML = html;
}

function renderUnderused(){
  const list = [...assets].filter(a=>[1,2,5,4].includes(CATEGORIES.indexOf(a.category)))
    .sort((a,b)=>a.utilization-b.utilization).slice(0,5);
  document.getElementById('underusedList').innerHTML = list.map(a=>`
    <div style="display:flex; align-items:center; justify-content:space-between; padding:11px 0; border-bottom:1px solid var(--border);">
      <div>
        <div style="font-weight:600; font-size:13px;">${L(a.name)}</div>
        <div style="font-size:11.5px; color:var(--text-2);">${L(a.building)}</div>
      </div>
      <span class="badge badge-gray">${TF('occ_pct',{n:a.utilization})}</span>
    </div>`).join('');
}

function renderBuildingChart(){
  const data = BUILDINGS.map(b=>{
    const items = assets.filter(a=>a.building===b);
    const avg = items.length ? Math.round(items.reduce((s,a)=>s+a.utilization,0)/items.length) : 0;
    return {label:L(b), value:avg};
  }).sort((a,b)=>b.value-a.value);
  renderHBarChart(document.getElementById('buildingChart'), data, utilColor);
}

/* ============================================================
   AI LAYER — calls our own /api/groq serverless proxy, which holds
   the real Groq API key server-side (see api/groq.js). The browser
   never sees or stores the key — safe for a public deployment.
   ============================================================ */
const AI_PROXY_ENDPOINT = "/api/groq";
const GROQ_DEFAULT_MODEL = "llama-3.3-70b-versatile";

function getGroqModel(){ return localStorage.getItem('itqan_groq_model') || GROQ_DEFAULT_MODEL; }

async function callGroq(messages, systemPrompt, maxTokens){
  const response = await fetch(AI_PROXY_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: getGroqModel(),
      max_tokens: maxTokens || 1000,
      messages: [{role:"system", content: systemPrompt}, ...messages]
    })
  });
  if(!response.ok){
    let detail = '';
    try{ const errBody = await response.json(); detail = errBody?.error || ''; }catch(e){}
    const err = new Error("AI request failed: " + response.status + (detail ? " — " + detail : ""));
    if(response.status === 500 && /GROQ_API_KEY/i.test(detail)) err.code = 'missing_api_key';
    throw err;
  }
  const data = await response.json();
  return data?.choices?.[0]?.message?.content || '';
}

/* A compact, factual summary of the REAL current dataset — this is the only
   thing the model is allowed to reason from, so it can't invent numbers. */
function buildDataSummary(){
  const byCategory = CATEGORIES.map(cat=>{
    const items = assets.filter(a=>a.category===cat);
    if(!items.length) return null;
    const avgUtil = Math.round(items.reduce((s,a)=>s+a.utilization,0)/items.length);
    const avgHealth = Math.round(items.reduce((s,a)=>s+a.health,0)/items.length);
    return `- ${cat.en} (${cat.ar}): ${items.length} assets, avg utilization ${avgUtil}%, avg health ${avgHealth}/100`;
  }).filter(Boolean).join('\n');

  const byBuilding = BUILDINGS.map(b=>{
    const items = assets.filter(a=>a.building===b);
    if(!items.length) return null;
    const avgUtil = Math.round(items.reduce((s,a)=>s+a.utilization,0)/items.length);
    return `- ${b.en} (${b.ar}): avg utilization ${avgUtil}% across ${items.length} tracked assets`;
  }).filter(Boolean).join('\n');

  const underused = [...assets].sort((a,b)=>a.utilization-b.utilization).slice(0,6)
    .map(a=>`- ${a.name.en} (${a.name.ar}) in ${a.building.en}: ${a.utilization}% utilization, health ${a.health}/100`).join('\n');

  const highRisk = [...assets].sort((a,b)=>b.risk-a.risk).slice(0,6)
    .map(a=>`- ${a.name.en} (${a.name.ar}) in ${a.building.en}: risk score ${a.risk}/100, last maintenance ${a.lastMaintenance} days ago, ${a.incidents} incidents in the past year`).join('\n');

  const overused = assets.filter(a=>a.utilization>85).map(a=>`${a.name.en} (${a.utilization}%)`).join(', ') || 'none';

  return `Total tracked assets/facilities: ${assets.length}
Overall utilization rate: ${Math.round(assets.reduce((s,a)=>s+a.utilization,0)/assets.length)}%
Critical-status assets (risk>65): ${assets.filter(a=>a.status==='critical').length}

CATEGORY AVERAGES:
${byCategory}

BUILDING AVERAGES:
${byBuilding}

LEAST-UTILIZED ASSETS (candidates for reallocation/renting):
${underused}

HIGHEST PREDICTIVE-MAINTENANCE RISK:
${highRisk}

OVER-CAPACITY ASSETS (>85% utilization, candidates for investment/expansion): ${overused}`;
}

function chatSystemPrompt(){
  const lang = LANG==='ar' ? 'Arabic' : 'English';
  return `You are the AI advisor built into "Itqan" (إتقان), a facility-management intelligence platform for a Saudi university, developed for a university hackathon. You help facilities managers understand space utilization, predictive-maintenance risk, and reallocation/rental/investment opportunities across campus buildings, halls, labs and equipment.

Rules:
- Base every claim ONLY on the real facility data summary below. Never invent asset names or numbers that aren't in it.
- Be concise and concrete — 2 to 5 short sentences or a tight bullet list, written for a working facilities manager, not a general audience.
- When you estimate cost or revenue, mark it clearly as an estimate and use SAR.
- Respond in ${lang}.

CURRENT FACILITY DATA:
${buildDataSummary()}`;
}

function recSystemPrompt(){
  return `You are the recommendation engine inside "Itqan" (إتقان), a Saudi university facility-management platform built for a hackathon. Based ONLY on the real facility data summary below, produce 6 concrete, prioritized recommendations for the facilities team.

Use these types: "redistribute" (merge or reallocate underused spaces), "rent" (rent out under-used space for external/evening use), "invest" (expand or add capacity where over-utilized), "maintenance" (an urgent preventive-maintenance action for a high-risk asset). Include at least one of each type where the data supports it.

Respond with ONLY a raw JSON array — no markdown fences, no prose before or after — of objects shaped exactly like this:
[{"type":"redistribute","title_ar":"...","title_en":"...","desc_ar":"...","desc_en":"...","impact_ar":"...","impact_en":"..."}]

Every recommendation must name a specific real asset or building from the data below. Keep each desc under 200 characters. impact must be a short estimated SAR figure or percentage, clearly framed as an estimate.

FACILITY DATA:
${buildDataSummary()}`;
}

/* Rule-based generator kept as an offline fallback if the AI call fails,
   so the demo never breaks even without network access. */
function buildRecommendationsFallback(){
  const recs = [];
  const low = [...assets].filter(a=>a.utilization<25 && CATEGORIES.indexOf(a.category)!==3).sort((a,b)=>a.utilization-b.utilization).slice(0,3);
  low.forEach(a=>{
    recs.push({
      type:'redistribute',
      title:{ar:`إعادة توزيع: ${a.name.ar}`, en:`Redistribute: ${a.name.en}`},
      desc:{
        ar:`معدل إشغال ${a.utilization}٪ فقط في ${a.building.ar}. يقترح النظام دمج الجدولة مع مساحة مشابهة قريبة لتحرير الطاقة الاستيعابية.`,
        en:`Only ${a.utilization}% occupancy in ${a.building.en}. The system suggests merging its schedule with a similar nearby space to free up capacity.`
      },
      impact:{ar:"توفير تقديري 45,000 ﷼ سنويًا", en:"Estimated savings of SAR 45,000 per year"}
    });
  });
  const rentCats = [4,5];
  const rent = assets.filter(a=>rentCats.includes(CATEGORIES.indexOf(a.category)) && a.utilization<40).slice(0,2);
  rent.forEach(a=>{
    recs.push({
      type:'rent',
      title:{ar:`فرصة تأجير: ${a.name.ar}`, en:`Rental opportunity: ${a.name.en}`},
      desc:{
        ar:"إشغال منخفض خارج أوقات الذروة الأكاديمية. يمكن تأجير المرفق لجهات خارجية أو فعاليات مسائية دون التأثير على الجدول الدراسي.",
        en:"Low occupancy outside peak academic hours. The facility could be rented to external parties or evening events without affecting the academic schedule."
      },
      impact:{ar:"إيراد إضافي مقدّر 60,000–90,000 ﷼ سنويًا", en:"Estimated additional revenue of SAR 60,000–90,000 per year"}
    });
  });
  const invest = [...assets].filter(a=>a.utilization>85).slice(0,2);
  invest.forEach(a=>{
    recs.push({
      type:'invest',
      title:{ar:`استثمار/توسعة: ${a.name.ar}`, en:`Invest / expand: ${a.name.en}`},
      desc:{
        ar:`إشغال مرتفع باستمرار (${a.utilization}٪) يشير إلى طلب يفوق الطاقة الحالية. يوصى بدراسة توسعة أو إضافة وحدة مماثلة.`,
        en:`Consistently high occupancy (${a.utilization}%) suggests demand exceeding current capacity. Expanding or adding a similar unit is recommended.`
      },
      impact:{ar:"تخفيف ازدحام وزيادة الطاقة الاستيعابية بنسبة تقديرية 30٪", en:"Reduced congestion and an estimated 30% increase in capacity"}
    });
  });
  const maint = [...assets].sort((a,b)=>b.risk-a.risk).slice(0,2);
  maint.forEach(a=>{
    recs.push({
      type:'maintenance',
      title:{ar:`صيانة عاجلة: ${a.name.ar}`, en:`Urgent maintenance: ${a.name.en}`},
      desc:{
        ar:`مؤشر خطورة ${a.risk}٪ في ${a.building.ar}، وآخر صيانة كانت قبل ${a.lastMaintenance} يومًا. يوصى بفحص فوري.`,
        en:`Risk score of ${a.risk}% in ${a.building.en}, last serviced ${a.lastMaintenance} days ago. Immediate inspection recommended.`
      },
      impact:{ar:"تقليل احتمالية عطل مفاجئ وتوقف الخدمة", en:"Reduces the chance of a sudden failure and service disruption"}
    });
  });
  return recs;
}

function colorForType(t){ return {redistribute:'purple', rent:'teal', invest:'amber', maintenance:'red'}[t] || 'teal'; }
function iconForType(t){ return {redistribute:'↔', rent:'⇥', invest:'↑', maintenance:'⚠'}[t] || '→'; }
function recColor(c){
  const map = {purple:['#EEEDFE','#534AB7'], teal:['var(--teal-050)','#0B7A6A'], amber:['var(--amber-050)','#9A6414'], red:['var(--red-050)','#B13D2F']};
  return map[c] || map.teal;
}

let recFilter = 'all';
let recCache = null;   // array of recommendations once generated
let recBusy = false;
let recSource = null;  // 'ai' | 'fallback'
let recError = null;

function renderRecSkeleton(){
  document.getElementById('recGrid').innerHTML = Array.from({length:6}).map(()=>
    `<div class="skeleton-card">
      <div class="skeleton-line" style="width:34px; height:34px; border-radius:10px;"></div>
      <div class="skeleton-line" style="width:70%; margin-top:14px;"></div>
      <div class="skeleton-line" style="width:95%;"></div>
      <div class="skeleton-line" style="width:60%;"></div>
    </div>`
  ).join('');
}

async function loadAIRecommendations(force){
  if(recBusy) return;
  if(recCache && !force){ renderRecommendations(); return; }
  recBusy = true;
  recError = null;
  const btn = document.getElementById('recRegenerate');
  if(btn) btn.disabled = true;
  renderRecSkeleton();
  document.getElementById('recStatus').innerHTML = '';
  try{
    const raw = await callGroq(
      [{role:'user', content:'Generate the recommendations now, as raw JSON only.'}],
      recSystemPrompt(), 1500
    );
    const cleaned = raw.replace(/```json|```/g,'').trim();
    const parsed = JSON.parse(cleaned);
    recCache = parsed.map(r=>({
      type:r.type,
      title:{ar:r.title_ar, en:r.title_en},
      desc:{ar:r.desc_ar, en:r.desc_en},
      impact:{ar:r.impact_ar, en:r.impact_en}
    }));
    recSource = 'ai';
  }catch(err){
    recCache = buildRecommendationsFallback();
    recSource = 'fallback';
    recError = err && err.code === 'missing_api_key' ? T('ai_not_configured') : T('rec_ai_error');
  }
  recBusy = false;
  if(btn) btn.disabled = false;
  renderRecommendations();
  renderRecStatus();
}

function renderRecStatus(){
  const badge = document.getElementById('recAiBadge');
  if(badge) badge.style.display = recSource==='ai' ? 'inline-flex' : 'none';
  document.getElementById('recStatus').innerHTML = recError ? `<div class="error-box">${recError}</div>` : '';
}

function renderRecommendations(){
  const list = recCache || [];
  const filtered = recFilter==='all' ? list : list.filter(r=>r.type===recFilter);
  document.getElementById('recGrid').innerHTML = filtered.length ? filtered.map(r=>{
    const [bg,fg] = recColor(colorForType(r.type));
    return `<div class="rec-card">
      <div class="rec-tag" style="background:${bg}; color:${fg};">${iconForType(r.type)}</div>
      <div style="font-weight:700; font-size:14px; margin-bottom:8px;">${L(r.title)}</div>
      <div style="font-size:12.5px; color:var(--text-2); line-height:1.8;">${L(r.desc)}</div>
      <div class="rec-impact">${T('impact_label')} <b>${L(r.impact)}</b></div>
    </div>`;
  }).join('') : `<div class="empty-hint">${T('no_recs')}</div>`;
}
document.getElementById('recTabs').addEventListener('click', e=>{
  const tab = e.target.closest('.tab');
  if(!tab) return;
  document.querySelectorAll('#recTabs .tab').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
  recFilter = tab.dataset.filter;
  renderRecommendations();
});
document.getElementById('recRegenerate').addEventListener('click', ()=>loadAIRecommendations(true));

/* ============================================================
   AI ASSISTANT — live chat over the real facility data
   ============================================================ */
const CHAT_SUGGESTIONS = [
  {ar:"ما هي أكثر 3 مرافق تحتاج انتباهًا عاجلاً؟", en:"What 3 facilities need urgent attention?"},
  {ar:"أين توجد أفضل فرصة لتوفير التكاليف هذا الفصل؟", en:"Where's the best cost-saving opportunity this term?"},
  {ar:"لخّص وضع استخدام المساحات في مبنى الهندسة", en:"Summarize space usage in the Engineering building"},
  {ar:"ما المرافق المرشحة للتأجير الخارجي؟", en:"Which facilities are good candidates for external rental?"}
];
let chatHistory = [];   // {role:'user'|'assistant', content:string}
let chatBusy = false;

function escapeHtml(s){
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

function renderChatMessages(){
  const el = document.getElementById('chatMessages');
  if(chatHistory.length===0 && !chatBusy){
    el.innerHTML = `<div class="chat-empty">${T('chat_empty_hint')}</div>`;
    return;
  }
  el.innerHTML = chatHistory.map(m=>
    `<div class="chat-msg ${m.role==='user'?'user':'ai'}">${escapeHtml(m.content)}</div>`
  ).join('') + (chatBusy ? `<div class="chat-msg ai"><div class="typing-dots"><span></span><span></span><span></span></div></div>` : '');
  el.scrollTop = el.scrollHeight;
}

async function sendChatMessage(text){
  text = (text || '').trim();
  if(!text || chatBusy) return;
  chatHistory.push({role:'user', content:text});
  chatBusy = true;
  document.getElementById('chatInput').value = '';
  document.getElementById('chatSend').disabled = true;
  renderChatMessages();
  try{
    const apiMessages = chatHistory.map(m=>({role:m.role, content:m.content}));
    const reply = await callGroq(apiMessages, chatSystemPrompt(), 700);
    chatHistory.push({role:'assistant', content:reply.trim()});
  }catch(err){
    const msg = err && err.code === 'missing_api_key' ? T('ai_not_configured') : T('chat_error');
    chatHistory.push({role:'assistant', content:msg});
  }
  chatBusy = false;
  document.getElementById('chatSend').disabled = false;
  renderChatMessages();
}

function renderChatSuggestions(){
  document.getElementById('chatSuggestions').innerHTML = CHAT_SUGGESTIONS.map((s,i)=>
    `<button class="suggestion-chip" data-idx="${i}" type="button">${L(s)}</button>`
  ).join('');
}
document.getElementById('chatSuggestions').addEventListener('click', e=>{
  const chip = e.target.closest('.suggestion-chip');
  if(!chip) return;
  sendChatMessage(L(CHAT_SUGGESTIONS[Number(chip.dataset.idx)]));
});
document.getElementById('chatSend').addEventListener('click', ()=>{
  sendChatMessage(document.getElementById('chatInput').value);
});
document.getElementById('chatInput').addEventListener('keydown', e=>{
  if(e.key==='Enter') sendChatMessage(e.target.value);
});

/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */
function applyStaticStrings(){
  document.querySelectorAll('[data-k]').forEach(el=>{
    el.textContent = T(el.dataset.k);
  });
  searchInput.placeholder = T('search_ph');
  document.getElementById('chatInput').placeholder = T('chat_ph');
  document.getElementById('brandName').textContent = LANG==='ar' ? 'إتقان' : 'Itqan';
  document.getElementById('brandSub').textContent = LANG==='ar' ? 'منصة إتقان الذكية' : 'Itqan Facility Intelligence';
  document.getElementById('avatarInitials').textContent = LANG==='ar' ? 'جم' : 'JM';
  document.getElementById('langBtnLabel').textContent = LANG==='ar' ? 'EN' : 'ع';
  const [titleKey, subKey] = sectionTitles[currentSection];
  document.getElementById('topbarTitle').textContent = T(titleKey);
  document.getElementById('topbarSub').textContent = T(subKey);
}

function renderAll(){
  renderDashboard();
  renderAssetFilters();
  renderAssetsTable();
  renderMaintenance();
  renderHeatmap();
  renderUnderused();
  renderBuildingChart();
  if(recCache) { renderRecommendations(); renderRecStatus(); }
  renderChatSuggestions();
  renderChatMessages();
  applyStaticStrings();
}

document.getElementById('langBtn').addEventListener('click', ()=>{
  LANG = LANG==='ar' ? 'en' : 'ar';
  const html = document.getElementById('htmlRoot');
  html.setAttribute('lang', LANG);
  html.setAttribute('dir', LANG==='ar' ? 'rtl' : 'ltr');
  renderAll();
});

/* ============================================================
   LOGIN — simple client-side demo authentication
   ============================================================ */
const DEMO_USER = 'admin';
const DEMO_PASS = 'itqan2026';
const SESSION_KEY = 'itqan_session';

const LOGIN_STR = {
  ar:{
    title:'تسجيل الدخول', hint:'استخدم البيانات التجريبية: admin / itqan2026',
    userLabel:'اسم المستخدم', passLabel:'كلمة المرور', submit:'دخول',
    error:'اسم المستخدم أو كلمة المرور غير صحيحة.'
  },
  en:{
    title:'Sign in', hint:'Use the demo credentials: admin / itqan2026',
    userLabel:'Username', passLabel:'Password', submit:'Sign in',
    error:'Incorrect username or password.'
  }
};

function applyLoginStrings(){
  const s = LOGIN_STR[LANG];
  document.getElementById('loginTitle').textContent = s.title;
  document.getElementById('loginHint').textContent = s.hint;
  document.getElementById('loginUserLabel').textContent = s.userLabel;
  document.getElementById('loginPassLabel').textContent = s.passLabel;
  document.getElementById('loginSubmit').textContent = s.submit;
  document.getElementById('loginLangBtn').textContent = LANG==='ar' ? 'EN' : 'ع';
  document.getElementById('loginBrandName').textContent = LANG==='ar' ? 'إتقان' : 'Itqan';
  document.getElementById('loginBrandSub').textContent = LANG==='ar' ? 'منصة إتقان الذكية' : 'Itqan Facility Intelligence';
}

function showApp(){
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('appRoot').style.display = '';
  renderAll();
}

function showLogin(){
  document.getElementById('appRoot').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  applyLoginStrings();
  document.getElementById('loginUsername').focus();
}

document.getElementById('loginForm').addEventListener('submit', e=>{
  e.preventDefault();
  const user = document.getElementById('loginUsername').value.trim();
  const pass = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginError');
  if(user === DEMO_USER && pass === DEMO_PASS){
    errEl.style.display = 'none';
    sessionStorage.setItem(SESSION_KEY, '1');
    showApp();
  } else {
    errEl.textContent = LOGIN_STR[LANG].error;
    errEl.style.display = 'block';
  }
});

document.getElementById('loginLangBtn').addEventListener('click', ()=>{
  LANG = LANG==='ar' ? 'en' : 'ar';
  const html = document.getElementById('htmlRoot');
  html.setAttribute('lang', LANG);
  html.setAttribute('dir', LANG==='ar' ? 'rtl' : 'ltr');
  applyLoginStrings();
});

document.getElementById('avatarInitials').addEventListener('click', ()=>{
  const confirmMsg = LANG==='ar' ? 'هل تريد تسجيل الخروج؟' : 'Log out?';
  if(confirm(confirmMsg)){
    sessionStorage.removeItem(SESSION_KEY);
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    showLogin();
  }
});

/* ============================================================
   AI SETTINGS MODAL — model selection only.
   The Groq API key lives server-side in api/groq.js (via the
   GROQ_API_KEY environment variable) — visitors never enter one.
   ============================================================ */
const SETTINGS_STR = {
  ar:{
    title:'إعدادات الذكاء الاصطناعي',
    hint:'اختر نموذج Groq المستخدم في المساعد الذكي والتوصيات. مفتاح API مُهيّأ من جهة الخادم ولا يظهر أبدًا في المتصفح.',
    modelLabel:'النموذج (Model)', save:'حفظ', cancel:'إلغاء'
  },
  en:{
    title:'AI Settings',
    hint:"Choose the Groq model used by the AI assistant and recommendations. The API key is configured server-side and never appears in the browser.",
    modelLabel:'Model', save:'Save', cancel:'Cancel'
  }
};

function applySettingsStrings(){
  const s = SETTINGS_STR[LANG];
  document.getElementById('settingsTitle').textContent = s.title;
  document.getElementById('settingsHint').textContent = s.hint;
  document.getElementById('settingsModelLabel').textContent = s.modelLabel;
  document.getElementById('settingsSave').textContent = s.save;
  document.getElementById('settingsCancel').textContent = s.cancel;
}

function openSettings(){
  applySettingsStrings();
  document.getElementById('groqModelSelect').value = getGroqModel();
  document.getElementById('settingsModal').style.display = 'flex';
}
function closeSettings(){
  document.getElementById('settingsModal').style.display = 'none';
}

document.getElementById('settingsBtn').addEventListener('click', openSettings);
document.getElementById('settingsCancel').addEventListener('click', closeSettings);
document.getElementById('settingsModal').addEventListener('click', e=>{
  if(e.target.id === 'settingsModal') closeSettings();
});
document.getElementById('settingsSave').addEventListener('click', ()=>{
  const model = document.getElementById('groqModelSelect').value;
  localStorage.setItem('itqan_groq_model', model);
  closeSettings();
});

/* ============================================================
   INIT
   ============================================================ */
if(sessionStorage.getItem(SESSION_KEY) === '1'){
  showApp();
} else {
  showLogin();
}
