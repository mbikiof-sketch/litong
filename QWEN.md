# QWEN.md - 项目上下文文档

**项目名称**: Electronic Components Distributor Website (ic-distributor.com)
**项目类型**: 静态网站生成器 (Node.js + EJS)
**创建日期**: 2026 年 3 月 20 日
**最后更新**: 2026 年 3 月 24 日
**当前状态**: ✅ 已完成 34 个页面生成

---

## 1. 项目概述

### 1.1 项目描述
为电子元件代理商 LiTong 创建品牌子目录网站生成系统。使用 `ic-distributor.com/infineon` 的 URL 结构，每个授权代理品牌有独立的子目录网站，包含完整的品牌展示、产品中心、解决方案、技术支持等模块。

### 1.2 核心目标
- 建立专业的品牌子目录网站，提升 Google 搜索排名
- 为每个授权代理品牌创建独立的 SEO 优化页面
- 提供工程师友好的产品选型和技术支持体验
- 通过 Node.js 脚本批量生成静态 HTML 页面

### 1.3 技术栈
| 类别 | 技术 |
|------|------|
| **前端** | HTML5, CSS3, JavaScript (ES6+) |
| **模板引擎** | EJS |
| **构建工具** | Node.js 脚本 |
| **部署平台** | Cloudflare Pages |
| **测试工具** | Playwright MCP |

---

## 2. 项目结构

```
C:\Users\ymlt\Desktop\3\
├── assets/                 # 静态资源
│   ├── brands/            # 品牌 Logo 和图片
│   ├── css/               # 样式文件
│   │   ├── style.css      # 全局样式 (50+ CSS 变量)
│   │   ├── navbar.css     # 导航栏样式
│   │   ├── footer.css     # 页脚样式
│   │   ├── breadcrumb.css # 面包屑导航样式
│   │   ├── brand-tab-nav.css  # 品牌 Tab 二级导航
│   │   └── floating-contact.css # 悬浮联系方式
│   ├── icons/             # SVG 图标
│   ├── images/            # 图片资源
│   └── js/                # JavaScript 文件
│       └── navbar.js      # 导航栏交互
├── data/                  # JSON 数据文件
│   ├── infineon/          # Infineon 品牌数据
│   │   ├── brand.json     # 品牌信息
│   │   ├── products.json  # 产品数据
│   │   ├── solutions.json # 解决方案数据
│   │   ├── support.json   # 技术支持数据
│   │   └── news.json      # 新闻数据
│   └── semikron/          # Semikron 品牌数据
├── templates/             # HTML 模板
│   ├── brands/            # 品牌子目录模板 (12 个)
│   │   ├── brand-about.html       # 品牌关于页
│   │   ├── products-list.html     # 产品列表页
│   │   ├── product-category.html  # 产品分类页
│   │   ├── product-detail.html    # 产品详情页
│   │   ├── solutions-list.html    # 解决方案列表页
│   │   ├── solution-detail.html   # 解决方案详情页
│   │   ├── support.html           # 技术支持列表页
│   │   ├── support-detail.html    # 技术支持详情页
│   │   ├── news-list.html         # 新闻列表页
│   │   ├── news-detail.html       # 新闻详情页
│   │   ├── tag-archive.html       # 标签聚合页
│   │   └── team-member.html       # FAE 作者简介页
│   ├── components/        # 可复用组件 (10 个)
│   │   ├── navbar.html          # 导航栏
│   │   ├── footer.html          # 页脚
│   │   ├── breadcrumb.html      # 面包屑导航
│   │   ├── brand-tab-nav.html   # 品牌 Tab 导航
│   │   └── floating-contact.html # 悬浮联系方式
│   └── pages/             # 主站页面模板
├── scripts/               # Node.js 脚本
│   ├── generate.js        # 主生成脚本
│   ├── inline-components.js # 组件内联脚本
│   └── ...                # 其他辅助脚本
├── output/                # 生成的 HTML 文件 (.gitignore)
├── tests/                 # 测试文件
├── .gitignore
├── package.json
├── PRD.md                 # 产品需求文档 (1006 行)
├── IMPLEMENTATION_PLAN.md # 实施计划 (2228 行)
├── DESIGN.md              # UI/UX 设计文档 (2072 行)
├── CONTENT_PUBLISH_PLAN.md # 内容发布计划
├── checkpoints.md         # 开发检查点记录
└── QWEN.md                # 本文件
```

---

## 3. 构建和运行

### 3.1 安装依赖
```bash
npm install
```

### 3.2 生成命令
```bash
# 显示帮助
npm run generate

# 生成单个品牌
npm run generate:brand infineon

# 生成所有品牌
npm run generate:all
```

### 3.3 输出目录
生成的 HTML 文件输出到 `output/` 目录，可直接部署到 Cloudflare Pages。

---

## 4. 开发规范

### 4.1 用词规范 (重要)
**全站替换规则**: 将所有"authorized"改成"core"

| 原词 | 替换为 | 示例 |
|------|--------|------|
| Authorized Distributor | Core Distributor | "Electronic Components Core Distributor" |
| Authorized Agent | Core Agent | "Infineon Core Agent" |
| authorized | core | "core distributor of electronic components" |

### 4.2 语言规范
- **全站内容**: 使用英文
- **关键词**: 包含英文和中文拼音关键词 (如"英飞凌代理"用于 SEO meta keywords)

### 4.3 品牌差异化
- 每个品牌的产品分类、应用行业、解决方案必须不同
- 避免模板化内容，确保 AI 生成内容独特性
- 防止 SEO 降权

---

## 5. 设计规范

### 5.1 设计风格
- **主风格**: 现代极简主义 (Modern Minimalism)
- **辅助风格**: 科技专业风 (Tech Professional)
- **留白**: 充足间距增强页面呼吸感
- **圆角**: 统一 8px 圆角，组件 12px 圆角
- **阴影**: `box-shadow: 0 4px 6px rgba(0,0,0,0.07)`

### 5.2 颜色系统
```css
:root {
  --primary-blue: #0072ce;      /* 科技蓝 - 主色调 */
  --cta-orange: #ff6b00;        /* 橙色 - CTA 按钮 */
  --success-green: #28a745;     /* 成功/有货状态 */
  --warning-orange: #ffc107;    /* 警告/询价状态 */
  --text-dark: #333333;
  --text-medium: #666666;
  --bg-light: #f8f9fa;
}
```

### 5.3 响应式断点
| 断点 | 宽度 | 设备 |
|------|------|------|
| 移动端 | <768px | 手机 |
| 平板端 | 768px-1199px | 平板 |
| 桌面端 | ≥1200px | 桌面 |

### 5.4 可访问性
- 颜色对比度满足 WCAG AA 标准 (至少 4.5:1)
- 所有交互元素支持 Tab 键导航
- 使用语义化 HTML5 标签
- 为图标、按钮添加 aria-label

---

## 6. SEO 优化规范

### 6.1 Meta 标签
每个页面必须包含：
- `<title>` - 页面标题
- `<meta name="description">` - 页面描述
- `<meta name="keywords">` - 关键词
- Open Graph 标签

### 6.2 Schema.org 结构化数据
| 页面类型 | Schema 类型 |
|----------|-------------|
| 产品详情页 | Product |
| 技术支持文章 | TechArticle |
| 新闻文章 | NewsArticle |
| 解决方案 | Article |
| 关于我们 | Organization |

### 6.3 关键词布局
| 页面类型 | 核心关键词 |
|----------|------------|
| 品牌关于页 | 品牌+distributor, 品牌+distributor+地域 |
| 产品列表页 | 品牌 + 产品类别 |
| 产品详情页 | 具体产品型号 + 参数 |
| 解决方案页 | 品牌 + 行业 + 解决方案 |

---

## 7. 数据格式

### 7.1 品牌数据 (brand.json)
```json
{
  "name": "Infineon",
  "displayName": "Infineon Technologies",
  "logo": "/assets/brands/infineon/logo.svg",
  "description": "Leading semiconductor company...",
  "coreProducts": ["IGBT", "MOSFET", "MCU"],
  "industries": ["Automotive", "Industrial", "Consumer"],
  "certifications": ["ISO 9001", "ISO 14001"],
  "yearFounded": 1999,
  "headquarters": "Neubiberg, Germany",
  "distributorStatus": "Core Distributor"
}
```

### 7.2 产品数据 (products.json)
```json
{
  "categories": [
    {
      "id": "mcu",
      "name": "MCU Microcontrollers",
      "description": "...",
      "series": ["AURIX™", "XMC™"],
      "parameters": ["Architecture", "Flash", "RAM"],
      "products": [
        {
          "partNumber": "TC399XX",
          "series": "AURIX™",
          "architecture": "TriCore",
          "flash": "16MB",
          "stock": "In Stock"
        }
      ]
    }
  ]
}
```

---

## 8. 页面模板清单

### 8.1 主站页面
| 页面 | 文件路径 | 状态 |
|------|----------|------|
| 首页 | /index.html | ✅ |
| 品牌列表页 | /brands/index.html | ✅ |

### 8.2 品牌子目录页面 (Infineon)
| 页面类型 | 模板文件 | 状态 |
|----------|----------|------|
| 品牌关于页 | brand-about.html | ✅ |
| 产品列表页 | products-list.html | ✅ |
| 产品分类页 | product-category.html | ✅ |
| 产品详情页 | product-detail.html | ✅ |
| 解决方案列表页 | solutions-list.html | ✅ |
| 解决方案详情页 | solution-detail.html | ✅ |
| 技术支持列表页 | support.html | ✅ |
| 技术支持详情页 | support-detail.html | ✅ |
| 新闻列表页 | news-list.html | ✅ |
| 新闻详情页 | news-detail.html | ✅ |
| 标签聚合页 | tag-archive.html | ✅ |
| FAE 作者简介页 | team-member.html | ✅ |

---

## 9. 品牌清单

### 已完成
- [x] Infineon (英飞凌) - 模板品牌

### 待开发品牌
| 类别 | 品牌 |
|------|------|
| **功率半导体** | Semikron, Fuji, Mitsubishi, IXYS, Cree, Genesic, Sanrex, PI, Firstack, Bronze |
| **中国/亚洲品牌** | Crmicro, CRRC, Macmic, Starpower, BYD, Yangjie, Inventchip, Silan |
| **被动元件** | LEM, Faratronic, Jianghai, Aishi, Hongfa, Panasonic, Cosmo, Lite-On, Sinofuse, Bussmann, Littelfuse |
| **通用 IC** | TI, ADI, ST, Microchip, Renesas, NXP, Allegro, Espressif, GigaDevice |

---

## 10. 开发流程

### 10.1 单元模块审查
每个模块完成后立即审查：
- 代码质量 (命名、结构、注释)
- 样式符合 DESIGN.md 规范
- 功能完整性
- SEO 优化 (Meta 标签、Schema)
- 可访问性 (ARIA、键盘导航)
- 响应式设计

### 10.2 检查点机制
每个模块审查测试后记录到 `checkpoints.md`：
- 模块名称、测试结果
- 关键状态、结果日志
- 审查结果清单

### 10.3 测试验证
使用 Playwright MCP 进行：
- 样式验证 (截图)
- 布局验证 (对照 PRD)
- 响应式测试 (多尺寸截图)
- 功能交互测试

---

## 11. 重要注意事项

### 11.1 链接规范
- 禁止 404 链接
- 内链建设：BOM 中型号链接到产品详情页
- 上下文链接：技术文章中提到产品时链接到产品页

### 11.2 联系方式
- WhatsApp: +86 15013702378
- WeChat: +86 18612518271
- 展示方式：页面右侧固定悬浮按钮

### 11.3 LOGO 右侧文字
"LiTong Electronics - Top 8 Electronic Component Distributor in China"

### 11.4 品牌子目录 Tab 二级导航
每个品牌子目录网站的所有页面都必须有 Tab 二级导航：
- 关于品牌 (About Brand)
- 产品中心 (Products)
- 解决方案 (Solutions)
- 技术支持 (Support)

---

## 12. 文件说明

### 12.1 核心文档
| 文件 | 说明 | 行数 |
|------|------|------|
| PRD.md | 产品需求文档 | 1006 |
| IMPLEMENTATION_PLAN.md | 实施计划 | 2228 |
| DESIGN.md | UI/UX 设计文档 | 2072 |
| CONTENT_PUBLISH_PLAN.md | 内容发布计划 | ✅ 已完成 34 页 |
| checkpoints.md | 开发检查点记录 | - |
| SEO_OPTIMIZATION_REPORT.md | SEO 优化报告 | ✅ 已完成 |

### 12.2 脚本文件
| 文件 | 说明 |
|------|------|
| generate.js | 主生成脚本 (读取 JSON，渲染 EJS 模板) |
| inline-components.js | 组件内联脚本 |
| update-tab-nav.js | 更新 Tab 导航 |
| replace-logo.js | 替换 Logo |

### 12.3 组件文件
| 文件 | 说明 |
|------|------|
| navbar.html | 顶部导航栏 (响应式 + 汉堡菜单) |
| footer.html | 页脚 (4 列布局) |
| breadcrumb.html | 面包屑导航 |
| brand-tab-nav.html | 品牌 Tab 二级导航 |
| floating-contact.html | 右侧悬浮联系方式 |

---

## 13. 快速参考

### 13.1 常用命令
```bash
# 开发
npm run generate:brand infineon  # 生成 Infineon 品牌

# 构建
npm run generate:all  # 生成所有品牌
npm run build         # 同 generate:all

# 测试
# 使用 Playwright MCP 截图验证
```

### 13.2 目录路径
```
项目根目录：C:\Users\ymlt\Desktop\3\
模板目录：C:\Users\ymlt\Desktop\3\templates\
数据目录：C:\Users\ymlt\Desktop\3\data\
输出目录：C:\Users\ymlt\Desktop\3\output\
```

### 13.3 关键配置
- 容器最大宽度：1319px
- 导航栏高度：72px (桌面), 56px (移动)
- 品牌 Tab 导航高度：56px
- 触摸目标最小尺寸：44×44px

---

## 14. 当前状态

### 14.1 已完成
- [x] 项目目录结构
- [x] 全局样式 (style.css + 组件 CSS)
- [x] 导航栏组件 (响应式)
- [x] 页脚组件
- [x] 面包屑导航组件
- [x] 品牌 Tab 二级导航组件
- [x] 右侧悬浮联系方式组件
- [x] Node.js 生成脚本
- [x] Infineon JSON 数据 (5 个文件)
- [x] 所有 HTML 模板 (12 个品牌模板 + 5 个组件)
- [x] 内容发布 (34 个页面已生成)
- [x] SEO 优化报告

### 14.2 待完成
- [ ] Semikron 品牌数据
- [ ] 主站页面模板
- [ ] Playwright 自动化测试
- [ ] sitemap.xml 生成
- [ ] 其他 40+ 品牌扩展

---

## 15. 参考资料

### 15.1 相关域名
- 主站：firstack-distributor.com (已上线)
- 新站：ic-distributor.com (开发中)

### 15.2 部署平台
- Cloudflare Pages: https://pages.cloudflare.com/

### 15.3 设计参考
- Material Design
- Apple Human Interface Guidelines
- WCAG 2.1 可访问性指南

---

**文档结束**
