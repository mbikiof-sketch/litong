# 详细规划设计文档
## 电子元件代理商品牌子目录网站 - UI/UX 设计系统

**项目名称**: ic-distributor.com 品牌子目录网站  
**域名**: ic-distributor.com  
**部署平台**: Cloudflare Pages  
**文档类型**: UI/UX 详细设计规划  
**版本**: 1.1  
**创建日期**: 2026 年 3 月 20 日  
**更新日期**: 2026 年 3 月 20 日  
**基于 PRD 版本**: 1.3

---

## 1. 设计系统概述

### 1.1 产品类型分析
| 维度 | 描述 |
|------|------|
| **产品类型** | B2B 电子商务/产品展示网站 |
| **目标用户** | 工程师、采购经理、企业决策者 |
| **使用场景** | 产品选型、技术调研、供应商评估、采购决策 |
| **行业属性** | 电子元件、半导体、工业制造 |
| **品牌调性** | 专业、可信赖、技术导向、国际化 |

### 1.2 设计风格定位
基于 UI/UX Pro Max 设计规范，本项目采用：

**主风格**: **现代极简主义 (Modern Minimalism)**
- 清晰的信息层级
- 充足的留白
- 功能导向的设计
- 避免过度装饰

**辅助风格**: **科技专业风 (Tech Professional)**
- 电路板纹理背景
- 科技线条装饰
- 数据可视化元素

---

## 2. 颜色系统

### 2.1 主色调 (Primary Colors)
```css
:root {
  /* 科技蓝 - 主色调 */
  --primary-blue: #0072ce;
  --primary-blue-dark: #005ba3;
  --primary-blue-light: #3395db;
  
  /* 橙色 - CTA 按钮色 */
  --cta-orange: #ff6b00;
  --cta-orange-dark: #cc5500;
  --cta-orange-light: #ff8533;
  
  /* 成功/有货状态 */
  --success-green: #28a745;
  --success-green-dark: #1e7e34;
  
  /* 警告/询价状态 */
  --warning-orange: #ffc107;
  --warning-orange-dark: #d39e00;
}
```

### 2.2 中性色 (Neutral Colors)
```css
:root {
  /* 背景色 */
  --bg-white: #ffffff;
  --bg-light: #f8f9fa;
  --bg-gray: #e9ecef;
  
  /* 文字色 */
  --text-dark: #333333;
  --text-medium: #666666;
  --text-light: #999999;
  
  /* 边框色 */
  --border-light: #e0e0e0;
  --border-medium: #cccccc;
  --border-dark: #999999;
}
```

### 2.3 深色模式 (Dark Mode) - 可选扩展
```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --border-color: #404040;
  }
}
```

### 2.4 颜色使用规范
| 用途 | 颜色 | 对比度要求 |
|------|------|------------|
| 主按钮背景 | --cta-orange | 4.5:1 (与白色文字) |
| 主按钮文字 | #ffffff | - |
| 链接色 | --primary-blue | 4.5:1 |
| 成功状态 | --success-green | 3:1 (大文本) |
| 警告状态 | --warning-orange | 3:1 (大文本) |
| 正文文字 | --text-dark | 7:1 (AAA 级) |
| 次要文字 | --text-medium | 4.5:1 (AA 级) |

---

## 3. 字体系统

### 3.1 字体栈 (Font Stack)
```css
:root {
  /* 英文字体 - 使用系统字体栈 */
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  
  /* 中文字体 (备用) */
  --font-family-zh: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  
  /* 等宽字体 (代码) */
  --font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
}
```

### 3.2 字体大小比例 (Type Scale)
采用 **1.25 比例 (Major Third)**:

| 级别 | CSS 类 | 大小 | 行高 | 字重 | 用途 |
|------|--------|------|------|------|------|
| H1 | `.text-h1` | 2.5rem (40px) | 1.2 | 700 | 页面主标题 |
| H2 | `.text-h2` | 2rem (32px) | 1.25 | 600 | 章节标题 |
| H3 | `.text-h3` | 1.5rem (24px) | 1.3 | 600 | 子章节标题 |
| H4 | `.text-h4` | 1.25rem (20px) | 1.4 | 500 | 卡片标题 |
| Body | `.text-body` | 1rem (16px) | 1.6 | 400 | 正文 |
| Small | `.text-small` | 0.875rem (14px) | 1.5 | 400 | 辅助文字 |
| XSmall | `.text-xsmall` | 0.75rem (12px) | 1.4 | 400 | 标注文字 |

### 3.3 响应式字体
```css
/* 移动端基础字体保持 16px (避免 iOS 自动缩放) */
@media (max-width: 767px) {
  :root {
    font-size: 16px;
  }
  
  h1 { font-size: 2rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.25rem; }
}
```

---

## 4. 间距系统

### 4.1 基础间距单位
基于 **8px 网格系统**:

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### 4.2 组件间距规范
| 组件 | 内边距 | 外边距 | 间隙 |
|------|--------|--------|------|
| 按钮 | 12px 24px | - | 8px (按钮组) |
| 卡片 | 24px | 16px | 24px (卡片网格) |
| 导航栏 | 16px 24px | - | 32px (导航项) |
| 表单字段 | 16px | 24px (垂直) | - |
| 内容区域 | 48px (桌面) | - | - |
| 内容区域 | 24px (移动) | - | - |

---

## 5. 圆角系统

### 5.1 圆角规范
```css
:root {
  --radius-sm: 4px;      /* 小元素 */
  --radius-md: 8px;      /* 默认圆角 */
  --radius-lg: 12px;     /* 组件圆角 */
  --radius-xl: 16px;     /* 大卡片 */
  --radius-full: 9999px; /* 圆形 */
}
```

### 5.2 圆角应用
| 元素 | 圆角值 | 说明 |
|------|--------|------|
| 按钮 | --radius-md (8px) | 标准按钮 |
| 卡片 | --radius-lg (12px) | 内容卡片 |
| 输入框 | --radius-md (8px) | 表单输入 |
| 头像 | --radius-full | 圆形头像 |
| 徽章 | --radius-full | 药丸形徽章 |
| 下拉菜单 | --radius-md (8px) | 下拉面板 |

---

## 6. 阴影系统

### 6.1 阴影层级
```css
:root {
  /* 基础阴影 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  
  /* 悬停效果 */
  --shadow-hover: 0 6px 12px rgba(0, 0, 0, 0.1);
  
  /* 聚焦效果 */
  --shadow-focus: 0 0 0 3px rgba(0, 114, 206, 0.2);
}
```

### 6.2 阴影应用
| 元素 | 阴影值 | 使用场景 |
|------|--------|----------|
| 卡片 (默认) | --shadow-md | 内容卡片 |
| 卡片 (悬停) | --shadow-hover | 卡片交互 |
| 下拉菜单 | --shadow-lg | 菜单面板 |
| 模态框 | --shadow-xl | 弹窗 |
| 按钮 (悬停) | --shadow-sm | 按钮交互 |
| 聚焦状态 | --shadow-focus | 键盘导航 |

---

## 7. 布局系统

### 7.1 响应式断点
```css
/* 移动优先断点 */
:root {
  --breakpoint-sm: 640px;   /* 大手机 */
  --breakpoint-md: 768px;   /* 平板 */
  --breakpoint-lg: 1024px;  /* 小桌面 */
  --breakpoint-xl: 1280px;  /* 标准桌面 */
  --breakpoint-2xl: 1536px; /* 大桌面 */
}
```

### 7.2 容器宽度
```css
.container {
  width: 100%;
  max-width: 1319px;  /* PRD 规定的最大宽度 */
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
}

@media (max-width: 767px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
```

### 7.3 12 列网格系统
```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

/* 响应式列 */
.col-12 { grid-column: span 12; }
.col-8 { grid-column: span 8; }
.col-6 { grid-column: span 6; }
.col-4 { grid-column: span 4; }
.col-3 { grid-column: span 3; }

@media (max-width: 1023px) {
  .col-lg-6 { grid-column: span 6; }
  .col-lg-12 { grid-column: span 12; }
}

@media (max-width: 767px) {
  .col-md-12 { grid-column: span 12; }
}
```

---

## 8. 组件设计规范

### 8.1 导航栏 (Navigation Bar)
**结构**:
```html
<header class="navbar">
  <div class="container">
    <div class="navbar-brand">
      <img src="logo.svg" alt="LiTong Electronics" class="logo">
      <span class="brand-tagline">Top 8 Electronic Component Distributor in China</span>
    </div>
    <nav class="navbar-menu">
      <a href="/" class="nav-item">Home</a>
      <a href="/brands/" class="nav-item">Brands</a>
      <a href="/news/" class="nav-item">News</a>
      <a href="/about/" class="nav-item">About Us</a>
    </nav>
    <button class="navbar-toggle" aria-label="Toggle menu">
      <span class="hamburger"></span>
    </button>
  </div>
</header>
```

**样式规范**:
- 高度：72px (桌面), 56px (移动)
- 背景：白色 + 滚动时半透明模糊
- 固定定位：`position: sticky; top: 0;`
- Z-index: 1000

### 8.2 品牌子目录 Tab 二级导航
**结构**:
```html
<nav class="brand-tab-nav" aria-label="Brand navigation">
  <div class="container">
    <ul class="tab-list">
      <li><a href="/infineon/" class="tab-item active">About Brand</a></li>
      <li><a href="/infineon/products/" class="tab-item">Products</a></li>
      <li><a href="/infineon/solutions/" class="tab-item">Solutions</a></li>
      <li><a href="/infineon/support/" class="tab-item">Support</a></li>
    </ul>
  </div>
</nav>
```

**样式规范**:
- 高度：56px
- 背景：--bg-light
- 当前项：底部 3px 橙色边框
- 响应式：移动端可横向滚动

### 8.3 按钮 (Buttons)
**类型**:
```css
/* 主按钮 (Primary) */
.btn-primary {
  background: var(--cta-orange);
  color: #ffffff;
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-weight: 500;
  min-height: 44px;  /* 触摸目标 */
}

/* 次按钮 (Secondary) */
.btn-secondary {
  background: transparent;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
  padding: 10px 22px;  /* 补偿边框 */
  border-radius: var(--radius-md);
  font-weight: 500;
  min-height: 44px;
}

/* 悬停效果 */
.btn-primary:hover {
  background: var(--cta-orange-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}
```

**触摸目标**: 最小 44×44px (符合 Apple HIG 和 Material Design)

### 8.4 卡片 (Cards)
**结构**:
```html
<article class="card">
  <div class="card-image">
    <img src="product.jpg" alt="Product description">
  </div>
  <div class="card-content">
    <h3 class="card-title">Product Name</h3>
    <p class="card-description">Brief description...</p>
    <div class="card-footer">
      <a href="#" class="btn-primary">Learn More</a>
    </div>
  </div>
</article>
```

**样式规范**:
- 圆角：--radius-lg (12px)
- 阴影：--shadow-md (默认), --shadow-hover (悬停)
- 内边距：24px
- 悬停效果：向上移动 4px + 阴影加深

### 8.5 面包屑导航 (Breadcrumbs)
**结构**:
```html
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/brands/">Brands</a></li>
    <li><a href="/infineon/">Infineon</a></li>
    <li aria-current="page">Products</li>
  </ol>
</nav>
```

**样式规范**:
- 字体大小：14px
- 分隔符：`/` (使用 CSS `::before`)
- 当前项：灰色，不可点击
- 间距：8px (水平)

### 8.6 表格 (Tables)
**斑马纹表格规范**:
```css
.spec-table {
  width: 100%;
  border-collapse: collapse;
}

.spec-table th {
  background: #f5f5f5;
  font-weight: 600;
  padding: 12px 16px;
  text-align: left;
}

.spec-table tr:nth-child(even) {
  background: #fafafa;
}

.spec-table tr:hover {
  background: #f0f7ff;
}

/* 移动端横向滚动 */
.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

### 8.7 Tab 选项卡 (Tab Container)
**结构**:
```html
<div class="tab-container">
  <div class="tab-headers" role="tablist">
    <button class="tab-header active" role="tab" aria-selected="true">
      Product Overview
    </button>
    <button class="tab-header" role="tab" aria-selected="false">
      Specifications
    </button>
    <button class="tab-header" role="tab" aria-selected="false">
      Applications
    </button>
    <button class="tab-header" role="tab" aria-selected="false">
      Documents
    </button>
  </div>
  <div class="tab-panels">
    <div class="tab-panel active" role="tabpanel">...</div>
    <div class="tab-panel" role="tabpanel">...</div>
  </div>
</div>
```

**样式规范**:
- 头部背景：--bg-light
- 激活项：底部橙色边框
- 内容区：24px 内边距
- 动画：300ms ease-out

### 8.8 固定侧边栏 (Sticky Sidebar)
```css
.sticky-sidebar {
  position: sticky;
  top: 100px;  /* 距离顶部距离 */
  height: calc(100vh - 120px);
  overflow-y: auto;
}

/* 文章目录 */
.table-of-contents {
  padding: 16px;
  background: var(--bg-light);
  border-radius: var(--radius-md);
}

.table-of-contents a {
  display: block;
  padding: 8px 0;
  color: var(--text-medium);
  font-size: 14px;
}

.table-of-contents a.active {
  color: var(--primary-blue);
  font-weight: 500;
}
```

### 8.9 右侧悬浮联系方式 (Floating Contact)
**结构**:
```html
<div class="floating-contact">
  <a href="https://wa.me/8615013702378" class="floating-btn whatsapp" aria-label="WhatsApp">
    <svg><!-- WhatsApp icon --></svg>
  </a>
  <a href="weixin://dl/chat?18612518271" class="floating-btn wechat" aria-label="WeChat">
    <svg><!-- WeChat icon --></svg>
  </a>
</div>
```

**样式规范**:
- 位置：`position: fixed; right: 20px; bottom: 100px;`
- 按钮大小：56×56px
- 背景：品牌色 (WhatsApp 绿色，WeChat 绿色)
- Z-index: 999
- 移动端：缩小到 48×48px

---

## 9. 页面模板布局

### 9.1 首页布局 (Homepage)
```
┌─────────────────────────────────────┐
│         Navigation Bar              │
├─────────────────────────────────────┤
│         Hero Banner                 │
│    (Full-width, Gradient BG)        │
├─────────────────────────────────────┤
│      Why Choose Us (Grid)           │
│    [Card] [Card] [Card] [Card]      │
├─────────────────────────────────────┤
│       Featured Brands               │
│    [Brand Card Grid 3x2]            │
├─────────────────────────────────────┤
│       Latest News                   │
│    [News Card × 3]                  │
├─────────────────────────────────────┤
│         Final CTA                   │
│    (Orange Background, Centered)    │
├─────────────────────────────────────┤
│           Footer                    │
└─────────────────────────────────────┘
```

### 9.2 产品详情页布局 (Product Detail)
```
┌───────────────────────────────────────────────┐
│              Navigation Bar                   │
├───────────────────────────────────────────────┤
│            Breadcrumb Navigation              │
├───────────────────────────────────────────────┤
│         Brand Tab Secondary Nav               │
├───────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────────────────┐ │
│  │             │  │  H1 Product Name        │ │
│  │  Product    │  │  Stock Status Badge     │ │
│  │  Image      │  │  Short Description      │ │
│  │  Gallery    │  │  [Get Quote] [Datasheet]│ │
│  │             │  │                         │ │
│  └─────────────┘  └─────────────────────────┘ │
├───────────────────────────────────────────────┤
│         Tab Container (4 Tabs)                │
│  ┌─────────────────────────────────────────┐  │
│  │         Tab Panel Content               │  │
│  │  - Product Overview                     │  │
│  │  - Specifications (Zebra Table)         │  │
│  │  - Applications                         │  │
│  │  - Documents                            │  │
│  └─────────────────────────────────────────┘  │
├───────────────────────────────────────────────┤
│     Related Products (Card Carousel)          │
├───────────────────────────────────────────────┤
│              Footer                           │
└───────────────────────────────────────────────┘
```

### 9.3 技术支持详情页布局 (Tech Detail)
```
┌───────────────────────────────────────────────┐
│              Navigation Bar                   │
├───────────────────────────────────────────────┤
│            Breadcrumb Navigation              │
├───────────────────────────────────────────────┤
│         Brand Tab Secondary Nav               │
├───────────────────────────────────────────────┤
│  ┌─────────────────────┐  ┌───────────────┐  │
│  │  Author Bar         │  │  Table of     │  │
│  │  [Avatar] Name      │  │  Contents     │  │
│  │  Date               │  │               │  │
│  ├─────────────────────┤  │  - Section 1  │  │
│  │                     │  │  - Section 2  │  │
│  │  Article Content    │  │  - Section 3  │  │
│  │  (max-width: 800px) │  │               │  │
│  │  H2 with left bar   │  │  Related PDF  │  │
│  │  Code blocks        │  │               │  │
│  │  Blockquotes        │  │  Ask FAE      │  │
│  │                     │  │               │  │
│  │  Related Articles   │  │               │  │
│  │  [Card × 3]         │  │               │  │
│  └─────────────────────┘  └───────────────┘  │
├───────────────────────────────────────────────┤
│              Footer                           │
└───────────────────────────────────────────────┘
```

---

## 10. SVG 图标规范

### 10.1 图标尺寸
| 用途 | 尺寸 | 文件命名 |
|------|------|----------|
| 导航图标 | 24×24px | `nav-home.svg`, `nav-brands.svg` |
| 功能图标 | 16×16px | `icon-download.svg`, `icon-search.svg` |
| 产品类别图标 | 48×48px | `cat-mcu.svg`, `cat-igbt.svg` |
| 社交图标 | 24×24px | `social-whatsapp.svg`, `social-wechat.svg` |

### 10.2 图标风格
- **线条粗细**: 统一 2px stroke
- **圆角**: 8px (与整体设计一致)
- **颜色**: 使用 CSS 变量控制 (currentColor)
- **风格**: 线性图标 (Outline), 非填充

### 10.3 产品类别图标设计
```
MCU 微控制器:
- 芯片形状 (正方形)
- 四边引脚
- 中心标注"MCU"

IGBT 模块:
- 矩形封装
- 三个引脚 (C/G/E 符号)
- 闪电符号 (功率)

MOSFET:
- 晶体管符号
- 箭头指示
- 简洁线条
```

---

## 11. 响应式设计规范

### 11.1 移动端适配 (<768px)
| 变化 | 桌面 → 移动 |
|------|-------------|
| 导航栏 | 完整菜单 → 汉堡菜单 |
| 品牌 Tab 导航 | 完整显示 → 横向滚动 |
| 产品详情页 | 双栏 → 单栏 |
| 技术页侧边栏 | 右侧 → 文章底部 |
| 卡片网格 | 3 列 → 1 列 |
| 内容内边距 | 48px → 24px |
| 字体大小 | 100% → 保持 16px 基准 |

### 11.2 平板适配 (768px-1199px)
| 变化 | 桌面 → 平板 |
|------|-------------|
| 卡片网格 | 3 列 → 2 列 |
| 容器宽度 | 1319px → 100% |
| 内容内边距 | 48px → 32px |

### 11.3 触摸优化
```css
/* 所有可点击元素最小 44px */
button, a, .tab-item, .card {
  min-height: 44px;
  min-width: 44px;
}

/* 移除移动端点击延迟 */
* {
  touch-action: manipulation;
}

/* 禁止选中文本 */
.navbar, .tab-header, .btn {
  -webkit-user-select: none;
  user-select: none;
}
```

---

## 12. 交互效果规范

### 12.1 按钮交互
```css
.btn {
  transition: all 0.2s ease-out;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

.btn:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.btn:focus-visible {
  outline: 2px solid var(--primary-blue);
  outline-offset: 2px;
}
```

### 12.2 卡片交互
```css
.card {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### 12.3 Tab 切换动画
```css
.tab-panel {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.tab-panel.active {
  opacity: 1;
  transform: translateY(0);
}
```

### 12.4 加载动画
```css
/* 骨架屏动画 */
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## 13. 可访问性 (Accessibility)

### 13.1 颜色对比度
| 元素 | 前景色 | 背景色 | 对比度 | 标准 |
|------|--------|--------|--------|------|
| 正文文字 | #333333 | #ffffff | 12.6:1 | AAA |
| 次要文字 | #666666 | #ffffff | 5.7:1 | AA |
| 按钮文字 | #ffffff | #ff6b00 | 4.6:1 | AA |
| 链接文字 | #0072ce | #ffffff | 4.5:1 | AA |

### 13.2 键盘导航
```css
/* 焦点样式 */
:focus-visible {
  outline: 2px solid var(--primary-blue);
  outline-offset: 2px;
}

/* 跳过导航链接 */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  z-index: 1001;
}

.skip-link:focus {
  top: 0;
}
```

### 13.3 屏幕阅读器支持
```html
<!-- 图标按钮添加 aria-label -->
<button class="icon-btn" aria-label="Search">
  <svg><!-- search icon --></svg>
</button>

<!-- 图片添加 alt -->
<img src="product.jpg" alt="Infineon IGBT Module FF300R12ME4">

<!-- 装饰性图片 aria-hidden -->
<img src="decorative-bg.svg" alt="" aria-hidden="true">
```

### 13.4 减少动画
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 14. 性能优化

### 14.1 图片优化
```html
<!-- 响应式图片 -->
<img 
  src="product-800.jpg" 
  srcset="product-400.jpg 400w, product-800.jpg 800w, product-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Product description"
  loading="lazy"
  width="800"
  height="600"
>
```

### 14.2 字体加载
```css
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap;  /* 避免 FOIT */
}
```

### 14.3 CSS 优化
```css
/* 使用 CSS 变量，便于维护 */
:root {
  --primary-color: #0072ce;
  --spacing-unit: 8px;
}

/* 避免深层嵌套 */
.card .content .title { }  /* ❌ */
.card-title { }             /* ✅ */
```

---

## 15. SEO 优化设计

### 15.1 Meta 标签占位符
```html
<head>
  <title>{{page.title}}</title>
  <meta name="description" content="{{page.description}}">
  <meta name="keywords" content="{{page.keywords}}">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph -->
  <meta property="og:title" content="{{page.title}}">
  <meta property="og:description" content="{{page.description}}">
  <meta property="og:image" content="{{page.image}}">
  <meta property="og:url" content="{{page.url}}">
  
  <!-- Canonical -->
  <link rel="canonical" href="{{page.canonical}}">
</head>
```

### 15.2 结构化标题层级
```html
<h1>Page Main Title (One per page)</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Card/Component Title</h4>
```

### 15.3 Schema.org 结构化数据
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "description": "Product description",
  "brand": {
    "@type": "Brand",
    "name": "Infineon"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD"
  }
}
</script>
```

---

## 16. 特殊页面设计

### 16.1 Hero Banner 设计规范
**首页 Hero Banner**:
```css
.hero-banner {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #0072ce 0%, #005ba3 100%);
  overflow: hidden;
}

/* 抽象科技背景 */
.hero-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cpath d='M0,0 L1000,1000 M1000,0 L0,1000' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/svg%3E");
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 24px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 24px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255,255,255,0.9);
  margin-bottom: 32px;
}

.hero-cta {
  display: inline-flex;
  gap: 16px;
}

/* 移动端适配 */
@media (max-width: 767px) {
  .hero-banner {
    height: 400px;
  }
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .hero-cta {
    flex-direction: column;
  }
}
```

**内容结构**:
```html
<section class="hero-banner">
  <div class="hero-content">
    <h1 class="hero-title">Electronic Components Core Distributor</h1>
    <p class="hero-subtitle">Genuine Products | In Stock | Technical Support | Competitive Pricing</p>
    <div class="hero-cta">
      <a href="/brands/" class="btn-primary">Browse Brands</a>
      <a href="/about/contact/" class="btn-secondary">Contact Us</a>
    </div>
  </div>
</section>
```

### 16.2 FAE 作者简介页面
**布局结构**:
```
┌─────────────────────────────────────────────┐
│              Navigation Bar                 │
├─────────────────────────────────────────────┤
│            Breadcrumb Navigation            │
├─────────────────────────────────────────────┤
│  ┌─────────────────────────────────────┐    │
│  │  [Avatar Photo]                     │    │
│  │  John Chen                          │    │
│  │  Senior FAE Engineer                │    │
│  │                                     │    │
│  │  Technical Expertise:               │    │
│  │  • IGBT/MOSFET Applications         │    │
│  │  • MCU System Design                │    │
│  │  • Power Management                 │    │
│  │                                     │    │
│  │  Experience: 10+ years in           │    │
│  │  semiconductor distribution         │    │
│  │                                     │    │
│  │  Published Articles (12)            │    │
│  │  [Article Card] [Article Card]...   │    │
│  └─────────────────────────────────────┘    │
├─────────────────────────────────────────────┤
│              Footer                         │
└─────────────────────────────────────────────┘
```

**样式规范**:
- 头像：160×160px，圆形，居中
- 姓名：H1, 32px, 600 字重
- 职位：18px, 500 字重，灰色
- 技术专长：列表形式，带图标
- 文章列表：卡片网格 (3 列)

### 16.3 标签聚合页面
**布局结构**:
```
┌─────────────────────────────────────────────┐
│              Navigation Bar                 │
├─────────────────────────────────────────────┤
│            Breadcrumb Navigation            │
├─────────────────────────────────────────────┤
│         Brand Tab Secondary Nav             │
├─────────────────────────────────────────────┤
│  Tag: IGBT                                  │
│  ─────────────────────                      │
│  Found 8 articles tagged with "IGBT"        │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │ [Article Card]                      │    │
│  │ Title, Date, Category               │    │
│  └─────────────────────────────────────┘    │
│  (重复 8 次)                                  │
│                                             │
│  Pagination: [1] [2] [3] [Next]             │
├─────────────────────────────────────────────┤
│              Footer                         │
└─────────────────────────────────────────────┘
```

### 16.4 报关单展示区 (占位符)
```html
<section class="customs-declaration-section">
  <h2>Our Certifications</h2>
  <p class="section-description">
    As a trusted electronic component distributor, we maintain complete 
    customs documentation for all imported products, ensuring authenticity 
    and compliance with international trade regulations.
  </p>
  <div class="customs-documents-grid">
    <!-- 占位符，后续替换真实报关单图片 -->
    <div class="document-placeholder">
      <svg class="placeholder-icon" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
      <span>Customs Declaration Sample</span>
      <small>Placeholder - Real document will be added</small>
    </div>
  </div>
</section>
```

**样式规范**:
- 占位符背景：#f5f5f5
- 占位符尺寸：300×400px
- 图标：64×64px，灰色
- 边框：2px 虚线 #e0e0e0

### 16.5 产品详情页特殊模块

**FAE 点评模块**:
```html
<div class="fae-commentary">
  <div class="fae-header">
    <img src="fae-avatar.jpg" alt="FAE Engineer" class="fae-avatar">
    <div>
      <h4>FAE Engineer's Pick</h4>
      <p>Expert Review by John Chen</p>
    </div>
  </div>
  <div class="fae-content">
    <p>This TC399XX MCU from Infineon's AURIX family is ideal for automotive 
    applications requiring high performance and functional safety. The TriCore 
    architecture delivers excellent real-time performance...</p>
  </div>
  <div class="fae-rating">
    <span class="rating-label">Recommended for:</span>
    <span class="rating-tags">
      <span class="tag">Automotive</span>
      <span class="tag">Industrial Control</span>
      <span class="tag">High Safety</span>
    </span>
  </div>
</div>
```

**替代料号模块**:
```html
<div class="alternative-parts">
  <h3>Alternative Parts</h3>
  <table class="comparison-table">
    <thead>
      <tr>
        <th>Part Number</th>
        <th>Series</th>
        <th>Key Parameters</th>
        <th>Package</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>TC397XX</td>
        <td>AURIX™</td>
        <td>266MHz, 12MB Flash</td>
        <td>LFBGA-292</td>
        <td><a href="#" class="btn-link">View Details</a></td>
      </tr>
    </tbody>
  </table>
</div>
```

**配套料号模块**:
```html
<div class="配套 parts配套">
  <h3>Recommended Matching Parts</h3>
  <div class="parts-carousel">
    <div class="part-card">
      <img src="gate-driver.jpg" alt="Gate Driver">
      <h4>2ED020I12-F2</h4>
      <p>Gate Driver IC</p>
      <a href="#" class="btn-primary">View Details</a>
    </div>
  </div>
</div>
```

### 16.6 解决方案详情页 BOM 清单
```html
<div class="bom-list-section">
  <h3>Recommended Bill of Materials (BOM)</h3>
  <p class="section-description">
    Key components for this EV Charger solution:
  </p>
  <table class="bom-table">
    <thead>
      <tr>
        <th>Item</th>
        <th>Part Number</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Datasheet</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td><a href="/infineon/products/ff300r12me4.html">FF300R12ME4</a></td>
        <td>IGBT Module, 1200V, 300A</td>
        <td>2</td>
        <td><a href="#" class="icon-link">📄</a></td>
      </tr>
    </tbody>
  </table>
</div>
```

**样式规范**:
- BOM 表格：斑马纹样式
- 型号链接：蓝色，可点击
- 数据手册图标：16×16px

### 16.7 新闻中心分类设计
**公司新闻 vs 行业动态分离**:
```
/news/
├── /news/company/     (公司新闻)
│   ├── index.html
│   └── [article].html
└── /news/industry/    (行业动态)
    ├── index.html
    └── [article].html
```

**列表页设计差异**:
| 要素 | 公司新闻 | 行业动态 |
|------|----------|----------|
| 配色 | 品牌蓝 | 深蓝 + 橙色点缀 |
| 图标 | 办公楼图标 | 地球/新闻图标 |
| 内容 | 公司活动、产品发布 | 行业趋势、市场动态 |
| Schema | Organization | NewsArticle |

### 16.8 品牌卡片设计
```html
<article class="brand-card">
  <div class="brand-logo">
    <img src="infineon-logo.svg" alt="Infineon">
  </div>
  <div class="brand-content">
    <h3 class="brand-name">Infineon</h3>
    <p class="brand-description">
      Leading global semiconductor company specializing in power systems, 
      IoT, and automotive solutions.
    </p>
    <div class="brand-categories">
      <span class="category-tag">IGBT</span>
      <span class="category-tag">MOSFET</span>
      <span class="category-tag">MCU</span>
    </div>
    <div class="brand-cta">
      <a href="/infineon/" class="btn-primary">Explore Brand</a>
    </div>
  </div>
</article>
```

**样式规范**:
- 卡片圆角：12px
- Logo 区域：白色背景，居中
- 悬停效果：向上 4px + 阴影加深
- 分类标签：浅灰背景，圆角

### 16.9 404 页面设计
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Page Not Found | LiTong Electronics</title>
</head>
<body>
  <div class="error-page">
    <div class="error-content">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">Page Not Found</h2>
      <p class="error-description">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div class="error-actions">
        <a href="/" class="btn-primary">Back to Home</a>
        <a href="/brands/" class="btn-secondary">Browse Brands</a>
      </div>
    </div>
  </div>
</body>
</html>
```

**样式规范**:
- 错误代码：120px，品牌蓝，700 字重
- 背景：抽象电路图案
- 居中布局
- 提供返回首页和品牌列表的链接

### 16.10 CSS 样式类补充

根据 PRD 4.3.7 要求，以下是 style.css 中必须包含的特定样式类：

**Tab 选项卡容器**:
```css
.tab-container {
  margin-top: 24px;
}

.tab-headers {
  display: flex;
  gap: 0;
  background: var(--bg-light);
  border-bottom: 2px solid var(--border-light);
}

.tab-header {
  padding: 12px 24px;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  font-weight: 500;
  color: var(--text-medium);
  transition: all 0.2s ease-out;
}

.tab-header:hover {
  color: var(--primary-blue);
  background: rgba(0, 114, 206, 0.05);
}

.tab-header.active {
  color: var(--primary-blue);
  border-bottom-color: var(--cta-orange);
}

.tab-panels {
  padding: 24px;
}

.tab-panel {
  display: none;
}

.tab-panel.active {
  display: block;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

**规格参数表格 (斑马纹)**:
```css
.spec-table {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
}

.spec-table th {
  background: #f5f5f5;
  font-weight: 600;
  padding: 12px 16px;
  text-align: left;
  border: 1px solid var(--border-light);
}

.spec-table td {
  padding: 12px 16px;
  border: 1px solid var(--border-light);
}

.spec-table tr:nth-child(even) {
  background: #fafafa;
}

.spec-table tr:nth-child(odd) {
  background: #ffffff;
}

.spec-table tr:hover {
  background: #f0f7ff;
}

/* 移动端横向滚动 */
.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

**固定侧边栏**:
```css
.sticky-sidebar {
  position: sticky;
  top: 100px;
  height: calc(100vh - 120px);
  overflow-y: auto;
}

.table-of-contents {
  padding: 16px;
  background: var(--bg-light);
  border-radius: var(--radius-md);
}

.table-of-contents a {
  display: block;
  padding: 8px 0;
  color: var(--text-medium);
  font-size: 14px;
  text-decoration: none;
}

.table-of-contents a:hover {
  color: var(--primary-blue);
}

.table-of-contents a.active {
  color: var(--primary-blue);
  font-weight: 500;
}
```

**文章内容区**:
```css
.article-content {
  max-width: 800px;
  line-height: 1.8;
}

.article-content h2 {
  font-size: 1.75rem;
  margin-top: 48px;
  margin-bottom: 24px;
  padding-left: 16px;
  border-left: 4px solid var(--primary-blue);
}

.article-content h3 {
  font-size: 1.5rem;
  margin-top: 32px;
  margin-bottom: 16px;
  padding-left: 16px;
  border-left: 3px solid var(--border-medium);
}

.article-content pre {
  background: #f5f5f5;
  padding: 16px;
  border-radius: var(--radius-md);
  overflow-x: auto;
}

.article-content code {
  font-family: var(--font-family-mono);
  font-size: 14px;
}

.article-content blockquote {
  border-left: 4px solid var(--border-light);
  padding-left: 16px;
  margin: 24px 0;
  color: var(--text-medium);
  font-style: italic;
}
```

**面包屑导航**:
```css
.breadcrumb {
  padding: 16px 0;
}

.breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb li {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.breadcrumb li:not(:last-child)::after {
  content: '/';
  margin: 0 8px;
  color: var(--text-light);
}

.breadcrumb a {
  color: var(--primary-blue);
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.breadcrumb li[aria-current="page"] {
  color: var(--text-medium);
}
```

**品牌子目录 Tab 二级导航**:
```css
.brand-tab-nav {
  background: var(--bg-light);
  border-bottom: 1px solid var(--border-light);
}

.brand-tab-nav .tab-list {
  display: flex;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.brand-tab-nav .tab-item {
  display: block;
  padding: 16px 24px;
  color: var(--text-medium);
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap;
  border-bottom: 3px solid transparent;
  transition: all 0.2s ease-out;
}

.brand-tab-nav .tab-item:hover {
  color: var(--primary-blue);
  background: rgba(0, 114, 206, 0.05);
}

.brand-tab-nav .tab-item.active {
  color: var(--primary-blue);
  border-bottom-color: var(--cta-orange);
}

/* 移动端适配 */
@media (max-width: 767px) {
  .brand-tab-nav .tab-list {
    padding: 0 16px;
  }
  
  .brand-tab-nav .tab-item {
    padding: 14px 16px;
    font-size: 14px;
  }
}
```

**多样化 CTA 模块**:
```css
.product-cta-section {
  margin: 48px 0;
}

.cta-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 24px;
}

.cta-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;
  background: var(--bg-light);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: var(--text-dark);
  transition: all 0.3s ease-out;
}

.cta-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  background: #ffffff;
}

.cta-card svg {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  color: var(--primary-blue);
}

.cta-card span {
  font-weight: 500;
  margin-bottom: 8px;
}

.cta-card small {
  color: var(--text-light);
  font-size: 12px;
}

@media (max-width: 1023px) {
  .cta-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .cta-grid {
    grid-template-columns: 1fr;
  }
}
```

**FAQ 模块**:
```css
.faq-section {
  margin: 48px 0;
}

.faq-list {
  margin-top: 24px;
}

.faq-item {
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  margin-bottom: 16px;
  overflow: hidden;
}

.faq-item summary {
  padding: 16px;
  cursor: pointer;
  font-weight: 500;
  background: var(--bg-light);
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary::after {
  content: '+';
  font-size: 20px;
  font-weight: 300;
}

.faq-item[open] summary::after {
  content: '−';
}

.faq-answer {
  padding: 16px;
  background: #ffffff;
  color: var(--text-medium);
  line-height: 1.6;
}
```

**库存状态标签**:
```css
.stock-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 500;
}

.stock-badge.in-stock {
  background: #d4edda;
  color: #155724;
}

.stock-badge.inquiry {
  background: #fff3cd;
  color: #856404;
}

.stock-badge::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  background: currentColor;
}
```

**代码块样式**:
```css
.article-content pre {
  background: #f5f5f5;
  padding: 16px;
  border-radius: var(--radius-md);
  overflow-x: auto;
  margin: 24px 0;
}

.article-content code {
  font-family: var(--font-family-mono);
  font-size: 14px;
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 4px;
}

.article-content pre code {
  background: transparent;
  padding: 0;
}
```

**引用块样式**:
```css
.article-content blockquote {
  border-left: 4px solid var(--primary-blue);
  padding: 16px 24px;
  margin: 24px 0;
  background: var(--bg-light);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  font-style: italic;
  color: var(--text-medium);
}
```

**分享按钮**:
```css
.share-buttons {
  display: flex;
  gap: 12px;
  margin: 32px 0;
  padding-top: 24px;
  border-top: 1px solid var(--border-light);
}

.share-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  background: var(--bg-light);
  color: var(--text-medium);
  transition: all 0.2s ease-out;
}

.share-btn:hover {
  background: var(--primary-blue);
  color: #ffffff;
  transform: translateY(-2px);
}
```

**推荐阅读**:
```css
.related-articles {
  margin: 48px 0;
  padding-top: 32px;
  border-top: 1px solid var(--border-light);
}

.related-articles h3 {
  margin-bottom: 24px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 767px) {
  .related-grid {
    grid-template-columns: 1fr;
  }
}
```

**右侧悬浮联系方式**:
```css
.floating-contact {
  position: fixed;
  right: 20px;
  bottom: 100px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.floating-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-full);
  color: #ffffff;
  box-shadow: var(--shadow-lg);
  transition: all 0.2s ease-out;
}

.floating-btn.whatsapp {
  background: #25D366;
}

.floating-btn.wechat {
  background: #07C160;
}

.floating-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

.floating-btn svg {
  width: 28px;
  height: 28px;
  fill: currentColor;
}

/* 移动端适配 */
@media (max-width: 767px) {
  .floating-contact {
    right: 16px;
    bottom: 80px;
  }
  
  .floating-btn {
    width: 48px;
    height: 48px;
  }
  
  .floating-btn svg {
    width: 24px;
    height: 24px;
  }
}
```

**双 CTA 按钮组 (产品详情页)**:
```css
.product-cta-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin: 24px 0;
}

.product-cta-group .btn-primary {
  background: var(--cta-orange);
  color: #ffffff;
  padding: 12px 32px;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  min-height: 44px;
}

.product-cta-group .btn-primary:hover {
  background: var(--cta-orange-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

.product-cta-group .btn-secondary {
  background: transparent;
  color: var(--primary-blue);
  padding: 10px 30px;
  border: 2px solid var(--primary-blue);
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  min-height: 44px;
}

.product-cta-group .btn-secondary:hover {
  background: rgba(0, 114, 206, 0.05);
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

/* 移动端适配 */
@media (max-width: 767px) {
  .product-cta-group {
    flex-direction: column;
  }
  
  .product-cta-group .btn-primary,
  .product-cta-group .btn-secondary {
    width: 100%;
    text-align: center;
  }
}
```

---

## 17. 设计检查清单

### 17.1 视觉质量
- [ ] 无 emoji 用作图标 (使用 SVG)
- [ ] 所有图标来自一致的图标家族
- [ ] 品牌 Logo 使用官方资产
- [ ] 按压状态不改变布局边界
- [ ] 使用语义化主题颜色令牌

### 17.2 交互体验
- [ ] 所有可点击元素提供清晰的按压反馈
- [ ] 触摸目标 ≥44×44px
- [ ] 微交互时间 150-300ms
- [ ] 禁用状态视觉清晰
- [ ] 键盘导航顺序正确

### 17.3 响应式适配
- [ ] 在小手机 (375px)、大手机、平板上测试
- [ ] 横屏模式正常显示
- [ ] 无水平滚动条
- [ ] 8dp 间距节奏一致

### 17.4 可访问性
- [ ] 所有图片有 alt 文本
- [ ] 表单字段有标签
- [ ] 颜色不是唯一的信息指示器
- [ ] 支持减少动画偏好
- [ ] 支持动态字体大小

### 17.5 SEO
- [ ] 所有页面有唯一 Title
- [ ] Meta Description 完整
- [ ] H1-H6 层级正确
- [ ] Schema 标记添加
- [ ] 面包屑导航存在

### 17.6 PRD 特定要求
- [ ] Hero Banner 专业文案和渐变背景
- [ ] FAE 作者简介页面完整
- [ ] 标签聚合页面功能
- [ ] 报关单展示占位符
- [ ] FAE 点评模块设计
- [ ] 替代料号表格
- [ ] 配套料号推荐
- [ ] BOM 清单表格
- [ ] 新闻中心分类分离
- [ ] 品牌卡片网格
- [ ] 404 页面设计
- [ ] Tab 二级导航菜单
- [ ] 右侧悬浮联系方式
- [ ] 多样化 CTA 模块
- [ ] FAQ 模块
- [ ] 库存状态标签
- [ ] 双 CTA 按钮组
- [ ] 斑马纹表格
- [ ] Sticky 侧边栏
- [ ] 代码块样式
- [ ] 引用块样式
- [ ] 相关文章模块
- [ ] 分享按钮
- [ ] 推荐阅读
- [ ] 产品详情页双 CTA 按钮组 CSS
- [ ] 右侧悬浮联系方式 CSS

### 17.7 CSS 样式类完整性检查
- [ ] `.tab-container` - Tab 选项卡容器
- [ ] `.spec-table` - 规格参数表格 (斑马纹样式)
- [ ] `.sticky-sidebar` - 固定侧边栏
- [ ] `.article-content` - 文章内容区
- [ ] `.breadcrumb` - 面包屑导航
- [ ] `.brand-tab-nav` - 品牌子目录 Tab 二级导航
- [ ] `.product-cta-section` - 多样化 CTA 模块
- [ ] `.faq-section` - FAQ 模块
- [ ] `.stock-badge` - 库存状态标签
- [ ] `pre/code` - 代码块样式
- [ ] `blockquote` - 引用块样式
- [ ] `.share-buttons` - 分享按钮
- [ ] `.related-articles` - 推荐阅读
- [ ] `.floating-contact` - 右侧悬浮联系方式
- [ ] `.product-cta-group` - 双 CTA 按钮组

---

## 18. 性能优化检查清单

### 18.1 图片优化
- [ ] 所有图片使用 WebP 格式 (带 PNG/JPEG 降级)
- [ ] 响应式图片使用 srcset/sizes
- [ ] 非关键图片懒加载
- [ ] 所有图片声明 width/height (防止 CLS)
- [ ] 所有图片有 alt 属性

### 18.2 字体优化
- [ ] 使用 font-display: swap
- [ ] 仅 preload 关键字体
- [ ] 避免 FOIT

### 18.3 CSS 优化
- [ ] 使用 CSS 变量统一管理
- [ ] 纯原生 CSS (无框架依赖)
- [ ] 压缩 CSS 文件
- [ ] Critical CSS 内联

---

## 19. SEO 优化检查清单

### 19.1 Meta 标签
- [ ] 所有页面有唯一 `<title>`
- [ ] 所有页面有 `<meta name="description">`
- [ ] 所有页面有 `<meta name="keywords">`
- [ ] Open Graph 标签完整
- [ ] Canonical URL 设置

### 19.2 结构化数据
- [ ] 产品页使用 Product Schema
- [ ] 技术文章使用 TechArticle Schema
- [ ] 新闻文章使用 NewsArticle Schema
- [ ] 解决方案使用 Article Schema
- [ ] 关于我们使用 Organization Schema

### 19.3 URL 结构
- [ ] 静态 HTML 文件
- [ ] 小写字母和连字符
- [ ] URL 结构清晰
- [ ] 面包屑导航存在于所有页面

### 19.4 网站地图
- [ ] sitemap.xml 自动生成
- [ ] 包含所有主站页面
- [ ] 包含所有品牌子目录页面
- [ ] 提交到 Google Search Console

---

## 20. 文档更新记录
| 版本 | 日期 | 更新内容 | 作者 |
|------|------|----------|------|
| 1.0 | 2026-03-20 | 初始版本，基于 PRD 1.3 和 UI/UX Pro Max 规范 | AI |
| 1.1 | 2026-03-20 | 补充遗漏内容：Hero Banner 详细设计、FAE 作者简介页、标签聚合页、报关单占位符、FAE 点评模块、替代料号/配套料号、BOM 清单、新闻中心分类、品牌卡片、404 页面、完整检查清单 | AI |
| 1.2 | 2026-03-20 | 再次检查补充：多样化 CTA 模块、FAQ 模块、库存状态标签、双 CTA 按钮组、代码块样式、引用块样式、相关文章模块、分享按钮、推荐阅读、文档版本更新 | AI |
| 1.3 | 2026-03-20 | 第三次检查补充：CSS 样式类补充章节 (Tab 容器、斑马纹表格、固定侧边栏、文章内容区、面包屑导航、品牌 Tab 二级导航、多样化 CTA、FAQ 模块、库存状态标签、代码块、引用块、分享按钮、推荐阅读)，共 13 个 CSS 样式类 | AI |
| 1.4 | 2026-03-20 | 第四次检查补充：右侧悬浮联系方式 CSS 样式、双 CTA 按钮组 CSS 样式 (产品详情页) | AI |
| 1.5 | 2026-03-20 | 第五次检查补充：CSS 样式类完整性检查清单、性能优化检查清单、SEO 优化检查清单、文档章节编号更新 | AI |

---

**文档结束**
