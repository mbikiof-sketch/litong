# 电子元件代理商品牌子目录网站实施计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans 来逐任务实施此计划。

**目标:** 为 ic-distributor.com 创建完整的品牌子目录网站，包含首页、品牌列表页、品牌子目录网站 (Infineon 作为首个模板)、新闻中心、关于我们等完整功能

**架构:** 静态 HTML+CSS 网站，使用 Node.js 脚本批量生成页面，部署在 Cloudflare Pages。采用模板 + JSON 数据驱动的方式，支持快速新增品牌子目录网站。

**技术栈:**
- 前端：原生 HTML5, CSS3, JavaScript (ES6+)
- 构建：Node.js, EJS 模板引擎
- 部署：Cloudflare Pages
- 测试：Playwright MCP

---

## 开发流程集成 (Superpowers Skills)

| 阶段 | Skill | 说明 |
|------|-------|------|
| 1. 创建分支 | `using-git-worktrees` | 在工作区目录创建独立开发分支 |
| 2. 执行实施 | `executing-plans` | 执行详细实施计划 |
| 3. 子代理驱动 | `subagent-driven-development` | 使用子代理处理复杂任务 |
| 4. 并行代理 | `dispatching-parallel-agents` | 并行处理独立任务 |
| 5. 请求审查 | `requesting-code-review` | 完成模块后请求代码审查 |
| 6. 接收审查 | `receiving-code-review` | 处理审查反馈 |
| 7. 系统调试 | `systematic-debugging` | 遇到问题时系统调试 |
| 8. 完成分支 | `finishing-a-development-branch` | 决定如何集成工作 |
| 9. 验证完成 | `verification-before-completion` | 运行验证命令确认输出 |

---

## 审查测试规则

**每个单元模块完成后立即审查和测试，不等待阶段结束**

1. **单元审查测试规则**:
   - 每个模块完成后立即审查和测试
   - 审查和测试是该模块的一部分，不是独立阶段
   - 失败立即修复，修复后重新测试，通过后才继续下一个模块
   - 集成测试在所有单元通过后才开始

2. **检查点机制**:
   - 每个单元模块审查测试后，插入 1 个检查点
   - 给出关键状态和结果日志
   - 如出现错误，立即修复并重新测试
   - 记录到 `checkpoints.md` 文件

3. **代码审查内容**:
   - 代码质量 (命名、结构、注释)
   - 样式符合 DESIGN.md 规范
   - 功能完整性
   - SEO 优化 (Meta 标签、Schema)
   - 可访问性 (ARIA、键盘导航)
   - 响应式设计

4. **测试方法**:
   - Playwright MCP 截图验证
   - 对照 PRD 检查布局
   - 移动端响应式测试
   - 功能交互测试

---

## 重要规范说明

### 用词规范 (重要)

**全站替换规则**: 将所有"authorized"改成"core"

| 原词 | 替换为 | 示例 |
|------|--------|------|
| Authorized Distributor | Core Distributor | "Electronic Components Core Distributor" |
| Authorized Agent | Core Agent | "Infineon Core Agent" |
| authorized | core | "core distributor of electronic components" |

**原因**: 避免潜在的法律风险，同时保持语义清晰。

**检查方法**:
```bash
# 搜索是否还有 authorized 字样
grep -r "authorized" --include="*.html" --include="*.json" .
# 预期输出：无结果 (除了注释和说明文档)
```

### 语言规范

- **全站内容**: 使用英文
- **品牌子目录**: 每个品牌子目录网站内容全部为英文
- **关键词**: 包含英文关键词和中文拼音关键词 (如"英飞凌代理"用于 SEO meta keywords)

### 品牌差异化要求

- **产品分类**: 新增品牌的产品分类与英飞凌不一样
- **应用行业**: 依据新增品牌的应用行业定制内容
- **解决方案**: 依据新增品牌的解决方案定制内容
- **内容独特性**: 避免模板化，确保 AI 生成内容差异化，防止 SEO 降权

---

## 检查点记录文件 (checkpoints.md)

**创建文件**: `C:\Users\ymlt\Desktop\3\checkpoints.md`

**文件格式**:
```markdown
# 开发检查点记录

## Task 1: Git 工作树创建
- **时间**: 2026-03-20 10:00
- **状态**: ✅ 通过
- **关键状态**: 分支 feature/elec-distributor-website 创建成功
- **日志**: 
  ```
  git branch
  * feature/elec-distributor-website
  ```

## Task 3: 全局样式创建
- **时间**: 2026-03-20 11:30
- **状态**: ✅ 通过
- **关键状态**: CSS 变量定义完整，共 50+ 个变量
- **审查结果**: 
  - 代码质量：✅ 命名规范
  - 样式规范：✅ 符合 DESIGN.md
  - 功能完整：✅ 
  - SEO: ✅ 
  - 可访问性：✅ 
  - 响应式：✅ 
- **Playwright 截图**: ✅ 通过

## Task X: [模块名称]
- **时间**: YYYY-MM-DD HH:MM
- **状态**: ⬜ 待开发 / ✅ 通过 / ❌ 失败 (已修复)
- **关键状态**: ...
- **审查结果**: ...
- **Playwright 截图**: ✅/❌
```

**使用方法**:
- 每个 Task 完成后，立即记录到 checkpoints.md
- 包含时间、状态、关键状态、日志输出
- 审查结果使用检查清单格式
- 如失败，记录修复过程和重新测试结果

---

## 单元模块清单 (25 个模块)

| 编号 | 模块名称 | 文件 | 预计时间 | 审查测试状态 |
|------|----------|------|----------|--------------|
| M01 | 全局样式 | style.css | 2 小时 | ⬜ 待开发 |
| M02 | 导航栏组件 | nav.html | 1 小时 | ⬜ 待开发 |
| M03 | 页脚组件 | footer.html | 1 小时 | ⬜ 待开发 |
| M04 | 面包屑导航 | breadcrumb.html | 0.5 小时 | ⬜ 待开发 |
| M05 | 首页 | index.html | 3 小时 | ⬜ 待开发 |
| M06 | 品牌列表页 | brands-index.html | 2 小时 | ⬜ 待开发 |
| M07 | 品牌关于页 | brand-about.html | 2 小时 | ⬜ 待开发 |
| M08 | 产品列表页 | products-index.html | 2 小时 | ⬜ 待开发 |
| M09 | 二级产品分类页 | product-category.html | 3 小时 | ⬜ 待开发 |
| M10 | 产品详情页 | product-detail.html | 4 小时 | ⬜ 待开发 |
| M11 | 解决方案列表页 | solutions-index.html | 2 小时 | ⬜ 待开发 |
| M12 | 解决方案详情页 | solution-detail.html | 3 小时 | ⬜ 待开发 |
| M13 | 技术支持列表页 | support-index.html | 2 小时 | ⬜ 待开发 |
| M14 | 技术支持详情页 | support-detail.html | 3 小时 | ⬜ 待开发 |
| M15 | 新闻列表页 | news-list.html | 2 小时 | ⬜ 待开发 |
| M16 | 新闻详情页 | news-detail.html | 3 小时 | ⬜ 待开发 |
| M17 | 关于我们页 | about.html | 2 小时 | ⬜ 待开发 |
| M18 | 联系我们页 | contact.html | 2 小时 | ⬜ 待开发 |
| M19 | SVG 图标集 | /assets/icons/ | 3 小时 | ⬜ 待开发 |
| M20 | Node.js 生成脚本 | scripts/generate.js | 4 小时 | ⬜ 待开发 |
| M21 | Infineon JSON 数据 | /data/infineon/ | 3 小时 | ⬜ 待开发 |
| M22 | Tab 二级导航组件 | brand-tab-nav.html | 1 小时 | ⬜ 待开发 |
| M23 | 右侧悬浮联系方式 | floating-contact.html | 0.5 小时 | ⬜ 待开发 |
| M24 | FAE 作者简介页 | team-member.html | 2 小时 | ⬜ 待开发 |
| M25 | 标签聚合页 | tag-archive.html | 2 小时 | ⬜ 待开发 |

---

## 第一阶段：项目初始化

### Task 1: 创建 Git 工作树分支

**Files:**
- 工作区：`C:\Users\ymlt\Desktop\3\`

**Step 1: 调用 using-git-worktrees skill**

在当前工作区创建独立的开发分支：

```bash
# 使用 skill 创建 git worktree
# 分支名：feature/elec-distributor-website
```

**Step 2: 验证分支创建成功**

```bash
git branch
# 预期输出：显示当前在 feature/elec-distributor-website 分支
```

**Step 3: 提交工作树创建**

```bash
git add .
git commit -m "chore: create worktree for elec-distributor project"
```

**检查点:**
- ✅ Git 工作树创建成功
- ✅ 分支名：feature/elec-distributor-website
- ✅ 工作区目录：C:\Users\ymlt\Desktop\3\

---

## 第二阶段：基础结构和样式

### Task 2: 创建项目目录结构

**Files:**
- Create: `C:\Users\ymlt\Desktop\3\index.html`
- Create: `C:\Users\ymlt\Desktop\3\style.css`
- Create: `C:\Users\ymlt\Desktop\3\assets\css\style.css`
- Create: `C:\Users\ymlt\Desktop\3\assets\js\main.js`
- Create: `C:\Users\ymlt\Desktop\3\assets\images\`
- Create: `C:\Users\ymlt\Desktop\3\assets\icons\`
- Create: `C:\Users\ymlt\Desktop\3\assets\brands\`
- Create: `C:\Users\ymlt\Desktop\3\templates\`
- Create: `C:\Users\ymlt\Desktop\3\data\infineon\`
- Create: `C:\Users\ymlt\Desktop\3\scripts\`

**Step 1: 创建目录结构**

```bash
cd C:\Users\ymlt\Desktop\3
mkdir -p assets/css assets/js assets/images assets/icons assets/brands
mkdir -p templates
mkdir -p data/infineon
mkdir -p scripts
mkdir -p output
```

**Step 2: 验证目录创建**

```bash
dir /s /b
# 预期输出：显示所有创建的目录
```

**Step 3: 创建 .gitignore 文件**

```bash
echo output/ >> .gitignore
echo node_modules/ >> .gitignore
echo .DS_Store >> .gitignore
```

**Step 4: 提交**

```bash
git add .
git commit -m "chore: create project directory structure"
```

**检查点:**
- ✅ 所有目录创建成功
- ✅ .gitignore 配置完成
- ✅ 目录结构符合 PRD 要求

---

### Task 3: 创建全局样式文件 (style.css)

**Files:**
- Create: `C:\Users\ymlt\Desktop\3\assets\css\style.css`

**Step 1: 创建 CSS 变量定义**

```css
/* style.css - Global Styles */
/* 电子元件代理商品牌子目录网站 */

:root {
  /* 颜色系统 */
  /* 主色调 - 科技蓝 */
  --primary-blue: #0072ce;
  --primary-blue-dark: #005ba3;
  --primary-blue-light: #3395db;
  
  /* CTA 按钮色 - 橙色 */
  --cta-orange: #ff6b00;
  --cta-orange-dark: #cc5500;
  --cta-orange-light: #ff8533;
  
  /* 状态色 */
  --success-green: #28a745;
  --success-green-dark: #1e7e34;
  --warning-orange: #ffc107;
  --warning-orange-dark: #d39e00;
  
  /* 中性色 */
  --bg-white: #ffffff;
  --bg-light: #f8f9fa;
  --bg-gray: #e9ecef;
  
  --text-dark: #333333;
  --text-medium: #666666;
  --text-light: #999999;
  
  --border-light: #e0e0e0;
  --border-medium: #cccccc;
  --border-dark: #999999;
  
  /* 圆角系统 */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* 阴影系统 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  --shadow-hover: 0 6px 12px rgba(0, 0, 0, 0.1);
  --shadow-focus: 0 0 0 3px rgba(0, 114, 206, 0.2);
  
  /* 间距系统 */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  
  /* 字体系统 */
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
}
```

**Step 2: 创建基础样式重置**

```css
/* 基础重置 */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family-base);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-dark);
  background-color: var(--bg-white);
}

/* 图片响应式 */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* 链接样式 */
a {
  color: var(--primary-blue);
  text-decoration: none;
  transition: color 0.2s ease-out;
}

a:hover {
  color: var(--primary-blue-dark);
}

/* 按钮基础样式 */
button {
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  border: none;
  background: none;
}
```

**Step 3: 创建排版样式**

```css
/* 排版系统 */
h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: var(--space-4);
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }

p {
  margin-bottom: var(--space-4);
}

ul, ol {
  margin-bottom: var(--space-4);
  padding-left: var(--space-6);
}
```

**Step 4: 提交**

```bash
git add assets/css/style.css
git commit -m "feat: create global CSS variables and base styles"
```

**检查点:**
- ✅ CSS 变量定义完整
- ✅ 基础重置样式完成
- ✅ 排版系统建立
- ✅ 符合 DESIGN.md 设计规范

---

### Task 4: 创建响应式和工具类样式

**Files:**
- Modify: `C:\Users\ymlt\Desktop\3\assets\css\style.css`

**Step 1: 添加响应式断点**

```css
/* 响应式断点 */
@media (max-width: 767px) {
  :root {
    font-size: 16px; /* 避免 iOS 自动缩放 */
  }
  
  h1 { font-size: 2rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.25rem; }
}

@media (min-width: 768px) and (max-width: 1199px) {
  /* 平板样式 */
}

@media (min-width: 1200px) {
  /* 桌面样式 */
}
```

**Step 2: 添加工具类**

```css
/* 工具类 */
.container {
  width: 100%;
  max-width: 1319px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-6);
  padding-right: var(--space-6);
}

@media (max-width: 767px) {
  .container {
    padding-left: var(--space-4);
    padding-right: var(--space-4);
  }
}

/* Flex 工具 */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }

/* Grid 工具 */
.grid { display: grid; }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* 间距工具 */
.mt-4 { margin-top: var(--space-4); }
.mb-4 { margin-bottom: var(--space-4); }
.p-4 { padding: var(--space-4); }

/* 文本工具 */
.text-center { text-align: center; }
.text-sm { font-size: 0.875rem; }
.text-lg { font-size: 1.25rem; }
.font-bold { font-weight: 700; }
```

**Step 3: 添加可访问性样式**

```css
/* 可访问性 */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

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
  padding: var(--space-2) var(--space-4);
  background: var(--primary-blue);
  color: white;
}

.skip-link:focus {
  top: 0;
}

/* 减少动画 */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Step 4: 提交**

```bash
git add assets/css/style.css
git commit -m "feat: add responsive breakpoints and utility classes"
```

**检查点:**
- ✅ 响应式断点配置
- ✅ 工具类完整
- ✅ 可访问性样式实现
- ✅ 符合 WCAG AA 标准

---

## 第三阶段：核心组件开发

### Task 5: 创建导航栏组件 (nav.html)

**Files:**
- Create: `C:\Users\ymlt\Desktop\3\templates\components\nav.html`
- Create: `C:\Users\ymlt\Desktop\3\assets\js\nav.js`

**Step 1: 创建导航栏 HTML 结构**

```html
<!-- templates/components/nav.html -->
<header class="navbar" id="navbar">
  <div class="container">
    <div class="navbar-brand">
      <a href="/" class="logo-link">
        <img src="/assets/images/logo.svg" alt="LiTong Electronics" class="logo">
        <span class="brand-tagline">Top 8 Electronic Component Distributor in China</span>
      </a>
    </div>
    
    <nav class="navbar-menu" id="navbar-menu">
      <a href="/" class="nav-item">Home</a>
      <a href="/brands/" class="nav-item">Brands</a>
      <a href="/news/" class="nav-item">News</a>
      <a href="/about/" class="nav-item">About Us</a>
    </nav>
    
    <button class="navbar-toggle" id="navbar-toggle" aria-label="Toggle menu">
      <span class="hamburger"></span>
    </button>
  </div>
</header>
```

**Step 2: 添加导航栏 CSS 样式**

```css
/* 导航栏样式 */
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-sm);
  border-bottom: 1px solid var(--border-light);
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.navbar-brand .logo-link {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.logo {
  height: 40px;
  width: auto;
}

.brand-tagline {
  font-size: 0.75rem;
  color: var(--text-medium);
  font-weight: 500;
}

.navbar-menu {
  display: flex;
  gap: var(--space-8);
}

.nav-item {
  color: var(--text-dark);
  font-weight: 500;
  padding: var(--space-2) 0;
  position: relative;
  transition: color 0.2s ease-out;
}

.nav-item:hover {
  color: var(--primary-blue);
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-blue);
  transform: scaleX(0);
  transition: transform 0.2s ease-out;
}

.nav-item:hover::after {
  transform: scaleX(1);
}

.navbar-toggle {
  display: none;
  padding: var(--space-2);
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-dark);
  position: relative;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--text-dark);
  left: 0;
}

.hamburger::before { top: -8px; }
.hamburger::after { top: 8px; }

/* 移动端导航 */
@media (max-width: 767px) {
  .navbar .container {
    height: 56px;
  }
  
  .brand-tagline {
    display: none;
  }
  
  .navbar-menu {
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: var(--space-4);
    box-shadow: var(--shadow-lg);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-out;
  }
  
  .navbar-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .navbar-toggle {
    display: block;
  }
}
```

**Step 3: 创建导航栏 JavaScript**

```javascript
// assets/js/nav.js
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');
  
  // 移动端菜单切换
  if (navbarToggle) {
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
      this.setAttribute('aria-expanded', 
        navbarMenu.classList.contains('active'));
    });
  }
  
  // 滚动时添加阴影
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
      navbar.style.boxShadow = 'var(--shadow-sm)';
    }
    
    lastScroll = currentScroll;
  });
});
```

**Step 4: 测试导航栏**

```bash
# 打开 index.html 在浏览器中测试
# 测试桌面端菜单显示
# 测试移动端汉堡菜单
# 测试滚动效果
```

**Step 5: 提交**

```bash
git add templates/components/nav.html assets/js/nav.js assets/css/style.css
git commit -m "feat: create responsive navigation bar component"
```

**检查点:**
- ✅ 导航栏 HTML 结构完整
- ✅ 响应式样式实现
- ✅ 移动端汉堡菜单功能
- ✅ 滚动效果
- ✅ 可访问性 (aria 标签)

**审查测试:**
- [ ] 代码审查：命名规范、结构清晰
- [ ] 样式审查：符合 DESIGN.md 规范
- [ ] 功能测试：桌面端/移动端菜单正常
- [ ] Playwright 截图验证

---

### Task 5B: 创建页脚组件 (footer.html)

**Files:**
- Create: `C:\Users\ymlt\Desktop\3\templates\components\footer.html`

**Step 1: 创建页脚 HTML 结构**

```html
<!-- templates/components/footer.html -->
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-section">
        <h4>About LiTong</h4>
        <p>Leading electronic components distributor with over 20 years of experience.</p>
      </div>
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/brands/">Brands</a></li>
          <li><a href="/news/">News</a></li>
          <li><a href="/about/">About Us</a></li>
          <li><a href="/about/contact/">Contact</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Contact Info</h4>
        <ul class="contact-list">
          <li>Email: info@ic-distributor.com</li>
          <li>WhatsApp: +86 15013702378</li>
          <li>WeChat: +86 18612518271</li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Follow Us</h4>
        <div class="social-links">
          <a href="#" aria-label="LinkedIn"><svg><!-- LinkedIn icon --></svg></a>
          <a href="#" aria-label="Twitter"><svg><!-- Twitter icon --></svg></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 LiTong Electronics. All rights reserved.</p>
    </div>
  </div>
</footer>
```

**Step 2: 添加页脚 CSS 样式**

```css
/* 页脚样式 */
.site-footer {
  background: var(--text-dark);
  color: #ffffff;
  padding: var(--space-16) 0 var(--space-8);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8);
  margin-bottom: var(--space-8);
}

.footer-section h4 {
  color: #ffffff;
  margin-bottom: var(--space-4);
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: var(--space-2);
}

.footer-section a {
  color: rgba(255, 255, 255, 0.8);
}

.footer-section a:hover {
  color: #ffffff;
}

.contact-list li {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
}

.social-links {
  display: flex;
  gap: var(--space-4);
}

.social-links a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  color: #ffffff;
  transition: all 0.2s ease-out;
}

.social-links a:hover {
  background: var(--primary-blue);
  transform: translateY(-2px);
}

.footer-bottom {
  padding-top: var(--space-8);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}

/* 响应式 */
@media (max-width: 1023px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  
  .site-footer {
    padding: var(--space-8) 0 var(--space-4);
  }
}
```

**Step 3: 提交**

```bash
git add templates/components/footer.html assets/css/style.css
git commit -m "feat: create footer component"
```

**检查点:**
- ✅ 页脚 HTML 结构完整
- ✅ 4 列布局
- ✅ 响应式设计
- ✅ 社交链接图标

**审查测试:**
- [ ] 代码审查：命名规范、结构清晰
- [ ] 样式审查：符合 DESIGN.md 规范
- [ ] 响应式测试：桌面/平板/移动端
- [ ] Playwright 截图验证

---

### Task 5C: 创建面包屑导航组件 (breadcrumb.html)

**Files:**
- Create: `C:\Users\ymlt\Desktop\3\templates\components\breadcrumb.html`

**Step 1: 创建面包屑 HTML 结构**

```html
<!-- templates/components/breadcrumb.html -->
<nav aria-label="Breadcrumb" class="breadcrumb">
  <div class="container">
    <ol>
      <li><a href="/">Home</a></li>
      <li><a href="/brands/">Brands</a></li>
      <li><a href="/infineon/">Infineon</a></li>
      <li aria-current="page">Products</li>
    </ol>
  </div>
</nav>
```

**Step 2: 添加面包屑 CSS 样式**

```css
/* 面包屑导航 */
.breadcrumb {
  padding: var(--space-4) 0;
  background: var(--bg-light);
  border-bottom: 1px solid var(--border-light);
}

.breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumb li {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: var(--text-medium);
}

.breadcrumb li:not(:last-child)::after {
  content: '/';
  margin: 0 var(--space-2);
  color: var(--text-light);
}

.breadcrumb a {
  color: var(--primary-blue);
  text-decoration: none;
  transition: color 0.2s ease-out;
}

.breadcrumb a:hover {
  text-decoration: underline;
  color: var(--primary-blue-dark);
}

.breadcrumb li[aria-current="page"] {
  color: var(--text-dark);
  font-weight: 500;
}
```

**Step 3: 提交**

```bash
git add templates/components/breadcrumb.html assets/css/style.css
git commit -m "feat: create breadcrumb navigation component"
```

**检查点:**
- ✅ 面包屑 HTML 结构
- ✅ ARIA 标签 (aria-current, aria-label)
- ✅ 分隔符样式
- ✅ 当前页高亮

**审查测试:**
- [ ] 代码审查：ARIA 标签完整
- [ ] 样式审查：符合 DESIGN.md 规范
- [ ] 可访问性测试：键盘导航
- [ ] Playwright 截图验证

---

### Task 5D: 创建右侧悬浮联系方式组件

**Files:**
- Create: `C:\Users\ymlt\Desktop\3\templates\components\floating-contact.html`

**Step 1: 创建 HTML 结构**

```html
<!-- templates/components/floating-contact.html -->
<div class="floating-contact">
  <a href="https://wa.me/8615013702378" class="floating-btn whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </a>
  <a href="weixin://dl/chat?18612518271" class="floating-btn wechat" aria-label="WeChat">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-.5-1-.5-2 1-3a2.5 2.5 0 015 0c0 .5-.5 1-1 2 .5 0 1 .5 1 1a2.5 2.5 0 01-2.5 2.5c-.5 0-1-.5-1-1l-.5.5c.5 1 1.5 2 3 2a4.5 4.5 0 004.5-4.5c0-2.485-2.015-4.5-4.5-4.5S10 6.515 10 9c0 .5.5 1 1 1-.5 1-1.5 2-3 2a2.5 2.5 0 010-5c.5 0 1 .5 1 1 .5 0 1-.5 1-1a4.5 4.5 0 00-9 0c0 2.485 2.015 4.5 4.5 4.5z"/>
    </svg>
  </a>
</div>
```

**Step 2: 添加 CSS 样式**

```css
/* 右侧悬浮联系方式 */
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

**Step 3: 提交**

```bash
git add templates/components/floating-contact.html assets/css/style.css
git commit -m "feat: create floating contact buttons component"
```

**检查点:**
- ✅ WhatsApp 和 WeChat 按钮
- ✅ 固定定位 (right: 20px, bottom: 100px)
- ✅ 响应式适配
- ✅ ARIA 标签

**审查测试:**
- [ ] 代码审查：链接安全 (target="_blank" rel="noopener")
- [ ] 样式审查：符合 DESIGN.md 规范
- [ ] 功能测试：点击跳转正确
- [ ] Playwright 截图验证

---

### Task 5E: 创建 404 页面

**Files:**
- Create: `C:\Users\ymlt\Desktop\3\404.html`

**Step 1: 创建 404 页面 HTML**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found | LiTong Electronics</title>
  <meta name="description" content="The page you're looking for doesn't exist or has been moved.">
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
  <!-- 导航栏 -->
  <!--#include virtual="/templates/components/nav.html" -->
  
  <main class="error-page">
    <div class="container">
      <div class="error-content">
        <div class="error-code">404</div>
        <h1 class="error-title">Page Not Found</h1>
        <p class="error-description">
          The page you're looking for doesn't exist or has been moved.
          Please check the URL or return to the homepage.
        </p>
        <div class="error-actions">
          <a href="/" class="btn-primary">Back to Home</a>
          <a href="/brands/" class="btn-secondary">Browse Brands</a>
        </div>
      </div>
    </div>
  </main>
  
  <!-- 页脚 -->
  <!--#include virtual="/templates/components/footer.html" -->
  
  <script src="/assets/js/main.js"></script>
</body>
</html>
```

**Step 2: 添加 404 页面 CSS 样式**

```css
/* 404 页面样式 */
.error-page {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-16) 0;
}

.error-content {
  max-width: 600px;
  margin: 0 auto;
}

.error-code {
  font-size: 8rem;
  font-weight: 700;
  color: var(--primary-blue);
  line-height: 1;
  margin-bottom: var(--space-4);
}

.error-title {
  font-size: 2rem;
  margin-bottom: var(--space-4);
}

.error-description {
  color: var(--text-medium);
  font-size: 1.125rem;
  margin-bottom: var(--space-8);
}

.error-actions {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
}

/* 响应式 */
@media (max-width: 767px) {
  .error-code {
    font-size: 5rem;
  }
  
  .error-title {
    font-size: 1.5rem;
  }
  
  .error-actions {
    flex-direction: column;
  }
}
```

**Step 3: 提交**

```bash
git add 404.html assets/css/style.css
git commit -m "feat: create custom 404 error page"
```

**检查点:**
- ✅ 404 错误代码显示
- ✅ 友好的错误提示
- ✅ 返回首页和品牌列表链接
- ✅ 响应式设计

**审查测试:**
- [ ] 代码审查：HTML 结构语义化
- [ ] 样式审查：符合 DESIGN.md 规范
- [ ] 功能测试：链接正确
- [ ] Playwright 截图验证

---

## 第四阶段：页面模板开发

### Task 6: 创建首页 (index.html)

**Files:**
- Create: `C:\Users\ymlt\Desktop\3\index.html`
- Create: `C:\Users\ymlt\Desktop\3\templates\pages\home.html`

**Step 1: 创建首页 HTML 结构**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Electronic Components Core Distributor | LiTong Electronics</title>
  <meta name="description" content="LiTong is a core distributor of electronic components, providing genuine products, in-stock supply, technical support, and competitive pricing.">
  <meta name="keywords" content="LiTong, electronic components distributor, semiconductor, IC chips">
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
  <!-- 导航栏 -->
  <!--#include virtual="/templates/components/nav.html" -->
  
  <main>
    <!-- Hero Banner -->
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
    
    <!-- Why Choose Us -->
    <section class="why-choose-us section">
      <div class="container">
        <h2 class="section-title">Why Choose LiTong</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg><!-- 库存图标 --></svg>
            </div>
            <h3>Deep Inventory</h3>
            <p>Millions of components in stock for immediate shipment</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg><!-- 技术支持图标 --></svg>
            </div>
            <h3>Expert Support</h3>
            <p>Experienced FAE team for technical consultation</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg><!-- 物流图标 --></svg>
            </div>
            <h3>Fast Logistics</h3>
            <p>Global shipping network with tracking</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg><!-- 价格图标 --></svg>
            </div>
            <h3>Competitive Pricing</h3>
            <p>Best value for genuine components</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Featured Brands -->
    <section class="featured-brands section">
      <div class="container">
        <h2 class="section-title">Featured Brands</h2>
        <div class="brands-grid">
          <!-- 品牌卡片 -->
        </div>
      </div>
    </section>
    
    <!-- Latest News -->
    <section class="latest-news section">
      <div class="container">
        <h2 class="section-title">Latest News</h2>
        <div class="news-grid">
          <!-- 新闻卡片 -->
        </div>
      </div>
    </section>
    
    <!-- Final CTA -->
    <section class="final-cta section">
      <div class="container">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today for quotes and technical support</p>
        <a href="/about/contact/" class="btn-primary btn-large">Contact Us Now</a>
      </div>
    </section>
  </main>
  
  <!-- 页脚 -->
  <!--#include virtual="/templates/components/footer.html" -->
  
  <!-- 悬浮联系方式 -->
  <!--#include virtual="/templates/components/floating-contact.html" -->
  
  <script src="/assets/js/main.js"></script>
</body>
</html>
```

**Step 2: 添加首页 CSS 样式**

```css
/* Hero Banner */
.hero-banner {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
  overflow: hidden;
}

.hero-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cpath d='M0,0 L1000,1000 M1000,0 L0,1000' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/svg%3E");
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 var(--space-6);
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: var(--space-6);
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255,255,255,0.9);
  margin-bottom: var(--space-8);
}

.hero-cta {
  display: inline-flex;
  gap: var(--space-4);
}

/* Section 通用样式 */
.section {
  padding: var(--space-16) 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: var(--space-12);
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.feature-card {
  text-align: center;
  padding: var(--space-6);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--space-4);
  color: var(--primary-blue);
}

/* 响应式 */
@media (max-width: 1023px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .hero-banner {
    height: 400px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-cta {
    flex-direction: column;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
```

**Step 3: 创建按钮样式**

```css
/* 按钮样式 */
.btn-primary {
  display: inline-block;
  background: var(--cta-orange);
  color: #ffffff;
  padding: 12px 32px;
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: 1rem;
  min-height: 44px;
  transition: all 0.2s ease-out;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--cta-orange-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

.btn-secondary {
  display: inline-block;
  background: transparent;
  color: var(--primary-blue);
  padding: 10px 30px;
  border: 2px solid var(--primary-blue);
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: 1rem;
  min-height: 44px;
  transition: all 0.2s ease-out;
}

.btn-secondary:hover {
  background: rgba(0, 114, 206, 0.05);
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.btn-large {
  padding: 16px 48px;
  font-size: 1.125rem;
}
```

**Step 4: 提交**

```bash
git add index.html templates/pages/home.html assets/css/style.css
git commit -m "feat: create homepage with hero banner and sections"
```

**检查点:**
- ✅ Hero Banner 完整
- ✅ Why Choose Us 模块
- ✅ Featured Brands 模块
- ✅ Latest News 模块
- ✅ Final CTA 模块
- ✅ 响应式设计

---

## 第五阶段：品牌子目录网站开发

### Task 7: 创建品牌 Tab 二级导航组件

**Files:**
- Create: `C:\Users\ymlt\Desktop\3\templates\components\brand-tab-nav.html`

**Step 1: 创建 Tab 导航 HTML**

```html
<!-- templates/components/brand-tab-nav.html -->
<nav class="brand-tab-nav" aria-label="Brand navigation">
  <div class="container">
    <ul class="tab-list">
      <li><a href="/infineon/" class="tab-item{{#isActive}} active{{/isActive}}">About Brand</a></li>
      <li><a href="/infineon/products/" class="tab-item{{#isActive}} active{{/isActive}}">Products</a></li>
      <li><a href="/infineon/solutions/" class="tab-item{{#isActive}} active{{/isActive}}">Solutions</a></li>
      <li><a href="/infineon/support/" class="tab-item{{#isActive}} active{{/isActive}}">Support</a></li>
    </ul>
  </div>
</nav>
```

**Step 2: 添加 Tab 导航 CSS**

```css
/* 品牌 Tab 二级导航 */
.brand-tab-nav {
  background: var(--bg-light);
  border-bottom: 1px solid var(--border-light);
}

.brand-tab-nav .container {
  display: flex;
}

.tab-list {
  display: flex;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.tab-item {
  display: block;
  padding: 16px 24px;
  color: var(--text-medium);
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap;
  border-bottom: 3px solid transparent;
  transition: all 0.2s ease-out;
}

.tab-item:hover {
  color: var(--primary-blue);
  background: rgba(0, 114, 206, 0.05);
}

.tab-item.active {
  color: var(--primary-blue);
  border-bottom-color: var(--cta-orange);
}

/* 移动端适配 */
@media (max-width: 767px) {
  .tab-item {
    padding: 14px 16px;
    font-size: 14px;
  }
}
```

**Step 3: 提交**

```bash
git add templates/components/brand-tab-nav.html assets/css/style.css
git commit -m "feat: create brand tab secondary navigation component"
```

**检查点:**
- ✅ Tab 导航 HTML 结构
- ✅ 激活状态样式
- ✅ 响应式横向滚动
- ✅ 符合 PRD 要求

---

## 第六阶段：Node.js 生成脚本

### Task 8: 创建 Node.js 批量生成脚本

**Files:**
- Create: `C:\Users\ymlt\Desktop\3\scripts\generate.js`
- Create: `C:\Users\ymlt\Desktop\3\package.json`

**Step 1: 初始化 package.json**

```json
{
  "name": "elec-distributor-site",
  "version": "1.0.0",
  "description": "Electronic Components Distributor Website Generator",
  "scripts": {
    "generate": "node scripts/generate.js",
    "generate:brand": "node scripts/generate.js --brand",
    "generate:all": "node scripts/generate.js --all"
  },
  "dependencies": {
    "ejs": "^3.1.9"
  }
}
```

**Step 2: 创建生成脚本主文件**

```javascript
// scripts/generate.js
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const config = {
  inputDir: path.join(__dirname, '..', 'templates'),
  outputDir: path.join(__dirname, '..', 'output'),
  dataDir: path.join(__dirname, '..', 'data')
};

// 读取 JSON 数据
function loadData(brand) {
  const dataPath = path.join(config.dataDir, brand);
  return {
    brand: JSON.parse(fs.readFileSync(path.join(dataPath, 'brand.json'), 'utf8')),
    products: JSON.parse(fs.readFileSync(path.join(dataPath, 'products.json'), 'utf8')),
    solutions: JSON.parse(fs.readFileSync(path.join(dataPath, 'solutions.json'), 'utf8')),
    support: JSON.parse(fs.readFileSync(path.join(dataPath, 'support.json'), 'utf8')),
    news: JSON.parse(fs.readFileSync(path.join(dataPath, 'news.json'), 'utf8'))
  };
}

// 渲染模板
function renderTemplate(templatePath, data) {
  const template = fs.readFileSync(templatePath, 'utf8');
  return ejs.render(template, data);
}

// 生成页面
function generatePage(brand, pageType) {
  const data = loadData(brand);
  const templatePath = path.join(config.inputDir, 'pages', `${pageType}.html`);
  const output = renderTemplate(templatePath, { ...data, brand });
  
  const outputPath = path.join(config.outputDir, brand, `${pageType}.html`);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, output, 'utf8');
  
  console.log(`Generated: ${outputPath}`);
}

// 主函数
function main() {
  const args = process.argv.slice(2);
  const brand = args.find(arg => !arg.startsWith('--'));
  
  if (args.includes('--all')) {
    // 生成所有品牌
    const brands = fs.readdirSync(config.dataDir);
    brands.forEach(brand => {
      generateBrand(brand);
    });
  } else if (brand) {
    // 生成指定品牌
    generateBrand(brand);
  } else {
    console.log('Usage: node generate.js [brand] [--all]');
  }
}

function generateBrand(brand) {
  const pages = ['index', 'products-index', 'product-category', 'product-detail'];
  pages.forEach(page => {
    generatePage(brand, page);
  });
}

main();
```

**Step 3: 安装依赖**

```bash
cd C:\Users\ymlt\Desktop\3
npm install
```

**Step 4: 测试生成脚本**

```bash
npm run generate:brand infineon
# 预期输出：Generated: output/infineon/index.html
```

**Step 5: 提交**

```bash
git add package.json scripts/generate.js
git commit -m "feat: create Node.js batch generation script"
```

**检查点:**
- ✅ package.json 配置
- ✅ 生成脚本功能完整
- ✅ EJS 模板引擎集成
- ✅ 命令行参数支持

---

## 第七阶段：JSON 数据创建

### Task 9: 创建 Infineon 品牌 JSON 数据

**Files:**
- Create: `C:\Users\ymlt\Desktop\3\data\infineon\brand.json`
- Create: `C:\Users\ymlt\Desktop\3\data\infineon\products.json`
- Create: `C:\Users\ymlt\Desktop\3\data\infineon\solutions.json`
- Create: `C:\Users\ymlt\Desktop\3\data\infineon\support.json`
- Create: `C:\Users\ymlt\Desktop\3\data\infineon\news.json`

**Step 1: 创建 brand.json**

```json
{
  "name": "Infineon",
  "displayName": "Infineon Technologies",
  "logo": "/assets/brands/infineon/logo.svg",
  "description": "Infineon Technologies is a leading global semiconductor company specializing in power systems, IoT, and automotive solutions. With over 20 years of innovation, Infineon delivers cutting-edge products for energy efficiency, mobility, and security.",
  "coreProducts": ["IGBT", "MOSFET", "MCU", "Sensor", "Power Management"],
  "industries": ["Automotive", "Industrial", "Consumer", "IoT"],
  "certifications": ["ISO 9001", "ISO 14001", "IATF 16949"],
  "yearFounded": 1999,
  "headquarters": "Neubiberg, Germany",
  "website": "https://www.infineon.com"
}
```

**Step 2: 创建 products.json**

```json
{
  "categories": [
    {
      "id": "mcu",
      "name": "MCU Microcontrollers",
      "description": "Infineon AURIX, XMC, PSoC microcontroller families for automotive and industrial applications",
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
    },
    {
      "id": "igbt",
      "name": "IGBT Modules",
      "description": "High-performance IGBT modules for power conversion and motor control",
      "icon": "igbt-icon.svg",
      "series": ["EconoDUAL™", "PrimePACK™", "IHV"],
      "parameters": ["Voltage", "Current", "Package", "Vce(sat)"],
      "products": [
        {
          "partNumber": "FF300R12ME4",
          "series": "EconoDUAL™",
          "voltage": "1200V",
          "current": "300A",
          "package": "EconoDUAL 3",
          "vceSat": "1.75V"
        }
      ]
    }
  ]
}
```

**Step 3: 创建 solutions.json**

```json
{
  "solutions": [
    {
      "id": "ev-charger",
      "title": "EV Charger Solution",
      "industry": "Automotive",
      "blockDiagram": "/assets/solutions/ev-charger-diagram.svg",
      "description": "Complete powertrain solution for electric vehicle chargers with high efficiency and compact design",
      "coreAdvantages": ["High Efficiency", "Compact Design", "Fast Charging"],
      "bomList": [
        {
          "partNumber": "FF300R12ME4",
          "description": "IGBT Module, 1200V, 300A",
          "link": "/infineon/products/ff300r12me4.html",
          "quantity": 2
        }
      ],
      "applications": ["EV Charging Station", "Industrial Power"],
      "technicalSpecs": {
        "inputVoltage": "400VAC",
        "outputPower": "50kW"
      }
    }
  ]
}
```

**Step 4: 创建 support.json**

```json
{
  "articles": [
    {
      "id": "how-to-select-mcu",
      "title": "How to Select the Right Infineon MCU for Your Project",
      "category": "guides",
      "tags": ["MCU", "AURIX", "Selection Guide"],
      "author": {
        "name": "John Chen",
        "title": "Senior FAE",
        "avatar": "/assets/team/john-chen.jpg"
      },
      "publishDate": "2026-03-15",
      "content": "...",
      "relatedProducts": ["TC399XX", "XMC4700"],
      "relatedArticles": ["aurix-getting-started", "psoc-architecture"]
    }
  ]
}
```

**Step 5: 创建 news.json**

```json
{
  "articles": [
    {
      "id": "infineon-new-igbt-2026",
      "title": "Infineon Launches Next-Generation IGBT7 Technology",
      "category": "industry",
      "publishDate": "2026-03-10",
      "author": "LiTong Editorial Team",
      "summary": "Infineon introduces IGBT7 with improved efficiency and lower losses",
      "content": "...",
      "source": "Infineon Press Release",
      "relatedProducts": ["IGBT7 Module"]
    }
  ]
}
```

**Step 6: 验证 JSON 格式**

```bash
# 使用 node 验证 JSON
node -e "console.log(JSON.parse(require('fs').readFileSync('data/infineon/brand.json')))"
```

**Step 7: 提交**

```bash
git add data/infineon/*.json
git commit -m "feat: create Infineon brand JSON data files"
```

**检查点:**
- ✅ brand.json 完整
- ✅ products.json 包含分类和产品
- ✅ solutions.json 包含 BOM 清单
- ✅ support.json 包含技术文章
- ✅ news.json 包含新闻
- ✅ JSON 格式验证通过

---

## 第八阶段：集成测试

### Task 10: Playwright 截图验证

**Files:**
- Create: `C:\Users\ymlt\Desktop\3\tests\visual.spec.js`

**Step 1: 创建 Playwright 测试脚本**

```javascript
// tests/visual.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Visual Regression Tests', () => {
  test('homepage should render correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true
    });
  });
  
  test('brands page should render correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/brands/');
    await expect(page).toHaveScreenshot('brands-page.png', {
      fullPage: true
    });
  });
  
  test('product detail page should render correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/infineon/products/tc399xx.html');
    await expect(page).toHaveScreenshot('product-detail.png', {
      fullPage: true
    });
  });
});
```

**Step 2: 运行 Playwright 测试**

```bash
npx playwright test
# 预期输出：所有测试通过
```

**Step 3: 检查截图**

```bash
# 查看 tests/screenshots/ 目录
# 对照 PRD 检查布局是否符合
```

**Step 4: 提交**

```bash
git add tests/visual.spec.js
git commit -m "test: add Playwright visual regression tests"
```

**检查点:**
- ✅ Playwright 测试配置
- ✅ 截图测试通过
- ✅ 布局符合 PRD 要求

---

## 第九阶段：SEO 优化

### Task 11: 生成 sitemap.xml

**Files:**
- Create: `C:\Users\ymlt\Desktop\3\scripts\generate-sitemap.js`

**Step 1: 创建 sitemap 生成脚本**

```javascript
// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://ic-distributor.com';

function generateSitemap() {
  const urls = [
    { loc: '/', changefreq: 'daily', priority: '1.0' },
    { loc: '/brands/', changefreq: 'weekly', priority: '0.9' },
    { loc: '/news/', changefreq: 'daily', priority: '0.8' },
    { loc: '/about/', changefreq: 'monthly', priority: '0.7' },
    { loc: '/about/contact/', changefreq: 'monthly', priority: '0.6' }
  ];
  
  // 添加品牌子目录页面
  const brands = fs.readdirSync(path.join(__dirname, '..', 'data'));
  brands.forEach(brand => {
    urls.push({ loc: `/${brand}/`, changefreq: 'weekly', priority: '0.8' });
    urls.push({ loc: `/${brand}/products/`, changefreq: 'weekly', priority: '0.7' });
    urls.push({ loc: `/${brand}/solutions/`, changefreq: 'weekly', priority: '0.7' });
    urls.push({ loc: `/${brand}/support/`, changefreq: 'weekly', priority: '0.7' });
  });
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  fs.writeFileSync(path.join(__dirname, '..', 'output', 'sitemap.xml'), xml);
  console.log('Sitemap generated successfully!');
}

generateSitemap();
```

**Step 2: 运行生成脚本**

```bash
node scripts/generate-sitemap.js
# 预期输出：Sitemap generated successfully!
```

**Step 3: 验证 sitemap.xml**

```bash
# 检查 output/sitemap.xml 文件
# 验证 URL 完整性
```

**Step 4: 提交**

```bash
git add scripts/generate-sitemap.js
git commit -m "feat: create sitemap.xml generation script"
```

**检查点:**
- ✅ sitemap.xml 生成
- ✅ 包含所有主站页面
- ✅ 包含所有品牌子目录页面
- ✅ 格式符合 sitemap 标准

---

## 第十阶段：完成前验证

### Task 12: 运行完整验证

**Step 1: 检查所有文件**

```bash
# 检查文件结构
dir /s /b
```

**Step 2: 运行生成脚本**

```bash
npm run generate:all
# 预期输出：所有品牌页面生成成功
```

**Step 3: 验证 SEO**

```bash
# 检查所有页面的 Meta 标签
# 验证 Schema.org 结构化数据
```

**Step 4: 运行 Playwright 测试**

```bash
npx playwright test
# 预期输出：所有测试通过
```

**Step 5: 提交最终版本**

```bash
git add .
git commit -m "chore: final verification and cleanup"
```

**检查点:**
- ✅ 所有文件存在
- ✅ 生成脚本运行成功
- ✅ SEO 优化完成
- ✅ 测试全部通过

---

## 集成测试清单 (20 项)

| 编号 | 测试项目 | 测试方法 | 状态 |
|------|----------|----------|------|
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

---

## 执行选择

**计划已完成并保存到 `C:\Users\ymlt\Desktop\3\IMPLEMENTATION_PLAN.md`**

**两种执行方式可选:**

**1. Subagent-Driven (当前会话)** - 我为每个任务调度新的子代理，在任务之间进行审查，快速迭代
- 使用 `superpowers:subagent-driven-development`
- 留在当前会话
- 每个任务 + 代码审查

**2. Parallel Session (独立会话)** - 在新会话中打开 `executing-plans`，批量执行带检查点
- 在工作区打开新会话
- 使用 `superpowers:executing-plans`

**选择哪种方式？**

---

## 文档更新记录

| 版本 | 日期 | 更新内容 | 作者 |
|------|------|----------|------|
| 1.0 | 2026-03-20 | 初始版本，包含 12 个主要 Task | AI |
| 1.1 | 2026-03-20 | 补充审查测试规则、检查点机制、单元模块审查测试状态列 | AI |
| 1.2 | 2026-03-20 | 添加 Task 5B(页脚组件)、Task 5C(面包屑导航) 及详细步骤 | AI |
| 1.3 | 2026-03-20 | 第三次检查补充：用词规范 (authorized→core)、语言规范、品牌差异化要求、checkpoints.md 文件格式、Task 5D(悬浮联系方式)、Task 5E(404 页面) | AI |

---

**文档结束**
