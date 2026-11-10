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
    id: 'article-video',
    section: 'experts',
    name: '文章转视频',
    summary: '想把文章做成视频？先搭好环境，再按自己的想法做画面。',
    detail: '适合已经有一篇文章、希望用 AI 自己做视频的人。专家协助准备本地工具、选择视频比例和清晰度，并提供可直接试的提示词。',
    points: ['协助搭建 Remotion 和 FFmpeg 环境', '解释画幅、清晰度、配音和导出设置', '根据文章内容设计画面与提示词'],
    status: '开发预览',
  },
  {
    id: 'cover',
    section: 'skills',
    name: '帮我做张封面',
    summary: '有一篇文章、一条笔记，或者只有一句标题，都可以做成一张封面。',
    detail: '发来标题或文章，先看适合的画法和尺寸。选好风格后，在可用的生图环境里做成封面。',
    points: ['内置 34 种封面风格', '按发布平台选画幅', '出图前后检查水印'],
    image: 'assets/cover-demo.webp',
    imageAlt: '散步主题的立体纸雕风格文章封面',
    imageTitle: '立体纸雕封面样例',
    status: '已发布',
  },
  {
    id: 'article-images',
    section: 'skills',
    name: '给文章自动配图',
    summary: '发来全文，我找出适合放图的段落，画一组同风格的图，再插回正文。',
    detail: '适合文章写完后想快速加一组配图的人。技能根据内容安排插图位置，保持整篇画风一致，再交回配图版 Markdown。',
    points: ['按段落内容找适合放图的位置', '整组图片沿用同一种画法', '检查水印后把图片插回正文'],
    image: 'assets/article-images-demo.webp',
    imageAlt: '手绘风格的露营清单配图',
    imageTitle: '手绘露营清单样例',
    status: '开发预览',
  },
  {
    id: 'explain',
    section: 'skills',
    name: '把原理演给你看',
    summary: '碰到读不明白的一段话，发给我。我把它做成能操作的演示。',
    detail: '适合看完文字仍想弄懂一个原理的时候。先解释过程，再做一个浏览器能打开的互动页面。动手改条件，看看结果怎么变。',
    points: ['用熟悉的例子讲原理', '生成可点击或拖动的 HTML 演示', '用简单自测检查是否理解'],
    status: '开发预览',
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
    <span><span class="card-title">${product.name}</span><span class="card-description">${product.summary}</span></span>
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
  const featuredSkills = products.filter((product) => ['cover', 'article-images'].includes(product.id));
  return intro('青竹AI', '面向创作、学习与自我探索的 WorkBuddy 专家和技能。') + `
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
    <section class="shelf" aria-label="精选技能">
      ${sectionHeading('精选技能', 'skills')}
      <div class="cards">${featuredSkills.map(card).join('')}</div>
    </section>`;
}

function catalog(section) {
  const subtitle = section === 'experts' ? '从一篇稿件、一个想法或一个问题开始。' : '选一件想做的事，在对话里直接调用。';
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
      <span class="badge">${product.status}</span>
      <h1 tabindex="-1">${product.name}</h1>
      <p>${product.detail}</p>
    </header>
    ${media}
    <section class="detail-panel">
      <h2>能帮你做什么</h2>
      <ul>${product.points.map((point) => `<li>${point}</li>`).join('')}</ul>
    </section>
    ${product.status === '已发布' ? `<div class="media-actions">
      <a class="text-link" href="https://www.workbuddy.cn/" target="_blank" rel="noopener noreferrer">
        前往 WorkBuddy 搜索「${product.name}」 <span aria-hidden="true">↗</span>
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
