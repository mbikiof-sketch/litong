# 产品需求文档 (PRD)
## 电子元件代理商品牌子目录网站项目

**项目名称**: ic-distributor.com 品牌子目录网站
**域名**: ic-distributor.com
**部署平台**: Cloudflare Pages
**文档版本**: 1.2
**创建日期**: 2026 年 3 月 20 日
**更新日期**: 2026 年 3 月 20 日
**状态**: 待开发

---

## 1. 项目概述

### 1.1 项目背景
为电子元件代理商 LiTong 创建多品牌子目录网站，以 ic-distributor.com/infineon 的 URL 结构部署，每个品牌有独立的子目录网站，包含完整的品牌展示、产品中心、解决方案、技术支持等模块。

### 1.2 项目目标
- 建立专业的品牌子目录网站，提升 Google 搜索排名
- 为每个授权代理品牌创建独立的 SEO 优化页面
- 提供工程师友好的产品选型和技术支持体验
- 通过高质量内容建立行业权威性和信任度

### 1.3 核心需求
- **网站架构**: 静态 HTML+CSS，部署在 Cloudflare Pages
- **SEO 优化**: 完整的 Meta 标签、URL 结构、关键词布局、Schema 标记
- **响应式设计**: 支持桌面、平板、移动端
- **内容生成**: 完全 AI 生成，确保差异化避免 SEO 降权
- **批量生成**: Node.js 脚本读取 JSON 数据生成 HTML

---

## 2. 用户澄清确认

| 决策点 | 用户选择 |
|--------|----------|
| 品牌优先级 | Infineon (英飞凌) 作为首个模板品牌 |
| URL 结构 | 子目录形式：ic-distributor.com/infineon/products |
| 内容生成 | 完全 AI 生成 |
| 视觉设计 | 基础简洁版 SVG 图标 |
| 生成脚本 | Node.js 脚本 |
| 联系方式 | 固定悬浮按钮 (右侧) |
| 审查测试 | 每个模块完成后立即审查测试 |
| SEO 关键词 | 全部覆盖 (品牌 + 地域、品牌 + 产品、品牌 + 资质) |
| 新闻中心 | 公司新闻 + 行业动态 |
| 品牌展示 | 网格卡片布局 |
| 解决方案模块 | 完整模块 (框图/优势/BOM/场景/规格) |
| 技术支持分类 | 完整分类 (选型指南/应用笔记/问题排查/新品评测/FAQ) |
| 报关单素材 | 暂不展示 (用占位符) |
| 参数表格 | 动态表格列 |
| 导航结构 | 顶部二级导航 |

---

## 3. 网站架构

### 3.1 主站导航结构
```
首页 (Homepage) - /
品牌专区 (Brands) - /brands/
  └── 品牌列表页 - /brands/index.html
新闻中心 (News) - /news/
  ├── 公司新闻列表 - /news/company/index.html
  └── 行业动态列表 - /news/industry/index.html
关于我们 (About Us) - /about/
  ├── 公司简介 - /about/index.html
  └── 联系我们 - /about/contact.html
品牌子目录 (Brand Subdirectory) - /[brand]/
  └── 如：/infineon/, /semikron/ (与/brands/同一层级，不是包含关系)
```

**重要 URL 层级说明**:
- `/brands/` 是品牌列表页
- `/infineon/`、`/semikron/` 等品牌子目录与 `/brands/` 是**同一层级**，不是包含关系
- 即：`ic-distributor.com/infineon/` 而不是 `ic-distributor.com/brands/infineon/`

### 3.2 品牌子目录导航结构 (以 Infineon 为例)
```
/infineon/ (品牌子目录根目录)
├── index.html (关于品牌页)
├── products/ (产品中心)
│   ├── index.html (产品分类列表页)
│   ├── mcu.html (二级产品分类页 - MCU)
│   ├── igbt.html (二级产品分类页 - IGBT)
│   └── [product-detail].html (产品详情页模板)
├── solutions/ (解决方案)
│   ├── index.html (解决方案列表页)
│   └── [solution-detail].html (解决方案详情页模板)
├── support/ (技术支持)
│   ├── index.html (技术支持列表页)
│   ├── guides/ (选型指南)
│   ├── notes/ (应用笔记)
│   ├── troubleshooting/ (问题排查)
│   ├── reviews/ (新品评测)
│   └── [support-detail].html (技术支持详情页模板)
└── news/ (品牌新闻)
    ├── index.html (品牌新闻列表页)
    └── [news-detail].html (新闻详情页模板)
```

### 3.3 URL 结构规范
- 所有 URL 为静态 HTML 文件
- 使用小写字母和连字符
- 面包屑导航必须存在于所有页面
- 每个页面有独立的 SEO Meta 标签

---

## 4. 页面模板清单

### 4.1 主站页面
| 页面名称 | 文件路径 | 模板文件 |
|----------|----------|----------|
| 首页 | /index.html | index.html |
| 品牌列表页 | /brands/index.html | brands-index.html |
| 新闻中心首页 | /news/index.html | news-index.html |
| 公司新闻列表 | /news/company/index.html | news-list.html |
| 行业动态列表 | /news/industry/index.html | news-list.html |
| 新闻详情页 | /news/[category]/[slug].html | news-detail.html |
| 关于我们 | /about/index.html | about.html |
| 联系我们 | /about/contact.html | contact.html |

### 4.1.1 首页模块要求 (index.html)
| 模块 | 内容要求 |
|------|----------|
| Hero Banner | 专业文案，渐变背景或抽象几何图形，主标题 + 副标题 + CTA 按钮 |
| Why Choose Us | 核心优势展示 (库存深度、技术支持团队、物流能力、价格优势) |
| 优势品牌 | 网格卡片展示核心代理品牌，引导用户深入了解 |
| Latest News | 展示公司活力，为首页提供新鲜内容 (公司新闻 + 行业动态) |
| Final CTA | 页面底部行动号召，引导用户联系 |

### 4.1.2 关于我们页面模块要求 (about.html)
| 模块 | 内容要求 |
|------|----------|
| 公司简介 | 公司介绍，自然地使用"电子元件代理"、"芯片现货"等关键词 |
| 发展历程 | 时间线形式展示公司发展里程碑 |
| 公司优势 | 库存深度、技术支持团队、物流能力等 |
| 服务客户案例 | 展示典型客户案例 (可匿名处理) |
| 报关单展示 | 占位符预留位置，后续替换真实素材 |
| 联系我们 | 引导至联系页面 |

### 4.1.3 联系我们页面要求 (contact.html)
- **布局**: 现代化模块化网格布局
- **内容**: 集成 contact.txt 中的所有联系方式
- **新增联系方式**:
  - WhatsApp: +86 15013702378
  - WeChat: +86 18612518271
- **展示方式**: 页面右侧固定悬浮按钮 (全站通用)

### 4.2 品牌子目录页面 (Infineon)
| 页面名称 | 文件路径 | 模板文件 |
|----------|----------|----------|
| 关于品牌 | /infineon/index.html | brand-about.html |
| 产品列表页 | /infineon/products/index.html | products-index.html |
| 二级产品分类页 | /infineon/products/[category].html | product-category.html |
| 产品详情页 | /infineon/products/[slug].html | product-detail.html |
| 解决方案列表页 | /infineon/solutions/index.html | solutions-index.html |
| 解决方案详情页 | /infineon/solutions/[slug].html | solution-detail.html |
| 技术支持列表页 | /infineon/support/index.html | support-index.html |
| 技术支持详情页 | /infineon/support/[slug].html | support-detail.html |
| 品牌新闻列表页 | /infineon/news/index.html | news-list.html |
| 品牌新闻详情页 | /infineon/news/[slug].html | news-detail.html |

### 4.3 模板技术规格

#### 4.3.1 产品详情页模板 (product-detail.html)
- **布局**: CSS Grid 双栏布局
- **首屏 Hero**: 左侧产品大图 + 右侧核心信息 (H1、库存状态、描述、双 CTA)
- **库存状态标签**: 绿色 - 有货 / 橙色 - 询价
- **双 CTA 按钮组**: 橙色实心"获取报价"、蓝色描边"下载数据手册"
- **Tab 选项卡**: 产品概述 | 规格参数 | 应用电路 | 相关文档
- **规格参数表**: 斑马纹表格，表头加粗背景灰，移动端横向滚动
- **Schema**: Product 类型 JSON-LD
- **侧边栏**: 产品分类导航、配套料号推荐
- **FAE 点评**: 由公司 FAE 撰写的带有主观色彩的专业解读
- **替代料号**: 提供可替代的型号推荐
- **配套料号**: 提供配套使用的型号推荐
- **多样化 CTA**:
  - "下载产品分类选型手册" (信息收集阶段)
  - "申请样品" (评估阶段)
  - "获取报价" (采购阶段)
  - "咨询技术问题" (研发阶段，链接到联系表单并注明转交 FAE)
- **FAQ 模块**: 针对该型号回答 3-5 个工程师最常问的问题

#### 4.3.2 技术支持详情页模板 (support-detail.html)
- **布局**: grid-template-columns: 1fr 300px (左宽右窄)
- **正文区**: max-width: 800px, line-height: 1.8
- **标题样式**: H2/H3 左侧竖线装饰
- **代码块**: 灰色背景高亮样式
- **引用块**: 左边框样式
- **作者栏**: 文章顶部展示"FAE 工程师"头像、姓名、发布日期
- **侧边栏**: Sticky 效果，文章目录，相关 PDF 下载，提问入口
- **Schema**: TechArticle 类型 JSON-LD
- **标签系统 (Tags)**: 为每篇文章打上相关技术标签 (如 IGBT, AURIX, BLDC 电机，CAN 总线)
- **上下文链接 (Contextual Links)**: 文中提到产品型号时链接到产品页，提到概念时链接到相关技术文章
- **相关文章模块**: 文章末尾根据分类或标签推荐 3-5 篇相关文章
- **作者简介链接**: 作者处链接到 FAE 简介页面，展示专业性和权威性

#### 4.3.3 新闻详情页模板 (news-detail.html)
- **布局**: 单栏居中，无侧边栏
- **Header Banner**: 全宽背景图，叠加 H1、日期、分类标签
- **正文**: 单栏居中
- **底部**: 分享按钮、推荐阅读 (3 个图文卡片)
- **Schema**: NewsArticle 类型 JSON-LD
- **侧边栏导航**: 每个新闻详情页侧边栏有新闻导航 (公司新闻/行业动态)
- **内容要求**: 不少于 800 字，有深度、细节、独特见解
- **行业动态**: 引用权威来源，加入自己解读，使用 Article 或 NewsArticle Schema 标记

#### 4.3.4 解决方案详情页模板 (solution-detail.html)
- **模块**: 方案框图、核心优势、推荐物料清单 (BOM)、应用场景、技术规格
- **H2/H3 结构化**: 清晰的标题层次
- **图片**: 方案框图必须带详细 alt 属性
- **内链**: BOM 中型号链接到产品详情页，构建内部链接网络
- **Schema**: Article 类型 JSON-LD
- **内容要求**: 不少于 800 字，图文并茂
- **CTA**: 页面结尾加入"分销商"行动号召
- **侧边栏**: 相关解决方案推荐
- **发布数量**: 至少发布 5 个解决方案

#### 4.3.5 列表页模板要求
| 模板名称 | 文件路径 | 功能要求 |
|----------|----------|----------|
| 新闻列表页 | news-list.html | 公司新闻/行业动态列表，支持分类筛选 |
| 产品分类列表页 | products-index.html | 展示多个产品分类卡片 (MCU、IGBT、MOSFET 等) |
| 二级产品分类页 | product-category.html | 动态表格列展示型号、参数、封装，支持筛选，侧边栏产品分类导航 |
| 解决方案列表页 | solutions-index.html | 展示解决方案摘要，包含核心关键词和应用场景 |
| 技术支持列表页 | support-index.html | 支持选项卡切换 (选型指南/应用笔记/问题排查/新品评测/FAQ) |

### 4.3.6 二级产品分类页要求 (product-category.html)
- **动态表格列**: 不同品牌不同参数采用动态表格列
- **筛选项**: 每个参数都是一列，每列都是筛选项
- **点击型号**: 打开型号详情页
- **侧边栏**: 产品分类导航
- **描述性内容**: H1 标题下方增加 200-300 字原创描述，介绍产品分类特点、系列、优势、应用领域
- **选型指南入口**: 链接到技术支持文章
- **代理商点评**: FAE 撰写的专业解读
- **Product Schema**: JSON-LD 格式 Product Schema 标记

### 4.3.7 CSS 样式与交互补充要求
请在 style.css 中添加以下模板所需的特定样式类：
- `.tab-container` - Tab 选项卡容器
- `.spec-table` - 规格参数表格 (斑马纹样式)
- `.sticky-sidebar` - 固定侧边栏
- `.article-content` - 文章内容区
- `.breadcrumb` - 面包屑导航
- `.brand-tab-nav` - 品牌子目录 Tab 二级导航

响应式适配要求：
- 手机端 (<768px) 产品页双栏变为单栏
- 手机端 (<768px) 技术页侧边栏自动移动到文章底部
- 所有按钮和交互元素最小 44px (移动端易于点击)

### 4.3.8 详情页发布要求
| 页面类型 | 最少发布数量 | 内容要求 |
|----------|--------------|----------|
| 产品详情页 | 每个分类至少 5 个型号 | 完整参数、FAQ、配套料号 |
| 解决方案详情页 | 至少 5 个 | 800 字以上，方案框图、BOM |
| 技术支持详情页 | 至少 5 篇 | 800 字以上，深度技术文章 |
| 新闻详情页 | 至少 3 篇 | 公司新闻 + 行业动态 |

---

## 5. SEO 优化规范

### 5.1 Meta 标签规范

#### 5.1.1 首页
```html
<title>电子元件核心代理 | 提供正品原装现货 | LiTong</title>
<meta name="description" content="力通是电子元件核心代理，长期稳定供应提供正品原装现货。并提供技术支持和优势价格，欢迎咨询。">
<meta name="keywords" content="LiTong,电子元件代理，电子元件现货">
```

#### 5.1.2 品牌子目录首页 (Infineon)
```html
<title>Infineon Distributor | Authorized Agent | LiTong Electronics</title>
<meta name="description" content="LiTong is an authorized Infineon distributor, offering genuine Infineon products including IGBTs, MOSFETs, MCUs with technical support and competitive pricing.">
<meta name="keywords" content="Infineon distributor,英飞凌代理，infineon authorized distributor">
```

#### 5.1.3 产品列表页
```html
<title>Infineon Products | IGBT, MOSFET, MCU Distributor</title>
<meta name="description" content="Browse Infineon product categories including IGBT modules, MOSFETs, AURIX MCUs. Authorized distributor with stock and technical support.">
```

#### 5.1.4 产品详情页
```html
<title>Infineon [型号] | [产品名] | Authorized Distributor</title>
<meta name="description" content="[型号] - [简短描述]. In stock at LiTong. Authorized Infineon distributor.">
```

### 5.2 关键词布局 (Keyword Mapping)

| 页面类型 | 核心关键词 |
|----------|------------|
| 关于品牌 | 品牌+distributor, 品牌+distributor+地域 |
| 产品列表页 | 品牌 + 产品类别 |
| 产品详情页 | 具体产品型号 + 参数 |
| 解决方案页 | 品牌 + 行业 + 解决方案 |
| 技术支持页 | 长尾问题型关键词 |

### 5.3 长尾关键词示例 (Infineon)
- **核心词 + 地域**: Infineon distributor USA, 英飞凌代理中国，Infineon agent India
- **产品 + 核心词**: Infineon IGBT distributor, 英飞凌 MOSFET 代理，Infineon MCU supplier
- **资质 + 核心词**: Infineon authorized distributor, 英飞凌一级代理，Infineon certified partner
- **问题型**: How to select Infineon MCU, Infineon distributor list, Infineon authorized partner lookup

### 5.4 Schema.org 结构化数据
- **Product**: 产品详情页使用 Product Schema
- **TechArticle**: 技术支持文章使用 TechArticle Schema
- **NewsArticle**: 新闻文章使用 NewsArticle Schema
- **Article**: 解决方案使用 Article Schema
- **Organization**: 关于我们页面使用 Organization Schema

### 5.5 图片 Alt 属性规范
```html
<!-- 产品图片 -->
<img src="igbt-module.jpg" alt="Infineon IGBT Module FF300R12ME4 - 1200V 300A Power Module for Industrial Applications">

<!-- 方案框图 -->
<img src="ev-charger-block-diagram.svg" alt="EV Charger Solution Block Diagram using Infineon IGBT and Gate Driver">

<!-- 图标 -->
<img src="mcu-icon.svg" alt="MCU Microcontroller Category Icon">
```

---

## 6. 设计规范

### 6.1 设计风格
- **风格**: 现代极简主义，避免过度装饰
- **留白**: 充足间距增强页面呼吸感
- **圆角**: 统一 8px 圆角，组件 12px 圆角
- **阴影**: box-shadow: 0 4px 6px rgba(0,0,0,0.07)

### 6.2 颜色系统
```css
:root {
  --primary-blue: #0072ce;      /* 科技蓝 - 主色调 */
  --neutral-gray: #f8f9fa;      /* 中性灰 - 背景 */
  --cta-orange: #ff6b00;        /* 橙色 - CTA 按钮 */
  --text-dark: #333333;         /* 深色文字 */
  --text-light: #666666;        /* 浅色文字 */
  --border-color: #e0e0e0;      /* 边框色 */
  --success-green: #28a745;     /* 成功/有货状态 */
  --warning-orange: #ffc107;    /* 警告/询价状态 */
}
```

### 6.3 字体系统
```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

h1 { font-size: 2.5rem; font-weight: 700; }
h2 { font-size: 2rem; font-weight: 600; }
h3 { font-size: 1.5rem; font-weight: 600; }
h4 { font-size: 1.25rem; font-weight: 500; }
```

### 6.4 布局系统
- **CSS Grid**: 12 列网格系统
- **Flexbox**: 组件内部布局
- **最大宽度**: 1319px，居中显示
- **响应式断点**:
  - 桌面端：≥1200px
  - 平板端：768px-1199px
  - 移动端：<768px

### 6.5 交互效果
- **按钮悬停**: 阴影加深 + 颜色变化 (transform: translateY(-2px))
- **卡片悬停**: 提升效果 + 阴影增强
- **导航栏**: 滚动时固定，半透明背景
- **加载动画**: 页面切换平滑过渡

### 6.6 性能优化
- **CSS 变量**: 统一管理样式，便于维护和修改，使用纯原生 CSS
- **图片格式**: 使用现代格式如 WebP，提供 PNG/JPEG 降级方案
- **字体加载**: 使用 `font-display: swap` 避免 FOIT (Flash of Invisible Text)
- **代码压缩**: CSS 文件压缩，移除未使用样式
- **懒加载**: 图片和非关键资源懒加载
- **缓存策略**: Cloudflare Pages 自动缓存静态资源

### 6.7 可访问性 (Accessibility)
- **颜色对比度**: 满足 WCAG AA 标准 (至少 4.5:1)
- **键盘导航**: 所有交互元素支持 Tab 键导航
- **语义化 HTML**: 使用正确的 HTML5 标签 (`<nav>`, `<main>`, `<article>`, `<aside>`)
- **ARIA 标签**: 为图标、按钮添加 aria-label
- **焦点样式**: 所有可交互元素有清晰的焦点状态
- **屏幕阅读器**: 支持屏幕阅读器读取

---

## 7. 内容规范

### 7.1 内容长度要求
| 页面类型 | 最少字数 | 内容要求 |
|----------|----------|----------|
| 产品详情页 | 300 字 | 原创描述、参数表格、FAQ |
| 技术支持详情页 | 800 字 | 深度技术文章、代码示例、图表 |
| 解决方案详情页 | 800 字 | 方案框图、BOM 清单、应用场景 |
| 新闻详情页 | 500 字 | 行业动态解读、权威来源引用 |
| 关于品牌页 | 500 字 | 品牌历史、核心产品、技术优势 |

### 7.2 内容差异化要求
- 每个品牌的产品分类、应用行业、解决方案必须不同
- 避免模板化内容，确保 AI 生成内容独特性
- 技术文章需包含独特见解、经验总结

### 7.3 作者专业性展示
- 为 FAE 工程师创建作者简介页面
- 包含真实姓名、照片、技术专长、从业经验
- 每篇文章关联作者，展示专业性 (Expertise) 和权威性 (Authoritativeness)

---

## 8. JSON 数据结构

### 8.1 品牌数据结构
```json
{
  "brand": {
    "name": "Infineon",
    "displayName": "Infineon Technologies",
    "logo": "/assets/brands/infineon/logo.svg",
    "description": "Infineon Technologies is a leading global semiconductor company...",
    "coreProducts": ["IGBT", "MOSFET", "MCU", "Sensor", "Power Management"],
    "industries": ["Automotive", "Industrial", "Consumer", "IoT"],
    "certifications": ["ISO 9001", "ISO 14001", "IATF 16949"],
    "yearFounded": 1999,
    "headquarters": "Neubiberg, Germany"
  }
}
```

### 8.2 产品数据结构 (products.json)
```json
{
  "categories": [
    {
      "id": "mcu",
      "name": "MCU Microcontrollers",
      "description": "Infineon AURIX, XMC, PSoC microcontroller families...",
      "icon": "mcu-icon.svg",
      "series": ["AURIX™", "XMC™", "PSoC™", "TRAVEO™"],
      "parameters": ["Architecture", "Flash", "RAM", "Frequency", "Package"],
      "products": [
        {
          "partNumber": "TC399XX",
          "series": "AURIX™",
          "architecture": "TriCore",
          "flash": "16MB",
          "ram": "2MB",
          "frequency": "300MHz",
          "package": "LFBGA-292",
          "application": "Automotive, Industrial",
          "datasheet": "/datasheets/tc399xx.pdf"
        }
      ]
    }
  ]
}
```

### 8.3 解决方案数据结构 (solutions.json)
```json
{
  "solutions": [
    {
      "id": "ev-charger",
      "title": "EV Charger Solution",
      "industry": "Automotive",
      "blockDiagram": "/assets/solutions/ev-charger-diagram.svg",
      "description": "Complete powertrain solution for electric vehicle chargers...",
      "coreAdvantages": ["High Efficiency", "Compact Design", "Fast Charging"],
      "bomList": [
        {"partNumber": "FF300R12ME4", "description": "IGBT Module", "link": "/infineon/products/ff300r12me4.html"}
      ],
      "applications": ["EV Charging Station", "Industrial Power"],
      "technicalSpecs": {"inputVoltage": "400VAC", "outputPower": "50kW"}
    }
  ]
}
```

### 8.4 技术支持数据结构 (support.json)
```json
{
  "articles": [
    {
      "id": "how-to-select-mcu",
      "title": "How to Select the Right Infineon MCU for Your Project",
      "category": "guides",
      "tags": ["MCU", "AURIX", "Selection Guide"],
      "author": {"name": "John Chen", "title": "Senior FAE", "avatar": "/assets/team/john-chen.jpg"},
      "publishDate": "2026-03-15",
      "content": "...",
      "relatedProducts": ["TC399XX", "XMC4700"],
      "relatedArticles": ["aurix-getting-started", "psoc-architecture"]
    }
  ]
}
```

### 8.5 新闻数据结构 (news.json)
```json
{
  "articles": [
    {
      "id": "infineon-new-igbt-2026",
      "title": "Infineon Launches Next-Generation IGBT7 Technology",
      "category": "industry",
      "publishDate": "2026-03-10",
      "author": "LiTong Editorial Team",
      "summary": "Infineon introduces IGBT7 with improved efficiency...",
      "content": "...",
      "source": "Infineon Press Release",
      "relatedProducts": ["IGBT7 Module"]
    }
  ]
}
```

---

## 9. Node.js 生成脚本设计

### 9.1 脚本结构
```
scripts/
├── generate.js          # 主入口脚本
├── templates/           # HTML 模板文件
│   ├── index.html
│   ├── brand-about.html
│   ├── product-detail.html
│   └── ...
├── data/                # 品牌 JSON 数据
│   ├── infineon/
│   │   ├── brand.json
│   │   ├── products.json
│   │   ├── solutions.json
│   │   └── support.json
│   └── semikron/
└── output/              # 生成的 HTML 文件
```

### 9.2 生成逻辑
1. 读取品牌 JSON 数据
2. 加载对应 HTML 模板
3. 使用模板引擎 (如 EJS/Handlebars) 渲染
4. 输出静态 HTML 文件到 output 目录
5. 生成 sitemap.xml

### 9.3 命令行参数
```bash
# 生成单个品牌
node scripts/generate.js --brand infineon

# 生成所有品牌
node scripts/generate.js --all

# 生成特定页面类型
node scripts/generate.js --brand infineon --type products
```

---

## 10. 开发流程

### 10.1 开发阶段 (集成 Superpowers Skills)
| 阶段 | Skill | 说明 |
|------|-------|------|
| 1. 创建分支 | `using-git-worktrees` | 在工作区目录创建独立开发分支 |
| 2. 执行实施 | `executing-plans` | 执行详细实施计划 |
| 3. 子代理驱动 | `subagent-driven-development` | 使用子代理处理复杂任务 |
| 4. 并行代理 | `dispatching-parallel-agents` | 并行处理独立任务 |
| 5. 请求审查 | `requesting-code-review` | 完成模块后请求代码审查 |
| 6. 接收审查 | `receiving-code-review` | 处理审查反馈 |
| 7. 系统调试 | `systematic-debugging` | 遇到问题时系统调试 |
| 8. 完成分支 | `finishing-a-development-branch` | 决定如何集成工作 (合并/PR) |
| 9. 验证完成 | `verification-before-completion` | 运行验证命令确认输出 |

### 10.2 单元模块审查测试
- 每个模块完成后立即审查和测试
- 审查内容包括：代码质量、样式、功能、SEO
- 失败立即修复，修复后重新测试
- 通过后才继续下一个模块

**审查测试规则**:
1. 每个单元模块完成后立即审查和测试，不等待
2. 审查和测试是该模块的一部分，不是独立阶段
3. 失败立即修复，修复后重新测试，通过后才继续下一个模块
4. 集成测试在所有单元通过后才开始

### 10.3 集成测试
- 所有单元测试通过后开始
- 测试功能、样式、性能
- 使用 Playwright MCP 截图验证
- 对照 PRD 检查是否符合

### 10.4 检查点机制
每个单元模块审查测试后，插入 1 个检查点，给出关键状态和结果日志：
- **检查点内容**: 模块名称、测试结果、关键状态、日志输出
- **错误处理**: 如出现错误，立即修复并重新测试
- **记录方式**: 写入工作区目录的 `checkpoints.md` 文件

---

## 11. 待办品牌清单

### 第一阶段 (模板开发)
- [x] Infineon (英飞凌) - 首个模板品牌

### 第二阶段 (功率半导体品牌)
- [ ] Semikron
- [ ] Fuji
- [ ] Mitsubishi
- [ ] IXYS
- [ ] Cree
- [ ] Genesic
- [ ] Sanrex
- [ ] PI
- [ ] Firstack
- [ ] Bronze

### 第三阶段 (中国/亚洲品牌)
- [ ] Crmicro
- [ ] CRRC
- [ ] Macmic
- [ ] Starpower
- [ ] BYD
- [ ] Yangjie
- [ ] Inventchip
- [ ] Silan

### 第四阶段 (被动元件/保护器件)
- [ ] LEM
- [ ] Faratronic
- [ ] Jianghai
- [ ] Aishi
- [ ] Hongfa
- [ ] 松下 (Panasonic)
- [ ] 冠西 (Cosmo)
- [ ] 光宝 (Lite-On)
- [ ] Sinofuse
- [ ] Bussmann
- [ ] Littelfuse

### 第五阶段 (通用 IC 品牌)
- [ ] TI
- [ ] ADI
- [ ] ST
- [ ] Microchip
- [ ] 瑞萨 (Renesas)
- [ ] NXP
- [ ] Allegro
- [ ] 乐鑫 (Espressif)
- [ ] 兆易 (GigaDevice)

---

## 12. 成功标准

### 12.1 SEO 指标
- Google 搜索"Infineon distributor"排名前 3
- 品牌关键词覆盖率 100%
- 所有页面 Meta 标签完整
- 结构化数据验证通过

### 12.2 技术指标
- 页面加载时间 < 3 秒
- 移动端适配 100%
- 无 404 错误链接
- 所有图片有 alt 属性

### 12.3 内容指标
- 每个品牌至少 5 个产品分类
- 每个品牌至少 3 个解决方案
- 每个品牌至少 5 篇技术支持文章
- 每个品牌至少 3 篇新闻

---

## 13. SVG 图标与图片生成规范

### 13.1 SVG 图标类别
| 类别 | 用途 | 数量 | 风格要求 |
|------|------|------|----------|
| 产品类别图标 | MCU、IGBT、MOSFET、传感器等 | 10+ | 简洁几何图形，统一线条粗细 |
| 导航图标 | 首页、产品、解决方案、技术支持等 | 5+ | 线性图标，24x24px |
| 功能图标 | 下载、搜索、联系、分享等 | 10+ | 填充图标，16x16px/24x24px |
| 品牌 Logo | 各品牌简化版 Logo | 40+ | 基于文字或基本形状 |
| 抽象背景图 | Banner 背景、页面背景 | 5+ | 电路板纹理、科技线条 |
| 插图/封面图 | 新闻页、关于我们、联系我们 | 10+ | 科技感、专业风格 |

### 13.2 SVG 技术规范
- **尺寸**: 图标统一 24x24px 或 16x16px
- **颜色**: 使用 CSS 变量控制，支持主题切换
- **内联 SVG**: 关键图标使用内联 SVG，便于样式控制
- **文件命名**: kebab-case，如 `mcu-icon.svg`、`igbt-module.svg`

### 13.3 Logo 规范
- **公司 Logo**: 基于文字"LiTong"或"力通电子"设计
- **Logo 右侧文字**: "LiTong Electronics - Top 8 Electronic Component Distributor in China"
- **品牌 Logo**: 每个品牌子目录网站使用对应品牌 Logo

---

## 14. Playwright 测试验证流程

### 14.1 测试范围
| 测试类型 | 测试内容 | 工具 |
|----------|----------|------|
| 样式验证 | 全站网页样式是否失效 | Playwright MCP 截图 |
| 布局验证 | 对照 PRD 检查布局是否符合 | Playwright MCP 截图 |
| 响应式测试 | 桌面/平板/移动端适配 | Playwright MCP 多尺寸截图 |
| 功能测试 | 导航、筛选、Tab 切换等交互 | Playwright MCP 自动化 |

### 14.2 测试流程
1. **单元模块测试**: 每个模板完成后立即截图验证
2. **样式审查**: 检查 CSS 变量、响应式断点、交互效果
3. **修复迭代**: 发现问题立即修复，重新测试直到 OK
4. **集成测试**: 所有单元通过后进行全站测试

### 14.3 测试检查点
- [ ] 首页样式验证
- [ ] 品牌列表页样式验证
- [ ] 品牌子目录首页样式验证
- [ ] 产品列表页样式验证
- [ ] 产品详情页样式验证
- [ ] 解决方案列表页样式验证
- [ ] 解决方案详情页样式验证
- [ ] 技术支持列表页样式验证
- [ ] 技术支持详情页样式验证
- [ ] 新闻列表页样式验证
- [ ] 新闻详情页样式验证
- [ ] 关于我们页样式验证
- [ ] 联系我们页样式验证
- [ ] 移动端响应式验证

---

## 15. 重要注意事项

### 15.1 链接规范
- **禁止 404 链接**: 不放空链接或 404 链接，对 SEO 优化不好
- **内链建设**: BOM 清单中型号链接到产品详情页，构建内部链接网络
- **上下文链接**: 技术文章中提到产品型号时链接到产品页

### 15.2 用词规范
- **全站替换**: 将所有"authorized"改成"core"
  - 例如："Core Distributor" 而不是 "Authorized Distributor"
  - 例如："Core Agent" 而不是 "Authorized Agent"

### 15.3 语言规范
- **纯英文网站**: 全站内容使用英文
- **品牌子目录**: 每个品牌子目录网站内容全部为英文
- **关键词**: 包含英文关键词和中文拼音关键词 (如"英飞凌代理")

### 15.4 品牌差异化
- **产品分类**: 新增品牌的产品分类与英飞凌不一样
- **应用行业**: 依据新增品牌的应用行业定制内容
- **解决方案**: 依据新增品牌的解决方案定制内容
- **内容独特性**: 避免模板化，确保 AI 生成内容差异化，防止 SEO 降权

### 15.5 品牌卡片更新
- **品牌列表页**: 每添加一个品牌的子目录网站，brands 页面添加一个品牌卡片
- **品牌卡片内容**: Logo、品牌简介、核心产品领域、CTA 按钮

---

## 16. 附录

### 16.1 联系方式
- WhatsApp: +86 15013702378
- WeChat: +86 18612518271
- 展示方式：页面右侧固定悬浮按钮

### 16.2 参考网站
- 主站域名：firstack-distributor.com
- 新站域名：ic-distributor.com

### 16.3 LOGO 右侧文字
- **英文**: "LiTong Electronics - Top 8 Electronic Component Distributor in China"
- **中文原文**: "力通电子，中国 8 强电子元件代理商"

### 16.4 sitemap.xml 要求
- **生成方式**: Node.js 脚本自动生成
- **包含内容**: 所有主站页面 + 所有品牌子目录页面
- **更新机制**: 每次生成新品牌时自动更新
- **SEO 提交**: 提交到 Google Search Console

### 16.5 面包屑导航规范
所有页面必须包含面包屑导航，格式如下：
```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/brands/">Brands</a></li>
    <li><a href="/infineon/">Infineon</a></li>
    <li aria-current="page">Products</li>
  </ol>
</nav>
```

### 16.6 品牌子目录 Tab 二级导航菜单
每个品牌子目录网站的所有页面都必须有 Tab 二级导航菜单：
- **关于品牌** (About Brand)
- **产品中心** (Products)
- **解决方案** (Solutions)
- **技术支持** (Support)

Tab 导航要求：
- 固定在页面顶部 (导航栏下方)
- 当前页面高亮显示
- 响应式设计 (移动端可折叠)

### 16.7 技术支持分类独立页面
技术支持每个分类有独立页面：
- `/infineon/support/guides/` - 选型指南列表页
- `/infineon/support/notes/` - 应用笔记列表页
- `/infineon/support/troubleshooting/` - 问题排查列表页
- `/infineon/support/reviews/` - 新品评测列表页
- `/infineon/support/faq/` - FAQ 列表页

每个分类页面包含该分类下的所有文章列表。

### 16.8 FAE 作者简介页面
- **文件路径**: `/about/team/[name].html`
- **内容**: 真实姓名、照片、技术专长、从业经验、发表文章列表
- **关联**: 每篇技术文章作者处链接到该页面

### 16.9 标签聚合页面
- **文件路径**: `/infineon/support/tags/[tag].html`
- **功能**: 点击标签后聚合显示所有相关文章
- **示例**: `/infineon/support/tags/igbt.html` 显示所有包含 IGBT 标签的文章

---

## 17. 检查清单

### 17.1 PRD 完整性检查
- [x] 项目概述完整
- [x] 用户澄清确认完整
- [x] 网站架构完整 (主站 + 品牌子目录)
- [x] URL 层级说明清晰
- [x] 页面模板清单完整 (18+ 种页面)
- [x] SEO 优化规范完整 (Meta、关键词、Schema)
- [x] 设计规范完整 (颜色、字体、布局、交互、性能、可访问性)
- [x] 内容规范完整 (字数、差异化、作者专业性)
- [x] JSON 数据结构完整 (5 种数据类型)
- [x] Node.js 生成脚本设计完整
- [x] 开发流程完整 (单元审查 + 集成测试 + Skills 集成)
- [x] 品牌清单完整 (40+ 品牌)
- [x] 成功标准完整 (SEO、技术、内容指标)
- [x] SVG 图标规范完整
- [x] Playwright 测试流程完整
- [x] 重要注意事项完整 (链接、用词、语言、品牌差异化)
- [x] 附录完整 (联系方式、参考网站、LOGO 文字)
- [x] sitemap.xml 要求
- [x] 面包屑导航规范
- [x] 品牌子目录 Tab 二级导航菜单
- [x] 技术支持分类独立页面
- [x] FAE 作者简介页面
- [x] 标签聚合页面
- [x] CSS 样式类补充要求
- [x] 详情页发布数量要求
- [x] 检查点机制

### 17.2 原始需求对照检查
| 原始需求 | PRD 章节 | 状态 |
|----------|----------|------|
| 品牌子目录纯英文网站 | 1.3, 15.3 | ✅ |
| SEO 优化让 Google 排名靠前 | 5, 12.1 | ✅ |
| HTML+CSS 静态架构 | 1.3 | ✅ |
| Cloudflare Pages 部署 | 文档头部 | ✅ |
| 主站导航：首页，品牌专区，新闻，关于我们 | 3.1 | ✅ |
| 品牌子目录导航：关于品牌，产品中心，解决方案，技术支持 | 3.2, 16.6 | ✅ |
| /brand/和/xx 品牌/同一层级 | 3.1 | ✅ |
| 列表页、详情页模板 | 4.3.5, 4.3 | ✅ |
| 每个品牌独立 JSON 文件 | 8 | ✅ |
| 内容 AI 生成，差异化 | 1.3, 7.2, 15.4 | ✅ |
| Node.js 脚本生成 HTML | 9 | ✅ |
| 面包屑导航 | 3.3, 16.5 | ✅ |
| sitemap.xml | 16.4 | ✅ |
| Meta 标签优化 | 5.1 | ✅ |
| 图片 alt 属性 | 5.5 | ✅ |
| 关键词布局 | 5.2, 5.3 | ✅ |
| 首页模块 (Hero/优势/品牌/新闻/CTA) | 4.1.1 | ✅ |
| 关于品牌页模块 | 4.1.2 | ✅ |
| 产品中心要求 (分类/型号表格/FAE 点评/CTA) | 4.3.1, 4.3.6 | ✅ |
| 技术支持要求 (分类/标签/上下文链接/相关文章/作者简介) | 4.3.2, 16.7, 16.8, 16.9 | ✅ |
| 解决方案要求 (框图/BOM/内链) | 4.3.4 | ✅ |
| 新闻中心 (公司新闻/行业动态分离) | 3.1, 4.1 | ✅ |
| 详情页内容不少于 800 字 | 4.3.2, 4.3.3, 4.3.4, 7.1 | ✅ |
| 详情页侧边栏 | 4.3.2, 4.3.3, 4.3.4 | ✅ |
| 关于我们 (历史/案例/报关单/优势) | 4.1.2 | ✅ |
| 联系我们 (contact.txt/WhatsApp/WeChat) | 4.1.3, 16.1 | ✅ |
| 三个详情页模板 (产品/技术/新闻) | 4.3.1, 4.3.2, 4.3.3 | ✅ |
| Tab 选项卡切换 | 4.3.1 | ✅ |
| 斑马纹表格 | 4.3.1 | ✅ |
| Sticky 侧边栏 | 4.3.2 | ✅ |
| 列表页模板 (新闻/产品/解决方案/技术支持) | 4.3.5 | ✅ |
| 二级产品分类页模板 | 4.3.5, 4.3.6 | ✅ |
| SVG 图标生成 | 13 | ✅ |
| 响应式设计 | 6.4, 12.2 | ✅ |
| 现代极简主义设计 | 6.1 | ✅ |
| CSS 变量管理 | 6.2, 6.6 | ✅ |
| 纯原生 CSS | 6 | ✅ |
| Playwright 截图测试 | 14 | ✅ |
| LOGO 右侧文字 | 13.3, 16.3 | ✅ |
| 品牌卡片更新 | 15.5 | ✅ |
| 禁止 404 链接 | 15.1 | ✅ |
| authorized 改成 core | 15.2 | ✅ |
| 品牌清单 (40+ 品牌) | 11 | ✅ |
| 纯英文 | 15.3 | ✅ |
| 单元审查测试 | 10.2 | ✅ |
| 集成测试 | 10.3 | ✅ |
| 开发流程 skills | 10.1 | ✅ |
| CSS 样式类补充 | 4.3.7 | ✅ |
| 详情页发布数量 | 4.3.8 | ✅ |
| 检查点机制 | 10.4 | ✅ |
| 性能优化 | 6.6 | ✅ |
| 可访问性 | 6.7 | ✅ |

### 17.3 单元模块清单
以下单元模块需要逐一开发和测试：
| 模块编号 | 模块名称 | 文件 | 审查测试状态 |
|----------|----------|------|--------------|
| M01 | 全局样式 | style.css | ⬜ 待开发 |
| M02 | 导航栏组件 | nav.html | ⬜ 待开发 |
| M03 | 页脚组件 | footer.html | ⬜ 待开发 |
| M04 | 面包屑导航 | breadcrumb.html | ⬜ 待开发 |
| M05 | 首页 | index.html | ⬜ 待开发 |
| M06 | 品牌列表页 | brands-index.html | ⬜ 待开发 |
| M07 | 品牌关于页 | brand-about.html | ⬜ 待开发 |
| M08 | 产品列表页 | products-index.html | ⬜ 待开发 |
| M09 | 二级产品分类页 | product-category.html | ⬜ 待开发 |
| M10 | 产品详情页 | product-detail.html | ⬜ 待开发 |
| M11 | 解决方案列表页 | solutions-index.html | ⬜ 待开发 |
| M12 | 解决方案详情页 | solution-detail.html | ⬜ 待开发 |
| M13 | 技术支持列表页 | support-index.html | ⬜ 待开发 |
| M14 | 技术支持详情页 | support-detail.html | ⬜ 待开发 |
| M15 | 新闻列表页 | news-list.html | ⬜ 待开发 |
| M16 | 新闻详情页 | news-detail.html | ⬜ 待开发 |
| M17 | 关于我们页 | about.html | ⬜ 待开发 |
| M18 | 联系我们页 | contact.html | ⬜ 待开发 |
| M19 | SVG 图标集 | /assets/icons/ | ⬜ 待开发 |
| M20 | Node.js 生成脚本 | scripts/generate.js | ⬜ 待开发 |
| M21 | Infineon JSON 数据 | /data/infineon/ | ⬜ 待开发 |
| M22 | Tab 二级导航组件 | brand-tab-nav.html | ⬜ 待开发 |
| M23 | 右侧悬浮联系方式 | floating-contact.html | ⬜ 待开发 |
| M24 | FAE 作者简介页 | team-member.html | ⬜ 待开发 |
| M25 | 标签聚合页 | tag-archive.html | ⬜ 待开发 |

### 17.4 集成测试清单
所有单元模块通过后，进行以下集成测试：
| 测试编号 | 测试项目 | 测试方法 | 状态 |
|----------|----------|----------|------|
| IT01 | 首页样式验证 | Playwright 截图 | ⬜ 待测试 |
| IT02 | 品牌列表页样式验证 | Playwright 截图 | ⬜ 待测试 |
| IT03 | 品牌子目录首页样式验证 | Playwright 截图 | ⬜ 待测试 |
| IT04 | 产品列表页样式验证 | Playwright 截图 | ⬜ 待测试 |
| IT05 | 产品详情页样式验证 | Playwright 截图 | ⬜ 待测试 |
| IT06 | 解决方案列表页样式验证 | Playwright 截图 | ⬜ 待测试 |
| IT07 | 解决方案详情页样式验证 | Playwright 截图 | ⬜ 待测试 |
| IT08 | 技术支持列表页样式验证 | Playwright 截图 | ⬜ 待测试 |
| IT09 | 技术支持详情页样式验证 | Playwright 截图 | ⬜ 待测试 |
| IT10 | 新闻列表页样式验证 | Playwright 截图 | ⬜ 待测试 |
| IT11 | 新闻详情页样式验证 | Playwright 截图 | ⬜ 待测试 |
| IT12 | 关于我们页样式验证 | Playwright 截图 | ⬜ 待测试 |
| IT13 | 联系我们页样式验证 | Playwright 截图 | ⬜ 待测试 |
| IT14 | 移动端响应式验证 | Playwright 多尺寸截图 | ⬜ 待测试 |
| IT15 | Tab 切换功能测试 | Playwright 自动化 | ⬜ 待测试 |
| IT16 | 筛选功能测试 | Playwright 自动化 | ⬜ 待测试 |
| IT17 | 内部链接测试 | 检查无 404 链接 | ⬜ 待测试 |
| IT18 | SEO Meta 标签验证 | 检查所有页面 Meta | ⬜ 待测试 |
| IT19 | Schema 结构化数据验证 | Google Rich Results Test | ⬜ 待测试 |
| IT20 | 页面加载性能测试 | Lighthouse | ⬜ 待测试 |

### 17.5 待确认事项
以下事项需要在开发过程中确认：
1. **模板引擎选择**: EJS 还是 Handlebars (建议 EJS)
2. **CSS 框架**: 纯 CSS 还是使用 Tailwind CSS (原始需求提到 Tailwind)
3. **SVG 生成工具**: 手动设计还是使用 AI 生成工具

---

## 18. 文档更新记录
| 版本 | 日期 | 更新内容 | 作者 |
|------|------|----------|------|
| 1.0 | 2026-03-20 | 初始版本，基于用户澄清需求 | AI |
| 1.1 | 2026-03-20 | 补充遗漏内容：URL 层级说明、首页模块、关于我们模块、产品详情页 FAE 点评/替代料号/配套料号/多样化 CTA、技术支持标签系统/上下文链接/相关文章、新闻详情页侧边栏、列表页模板、二级产品分类页要求、SVG 图标规范、Playwright 测试流程、重要注意事项 (404 链接/用词规范/语言规范/品牌差异化) | AI |
| 1.2 | 2026-03-20 | 再次检查补充：sitemap.xml、面包屑导航规范、Tab 二级导航菜单、技术支持分类独立页面、FAE 作者简介页面、标签聚合页面、完整性检查清单 | AI |
| 1.3 | 2026-03-20 | 第三次检查补充：文档版本更新、解决方案发布数量、CSS 样式类补充要求、详情页发布数量要求、性能优化规范、可访问性规范、开发流程 Skills 集成表、检查点机制、单元模块清单 (25 个)、集成测试清单 (20 项) | AI |

---

**PRD 文档结束**
