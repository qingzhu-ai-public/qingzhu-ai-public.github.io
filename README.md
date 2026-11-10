# 青竹AI 官网

顶部保留「首页」「专家」「技能」。首页展示精选项目，产品目录与详情共用同一份产品数据。

## 本地预览

直接打开 `index.html`，或在仓库目录运行以下命令。

```powershell
python -m http.server 4183 --bind 127.0.0.1
```

浏览器打开 `http://127.0.0.1:4183/`。页面、图片和视频都从本地加载。

## 维护

- `app.js` 的 `products` 保存产品名称、简介、状态和样例。
- `assets/stickman-styles.png` 来自火柴人视频专家随包风格图。
- `assets/stickman-demo.mp4` 是科普面板画法的令牌桶短片。
- 推送到 `main` 后，由 GitHub Pages 发布仓库根目录。
- GitHub Pages 的正式站点为 [青竹AI](https://qingzhu-ai-public.github.io/)。
