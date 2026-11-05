const icons = {
 sparkle:'<path d="m13 2 2.5 7.5L23 12l-7.5 2.5L13 22l-2.5-7.5L3 12l7.5-2.5Z"/><path d="m5 2 1 3 3 1-3 1-1 3-1-3-3-1 3-1Z"/>',
 test:'<rect x="5" y="4" width="15" height="19" rx="2"/><path d="M10 4V2h5v2M9 10h7M9 15h7M9 20h4"/>',
 profile:'<path d="M4 8V5a2 2 0 0 1 2-2h6l3 4h7v15H4Z"/><circle cx="13" cy="12" r="2.5"/><path d="M8.5 20c.5-4 8.5-4 9 0"/>',
 report:'<path d="M6 2h10l5 5v17H6Z M16 2v6h5M10 13h7M10 17h7M10 21h4"/>',
 mentor:'<path d="M22 12a8.5 8.5 0 0 1-8.5 8.5H8l-5 3 1.5-6A8.5 8.5 0 1 1 22 12Z"/><path d="M9 11h8M9 15h5"/>',
 career:'<circle cx="13" cy="13" r="10"/><path d="m17 8-2 7-7 3 3-7Z M13 1v3M13 22v3M1 13h3M22 13h3"/>'
};
const products = [
 {id:'persona-insight',type:'expert',title:'天赋发现专家',en:'TALENT DISCOVERY',icon:'sparkle',desc:'从测试到真实经历，逐步看清自己的优势与值得探索的方向。',tags:['自我探索','个人成长'],badge:'即将上线',note:'完整探索流程',cta:'查看专家',features:['多维度测试与个性化解读','交叉分析不同测试结果','从真实经历中寻找优势证据','持续更新个人优势档案'],detail:'测试只是起点。通过多套测试、经历访谈和交叉分析，逐步建立有依据的个人优势画像，并探索适合自己的发展方向。'},
 {id:'test-runner',type:'skill',title:'测试生成与结果解码',en:'TEST RUNNER',icon:'test',desc:'用清晰的测试页完成自我探索，让每次作答都留下完整结果。',tags:['性格测试','结果解码'],badge:'内置技能',note:'随天赋发现专家提供',cta:'了解技能',features:['生成独立 HTML 测试页','解码测试结果并检查完整性','为后续解读提供结构化数据'],detail:'通过本地 HTML 测试页完成作答，再将结果码带回对话。负责测试生成和结果解码，与专家的档案、报告能力配合使用。'},
 {id:'profile-keeper',type:'skill',title:'个人优势档案',en:'PROFILE KEEPER',icon:'profile',desc:'把零散的测试、事实与经历，积累成一份不断生长的个人画像。',tags:['证据沉淀','交叉分析'],badge:'内置技能',note:'随天赋发现专家提供',cta:'了解技能',features:['记录测试结果和个人事实','关联经历证据与优势假设','保留矛盾和待探索问题'],detail:'将测试、用户经历和能力证据放在一起，维护持续更新的个人档案。结论保留依据，证据不足的判断明确标为假设。'},
 {id:'report-writer',type:'skill',title:'个人成长报告',en:'REPORT WRITER',icon:'report',desc:'让每次新发现，都沉淀在同一份可阅读、可分享的个人报告里。',tags:['HTML 报告','持续更新'],badge:'内置技能',note:'随天赋发现专家提供',cta:'了解技能',features:['维护同一份 HTML 个人报告','提供多种报告主题','记录新发现与报告更新'],detail:'将个人档案整理为结构清晰的 HTML 报告。随着测试和访谈累积，更新同一份报告，方便回看、分享和对比自己的新发现。'},
 {id:'mentor',type:'skill',title:'经历挖掘与成长答疑',en:'GROWTH MENTOR',icon:'mentor',desc:'从你真正做过的事出发，发现那些被忽略的能力与行为模式。',tags:['经历访谈','个性化答疑'],badge:'内置技能',note:'随天赋发现专家提供',cta:'了解技能',features:['通过访谈梳理真实经历','从具体事件提取能力证据','结合已有档案回应成长问题'],detail:'通过具体的经历访谈，理解哪些任务让你高效、哪些环境容易消耗精力。基于个人档案答疑，让建议有现实依据。'},
 {id:'career-explorer',type:'skill',title:'职业方向探索',en:'CAREER EXPLORER',icon:'career',desc:'把兴趣、优势与已有积累，转化为值得进一步验证的发展方向。',tags:['可迁移能力','方向验证'],badge:'内置技能',note:'随天赋发现专家提供',cta:'了解技能',features:['梳理已有的可迁移能力','探索兴趣与职业方向的联系','设计低成本的方向验证实验'],detail:'结合优势假设、兴趣与真实经历，探索值得了解的发展方向，并通过小规模实践验证。职业建议作为探索参考，不作确定性承诺。'}
];
let currentType='all';
const grid=document.getElementById('productGrid'),search=document.getElementById('search'),dialog=document.getElementById('productDialog');
function icon(name){return `<svg viewBox="0 0 26 26" aria-hidden="true">${icons[name]}</svg>`;}
function render(){const q=search.value.trim().toLowerCase();const list=products.filter(p=>(currentType==='all'||p.type===currentType)&&[p.title,p.desc,p.en,...p.tags].join(' ').toLowerCase().includes(q));grid.innerHTML=list.map(p=>`<article class="product-card"><div class="product-top"><div class="product-icon">${icon(p.icon)}</div><span class="badge">${p.badge}</span></div><h3>${p.title}</h3><p class="desc">${p.desc}</p><div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div><button class="card-bottom" data-id="${p.id}" aria-label="${p.cta}：${p.title}"><span>${p.note}</span><strong>${p.cta}<span class="arrow">↗</span></strong></button></article>`).join('');document.getElementById('resultCount').textContent=`${list.length} 件作品`;document.getElementById('emptyState').hidden=list.length>0;}
document.querySelectorAll('[data-type]').forEach(b=>b.addEventListener('click',()=>{currentType=b.dataset.type;document.querySelectorAll('[data-type]').forEach(t=>t.setAttribute('aria-selected',String(t===b)));render();}));
search.addEventListener('input',render);
document.getElementById('clearSearch').addEventListener('click',()=>{search.value='';document.querySelector('[data-type="all"]').click();});
grid.addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(!b)return;openProduct(b.dataset.id);});
function openProduct(id){const p=products.find(p=>p.id===id);document.getElementById('dialogContent').innerHTML=`<div class="product-icon">${icon(p.icon)}</div><div class="dialog-type">${p.en} / ${p.badge}</div><h2 class="dialog-title">${p.title}</h2><p class="dialog-desc">${p.detail}</p><div class="dialog-list">${p.features.map((f,i)=>`<div><span>0${i+1}</span>${f}</div>`).join('')}</div><p class="dialog-notice">${p.type==='expert'?'天赋发现专家正在准备发布。正式上线后，这里将提供前往 WorkBuddy 的使用入口。':'该技能是「天赋发现专家」的内置能力，随专家提供，不单独售卖。'}</p><div class="dialog-action"><button id="copyProduct">复制${p.type==='expert'?'专家':'技能'}名称</button><a href="https://www.workbuddy.cn/" target="_blank" rel="noopener">了解 WorkBuddy ↗</a></div>`;document.getElementById('copyProduct').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(p.title);toast('已复制：'+p.title);}catch{toast('名称：'+p.title);}});dialog.showModal();}
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!dialog.open&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();search.focus();}});
let toastTimer;function toast(text){const t=document.getElementById('toast');t.textContent=text;t.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('visible'),2500);}
document.getElementById('year').textContent=new Date().getFullYear();render();
