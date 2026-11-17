const products = [
  {
    id: 'stickman',
    section: 'experts',
    name: '把知识做成火柴人视频',
    summary: '把难拍的科普稿发来，用生活里的小场景把原理演清楚。',
    detail: '适合写科普稿、教学稿或产品原理说明的人。先选画法，再看脚本、分镜和配音方案。确认后拿到有声视频、逐段提示词和可带到下一集的角色卡。',
    points: ['12 种画法可选，从漫画格到分屏对照', '用道具的变化演出条件、动作和结果', '普通话旁白、单行中文字幕和 MP4 成片'],
    status: '开发预览',
  },
  {
    id: 'talent',
    section: 'experts',
    name: '天赋发现专家',
    summary: '从测试和真实经历里找到自己的优势与值得探索的方向。',
    detail: '从多套测试、经历访谈和交叉分析入手，把有证据的优势和有待验证的猜想写进个人报告。',
    points: ['梳理不同测试之间的共同点和差异', '从具体经历找优势的证据', '随着新经历和发现持续更新个人报告'],
    status: '开发预览',
  },
  {
    "id": "explain-v2",
    "productId": "qingzhu-anatomy-v2",
    "section": "skills",
    "name": "青竹-把原理演给你看V2",
    "marketName": "青竹-把原理演给你看V2",
    "summary": "一个问题，先查原文、用白话讲清，再按需做成可操作的学习网页。",
    "detail": "看不懂的原理，别再硬啃了。发给青竹，它会变成一个你能点、能拖、能自己试的网页，先猜结果，再动手验证。2.0 新增搜索增强：动手做之前，先全面查证原文资料，重要结论都附出处，讲得准，也经得起查。学生自学、老师备课、家长讲题、博主做科普，不用再找资料、找视频、找工具、拼讲解。把问题发来，原理演给你看。",
    "points": [
      "先查证原文资料，重要结论附出处",
      "用白话和生活例子解释，按需加入点击、拖动和对比",
      "可选互动演示、拆解图、实验记录和可打印讲义"
    ],
    "status": "已发布",
    "usage": "我不明白杠杆为什么会平衡。先用生活例子讲清，再做一个能改变两边重量的网页。",
    "notice": "已付费上架，具体价格与计费方式以 WorkBuddy 页面为准。制作需要可用的 AI、Node.js 和浏览器环境，可能消耗宿主 AI 额度；高级 3D 为试用能力。用于学习讲解，不代替工程设计，也不包含视频制作。",
    "pricing": "paid"
  },
  {
    "id": "article-images",
    "productId": "qingzhu-note-to-image",
    "section": "skills",
    "name": "给文章自动配图",
    "marketName": "给文章自动配图",
    "summary": "全文发来，自动选段落、画同风格配图、插回正文。",
    "detail": "文章写完了，还在到处找图？把全文发来，我挑出适合配图的段落，画一组风格统一的插图，再插回正文，得到一篇图文齐全的稿子。",
    "points": [
      "按内容挑出适合配图的段落",
      "369 条风格记录可浏览选择，其中 12 款附参考图",
      "统一整篇画风，检查水印后插回正文，交付配图版 Markdown"
    ],
    "status": "已发布",
    "usage": "给这篇文章配 3 张同风格插图，先让我选画风，保留原文并把图片插回正文。",
    "notice": "需要当前环境提供生图工具和可用额度。出图要求无水印，插入正文前逐张复查；无法生成或核验的图片会标为待补。",
    "image": "assets/article-images-demo.webp",
    "imageAlt": "手绘风格的露营清单配图",
    "imageTitle": "手绘露营清单样例"
  },
  {
    "id": "source-search",
    "productId": "qingzhu-source-search",
    "section": "skills",
    "name": "青竹 · 查原文找出处",
    "marketName": "青竹 · 查原文找出处",
    "summary": "一句话、一个数据，帮你查到原文、发布者、日期和具体页码。",
    "detail": "一句话、一个数据，不知道出自哪里？发来一句话、一个题目或一段文章，帮你查原文、找出处。官网、PDF、论文、开源项目四类资料任选，适合写公众号、做课件、写报告，或核对一条数据和说法。先按你指定的主题、时间、语言或机构搜，再打开原文确认，合并重复转载和镜像。每条结果给出发布者、可确认的日期、原文直达链接、能支持哪句话，以及去哪一章或哪一页看。只找到摘要、原文打不开，或几份资料说法不一致时，会单独标明哪些已核对、哪些还缺证据，由你决定用哪一条。",
    "points": [
      "官网、PDF、论文、开源项目四类来源可选",
      "按主题、时间、语言或站点查找，合并重复转载",
      "列明作者、日期、原文链接及支持说法的章节或页码"
    ],
    "status": "已发布",
    "usage": "帮我查月亮为什么有圆缺，找两份原文资料，其中一份是 PDF，说明每份能支持什么。",
    "notice": "只查可访问的公开资料。摘要、无法打开的原文、来源冲突和证据不足会单列说明，不把搜索摘要当作全文已经核实。"
  },
  {
    "id": "search-report",
    "productId": "qingzhu-search-report",
    "section": "skills",
    "name": "青竹 · 自动查资料做报告",
    "marketName": "青竹 · 自动查资料做报告",
    "summary": "给一个题目或链接，自动查资料、核对原文，做成附出处的报告，PDF、Markdown、CSV 任选。",
    "detail": "临时要一份调研报告，资料却散落各处？给我一个题目或一组公开链接，自动查找资料、核对原文、提炼结论，做成能直接发给同事、老师或客户的报告。PDF、Markdown、CSV 三种交付，可任选一种或一起导出：PDF 排好版方便阅读转发，Markdown 保留完整正文方便二次修改，CSV 把标题、发布机构、日期、原文链接和证据位置列成可筛选的来源表，多个文件的来源编号一致。报告先回答你要查的问题，再列出主要发现和对应出处。可指定时间、机构、语言，或限定只用你给的链接；转载和镜像合并，只有摘要、无法访问、说法冲突或证据不足的资料会单独标明。适合会前准备、临时调研和课题作业。",
    "points": [
      "给题目或一组公开链接，查资料并核对原文",
      "PDF、Markdown、CSV 可单选或一起导出",
      "报告结论与来源表对应，保留链接和证据位置"
    ],
    "status": "已发布",
    "usage": "查月相和月食有什么区别，给我一份附出处的小报告，PDF、Markdown 和 CSV 都要。",
    "notice": "使用可访问的公开资料；摘要、访问失败、冲突和证据不足会标明。可指定时间、地区、语言或只用给定链接，资料未支持的内容不会补成结论。"
  },
  {
    "id": "draft-to-ppt",
    "productId": "qingzhu-draft-to-ppt",
    "section": "skills",
    "name": "青竹 · 文稿转PPT",
    "marketName": "青竹 · 文稿转PPT",
    "summary": "文稿发来，自动提炼重点排成可编辑的 PPT，六种配色任选。",
    "detail": "讲稿写好了，还要一页页排版？把讲稿、会议纪要、Word 或 Markdown 文稿发来，提炼每页重点，自动排成可编辑的 PPT。商务蓝、极简白、科技深色、清新绿、暖色讲义、深紫提案六种配色任选。可指定听众、用途和页数，按内容安排封面、重点页、对比页、步骤页和结尾；关键数字和结论保留，解释细节放进演讲备注。适合周报、项目汇报、培训讲课和给客户介绍方案。交付 .pptx，文字可继续修改；稿子里没有的数据不会自行补造。",
    "points": [
      "讲稿、会议纪要、Word 或 Markdown 转可编辑 PPTX",
      "商务蓝、极简白、科技深色、清新绿、暖色讲义、深紫提案六种配色",
      "按听众、用途和页数组织页面，解释细节放演讲备注"
    ],
    "status": "已发布",
    "usage": "把这份项目周报做成 5 页可编辑 PPT，用商务蓝，数字和日期保持原样。",
    "notice": "需要提供现成文稿，交付 .pptx，文字可继续修改；稿子里没有的数据不会自行补造。"
  },
  {
    "id": "meeting-notes",
    "productId": "qingzhu-meeting-notes",
    "section": "skills",
    "name": "青竹 · 会议纪要和待办整理",
    "marketName": "青竹 · 会议纪要和待办整理",
    "summary": "文字稿发来，整理成 Word 纪要和 Excel 待办表，谁负责、何时完成写清楚。",
    "detail": "会开完了，纪要和待办还没整理？把会议文字稿、零散笔记或上次的待办表发来，直接得到 Word 纪要、Markdown 和 Excel 跟进表：决定了什么、谁负责、什么时候完成，一目了然。可选正式纪要、周例会记录、行动清单或工作简报；上次没做完的事项能接着跟，并附对应原话方便核对。适合会议记录人、项目负责人和行政人员。人名、数字或转写有疑问的地方会单列待确认，讨论中的建议不会被写成已通过的决议。录音需先转成文字；文件默认保存在本地，企业微信同步为另行接通的可选步骤。",
    "points": [
      "正式纪要、周例会记录、行动清单、工作简报可选",
      "交付 Word 纪要、Markdown 和 Excel 跟进表",
      "写清负责人、截止时间和原话出处，承接上次未完成事项"
    ],
    "status": "已发布",
    "usage": "整理这份会议文字稿，给我 Word 纪要和 Excel 待办表；没说清的负责人和日期单独列出来。",
    "notice": "录音需先转成文字；人名、数字或转写疑点会列为待确认，建议不会写成已通过的决议。文件默认保存在本地；企业微信同步需另行接通。"
  },
  {
    "id": "excel-workbench",
    "productId": "qingzhu-excel-workbench",
    "section": "skills",
    "name": "青竹 · Excel/WPS表格自动化",
    "marketName": "青竹 · Excel/WPS表格自动化",
    "summary": "发来表格，合并、出报表、统一格式；销售月报、库存、成本核算模板现成可用。",
    "detail": "月底汇总、重复做报表，太耗时间？发来 Excel、WPS 表格或 CSV，帮你合并多张表、生成报表、统一格式。内置销售月报、库存车龄分析、成本利润核算三套可修改模板，数据能继续填，公式能继续改。先核对列名、单位和统计范围再输出；合并时保留来源，发现重复行会列出来由你选择。适合财务、销售、行政和做门店经营统计的人。原文件保留，公式结果请在 Excel 或 WPS 中重算核对。部分普通库打不开的 xlsx/xlsm 可尝试只读取数据；不执行宏，不保证修复所有损坏文件。",
    "points": [
      "合并多张表、生成报表、统一格式",
      "销售月报、库存车龄分析、成本利润核算三套可修改模板",
      "核对列名、单位和统计范围，保留合并来源并列出重复行"
    ],
    "status": "已发布",
    "usage": "把这三张门店销售表合并成月报，保留来源，重复行先列出来让我确认。",
    "notice": "原文件保留，公式结果请在 Excel 或 WPS 中重算核对。部分难读的 xlsx/xlsm 可尝试只读取数据；不执行宏，不保证修复所有损坏文件。"
  },
  {
    "id": "data-charts",
    "productId": "qingzhu-data-charts",
    "section": "skills",
    "name": "青竹 · Excel一键生成图表",
    "marketName": "青竹 · Excel一键生成图表",
    "summary": "表格发来，32 类图表任选，生成能直接打开、鼠标一碰就看读数的交互图表。",
    "detail": "数据在表里，图却画不出来？上传 Excel、CSV 或 JSON，从 32 类图表、3 套主题里选，得到浏览器直接打开的交互图表，鼠标移上去就能看读数，每张图还带数据事实卡。对比、趋势、占比、分布、相关关系都能做，多张图可以放在一起；不知道选哪种，先看字段、缺失值和数据范围，再给你选项。适合工作汇报、销售分析和学习展示。图表库随包提供，生成后无需联网。默认交付独立 HTML，不等同于图片、文字报告或 PPT；地图细分区域需另提供地图数据。",
    "points": [
      "Excel、CSV、JSON 均可输入，32 类图表、3 套主题可选",
      "支持对比、趋势、占比、分布、相关关系与多图组合",
      "独立 HTML 可离线打开，鼠标移上去看读数，每张图附数据事实卡"
    ],
    "status": "已发布",
    "usage": "用这张月度销售表做趋势和门店对比图，先检查缺失值，再给我能直接打开的 HTML。",
    "notice": "默认交付独立 HTML，不等同于图片、文字报告或 PPT。图表库随包提供，生成后无需联网；地图细分区域需要另提供地图数据。"
  },
  {
    "id": "explain",
    "productId": "qingzhu-anatomy-svg",
    "section": "skills",
    "name": "把原理演给你看",
    "marketName": "把原理演给你看",
    "summary": "读不明白的一段话，做成能操作的演示，一步步看清楚。",
    "detail": "碰到读不明白的一段话，发给我。我把它做成能操作的演示，让你亲眼看到每一步是怎么发生的。",
    "points": [
      "用熟悉的例子讲原理",
      "生成可点击或拖动的 HTML 演示",
      "用简单自测检查是否理解"
    ],
    "status": "已发布",
    "usage": "我读不懂这段原理，请用生活例子解释，再做一个能改变条件、看到结果的演示。",
    "notice": "交付网页演示，用浏览器打开。用于帮助学习和理解，不代替实际工程验证；V2 另提供先查证资料、重要结论附出处的学习流程。"
  },
  {
    "id": "cover",
    "productId": "qingzhu-article-cover",
    "section": "skills",
    "name": "帮我做张封面",
    "marketName": "帮我做张封面",
    "summary": "文章、笔记或一句标题，发来就做成一张封面。",
    "detail": "有一篇文章、一条笔记，甚至只有一句标题，都可以发来，我帮你做成一张封面。",
    "points": [
      "内置 34 种封面风格",
      "按发布平台选画幅",
      "出图要求无水印，交付前逐张复查"
    ],
    "status": "已发布",
    "usage": "给这篇散步主题文章做张封面，先让我选画风和尺寸，标题用我发来的原文。",
    "notice": "需要当前环境提供生图工具和可用额度。无法生成或核验的图片会标为待补；具体收费以平台页面为准。",
    "image": "assets/cover-demo.webp",
    "imageAlt": "散步主题的立体纸雕风格文章封面",
    "imageTitle": "立体纸雕封面样例"
  },
];

const sections = { home: '首页', experts: '专家', skills: '技能' };
const content = document.querySelector('#content');
const nav = document.querySelectorAll('.site-nav a');
const styleImage = 'assets/stickman-styles.png';
const styleAlt = '同一个等票例子在漫画格、科普面板等 12 种画法里的对照图';

function card(product) {
  return `<a class="card" href="#${product.section}/${product.id}">
    <img src="assets/products/${product.id}.png" width="52" height="52" alt="">
    <span><span class="card-title">${product.name}</span><span class="card-description">${product.summary}</span>${product.section === 'skills' ? `<span class="badge card-status">${product.status}${product.pricing === 'paid' ? ' · 付费' : ''}</span>` : ''}</span>
    <span class="card-arrow" aria-hidden="true">→</span>
  </a>`;
}

function intro(title, description) {
  return `<section class="intro">
    <h1 tabindex="-1">${title}</h1>
    <p>${description}</p>
  </section>`;
}

function sectionHeading(label, section) {
  return `<div class="section-head"><h2>${label}</h2>
    <a class="text-link" href="#${section}">全部${sections[section]} <span aria-hidden="true">→</span></a>
  </div>`;
}

function home() {
  const [stickman, talent] = products;
  const featuredSkills = products.filter((product) => product.section === 'skills');
  return intro('青竹AI', '用 WorkBuddy 查资料、做报告、处理表格，也能配图、做封面、学原理。') + `
    <section class="shelf" aria-label="精选专家">
      ${sectionHeading('精选专家', 'experts')}
      <article class="feature">
        <div class="feature-copy">
          <span class="badge">12 种画法</span>
          <h3>${stickman.name}</h3>
          <p>${stickman.summary}</p>
          <a class="text-link" href="#experts/stickman">查看专家 <span aria-hidden="true">→</span></a>
        </div>
        <a class="feature-art" href="#experts/stickman" aria-label="查看火柴人专家与 12 种画法">
          <img src="${styleImage}" width="1536" height="1012" alt="${styleAlt}">
        </a>
      </article>
      <div class="cards">${card(talent)}</div>
    </section>
    <section class="shelf" aria-label="已上架技能">
      ${sectionHeading(`已上架技能 · ${featuredSkills.length}`, 'skills')}
      <div class="cards">${featuredSkills.map(card).join('')}</div>
    </section>`;
}

function catalog(section) {
  const subtitle = section === 'experts' ? '从一篇稿件、一个想法或一个问题开始。' : `${products.filter((product) => product.section === 'skills').length} 个已上架技能，选一件想做的事，在 WorkBuddy 技能市场搜索名称后使用。`;
  return intro(sections[section], subtitle) + `
    <section class="catalog" aria-label="${sections[section]}目录">
      <div class="cards">${products.filter((product) => product.section === section).map(card).join('')}</div>
    </section>`;
}

function imagePanel(title, image, alt, description = '') {
  return `<section class="detail-panel">
    <h2>${title}</h2>
    ${description ? `<p>${description}</p>` : ''}
    <a class="gallery-link" href="${image}" target="_blank" rel="noopener" aria-label="新标签页打开原图">
      <img src="${image}" alt="${alt}">
    </a>
    <div class="media-actions"><a class="text-link" href="${image}" target="_blank" rel="noopener">查看原图 <span aria-hidden="true">↗</span></a></div>
  </section>`;
}

function detail(product) {
  const media = product.id === 'stickman' ? `
    ${imagePanel('12 种画法', styleImage, styleAlt, '用同一个等票的例子对比画法。选定风格后，专家按稿件安排构图、道具和动作。')}
    <section class="detail-panel">
      <h2>视频样例</h2>
      <p>用游乐园进门讲令牌桶限流。科普面板画法，云扬普通话旁白，单行中文字幕。</p>
      <video controls playsinline preload="none" width="1280" height="720" src="assets/stickman-demo.mp4"></video>
    </section>` : product.image ? imagePanel(product.imageTitle, product.image, product.imageAlt) : '';
  return `<article class="detail">
    <a class="text-link" href="#${product.section}"><span aria-hidden="true">←</span> 返回${sections[product.section]}</a>
    <header class="detail-title">
      <span class="badge">${product.status}${product.pricing === 'paid' ? ' · 付费' : ''}</span>
      <h1 tabindex="-1">${product.name}</h1>
      <p>${product.detail}</p>
    </header>
    ${media}
    <section class="detail-panel">
      <h2>能帮你做什么</h2>
      <ul>${product.points.map((point) => `<li>${point}</li>`).join('')}</ul>
    </section>
    ${product.usage ? `<section class="detail-panel">
      <h2>可以这样开始</h2>
      <p>${product.usage}</p>
    </section>` : ''}
    ${product.notice ? `<section class="detail-panel">
      <h2>使用前了解</h2>
      <p>${product.notice}</p>
    </section>` : ''}
    ${product.status === '已发布' ? `<div class="media-actions">
      <a class="text-link" href="https://www.workbuddy.cn/" target="_blank" rel="noopener noreferrer">
        前往 WorkBuddy 搜索「${product.marketName || product.name}」 <span aria-hidden="true">↗</span>
      </a>
    </div>` : ''}
  </article>`;
}

function render(shouldFocus = false) {
  const [requested, id] = location.hash.slice(1).split('/');
  const product = products.find((item) => item.section === requested && item.id === id);
  const section = Object.hasOwn(sections, requested) ? requested : 'home';
  content.innerHTML = product ? detail(product) : section === 'home' ? home() : catalog(section);
  document.title = section === 'home' ? '青竹AI' : `${product ? product.name : sections[section]} · 青竹AI`;
  nav.forEach((link) => {
    if (link.dataset.section === section) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  if (shouldFocus) {
    content.querySelector('h1').focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
}

document.querySelector('.skip').addEventListener('click', (event) => {
  event.preventDefault();
  content.focus();
});
window.addEventListener('hashchange', () => render(true));
render();
