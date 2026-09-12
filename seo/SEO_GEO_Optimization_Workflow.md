# BeiLuo 电子元器件分销商网站 SEO/GEO 优化完整流程

## 项目概述

**项目名称**: BeiLuo 电子元器件分销商网站 SEO/GEO 优化  
**目标域名**: ic-distributor.com  
**URL结构**: 子目录形式 `ic-distributor.com/[品牌]` (如: ic-distributor.com/3peak)  
**优化策略**: 按品牌字母顺序逐个优化（从3peak开始）  
**品牌总数**: 100+  
**当前优化品牌**: 3peak (思瑞浦)

---

## 目录

1. [⚠️ 执行铁律](#执行铁律)
2. [Step 1: Memory Management - 初始化项目记忆结构](#step-1-memory-management)
3. [Step 2: Research - 研究分析](#step-2-research)
4. [Step 3: Optimize - 优化执行](#step-3-optimize)
5. [Step 4: Cross-cutting - 质量审计](#step-4-cross-cutting)
6. [Step 5: Memory Management - 更新记忆文件](#step-5-memory-update)
7. [Step 6: 生成优化报告](#step-6-report)
8. [Step 7: 生成子目录网站 - 输出到output/](#step-7-output)

---

## ⚠️ 执行铁律

> **以下七条铁律必须严格遵守，违反任何一条都可能导致优化失败或数据丢失！**

### 🔴 铁律 1: 逐个品牌执行 - 禁止并行

**必须严格遵守：**
- ✅ 一次只优化一个品牌
- ✅ 按字母顺序执行 (3peak → adi → aipu → allegro → ...)
- ✅ 完成当前品牌全部6个步骤后，才能开始下一个品牌
- ❌ 禁止同时优化多个品牌
- ❌ 禁止跳过品牌
- ❌ 禁止并行执行

**为什么重要：**
- 避免记忆文件冲突
- 确保优化质量
- 便于追踪进度
- 防止数据混乱

---

### 🔴 铁律 2: 及时更新记忆 - 每步必更

**必须严格遵守：**
- ✅ 每完成一个步骤，立即更新记忆文件
- ✅ 记录所有发现和问题
- ✅ 更新优化进度状态
- ✅ 保存中间结果
- ❌ 禁止批量完成后统一更新
- ❌ 禁止跳过记忆更新
- ❌ 禁止延迟更新

**更新时机：**
```
Step 1 完成后 → 立即更新记忆
Step 2 完成后 → 立即更新记忆
Step 3 完成后 → 立即更新记忆
Step 4 完成后 → 立即更新记忆
Step 5 完成后 → 立即更新记忆
Step 6 完成后 → 立即更新记忆
Step 7 完成后 → 立即更新记忆
```

**文件存储位置：**

1. **项目记忆文件** (全局状态):
```
data/.project-memory/seo-optimization-project.md
```

2. **Step 2 研究报告** (keyword-research + serp-analysis + competitor-analysis + content-gap-analysis):
```
data/.project-memory/[品牌]_step2_research_[日期].md
```

3. **其他步骤报告**:
```
data/.project-memory/[品牌]_step3_optimize_[日期].md
data/.project-memory/[品牌]_step4_audit_[日期].md
data/.project-memory/[品牌]_final_report_[日期].md
```

> **重要**: 所有中间结果和报告必须存储在 `data/` 目录下，与品牌数据一起管理

---

### 🔴 铁律 3: 保存中间结果 - 避免重复

**必须严格遵守：**
- ✅ 每个步骤的结果保存到独立文件
- ✅ 命名规范：`[品牌]_[步骤]_[日期].md`
- ✅ 定期备份重要数据
- ✅ 记录已完成的修复
- ❌ 禁止覆盖未确认的结果
- ❌ 禁止删除中间文件
- ❌ 禁止重复执行已完成的步骤

**文件命名规范：**
```
3peak_step2_research_2026-05-12.md
3peak_step3_optimize_2026-05-12.md
3peak_step4_audit_2026-05-12.md
adi_step2_research_2026-05-13.md
...
```

**保存位置（已更新，根据铁律2）：**
```
data/.project-memory/
├── seo-optimization-project.md          # 项目记忆文件
├── 3peak_step2_research_2026-05-12.md   # Step 2 研究报告
├── 3peak_step3_optimize_2026-05-12.md   # Step 3 优化报告
├── 3peak_step4_audit_2026-05-12.md      # Step 4 审计报告
├── 3peak_final_report_2026-05-12.md     # 最终报告
├── adi_step2_research_2026-05-12.md     # 下一个品牌...
└── ...
```

> **注意**: 根据铁律2，所有中间结果和报告必须存储在 `data/.project-memory/` 目录下

---

### 🔴 铁律 4: JSON数据完整性 - 禁止直接修改HTML

**必须严格遵守：**
- ✅ 只修改 `data/[品牌]/*.json` 源数据文件
- ✅ 使用脚本从JSON生成 `output/[品牌]/index.html`
- ✅ 保持JSON作为唯一数据源
- ❌ 禁止直接修改 `output/[品牌]/index.html`
- ❌ 禁止手动编辑输出目录的任何文件
- ❌ 禁止绕过JSON直接改输出

**为什么重要：**
- 确保数据源唯一性
- 避免数据不一致
- 便于批量更新和维护
- 可追溯所有修改

**正确流程：**
```
修改 data/[品牌]/brand.json
    ↓
运行生成脚本
    ↓
生成 output/[品牌]/index.html
```

---

### 🔴 铁律 5: 重新生成原则 - 修改后必须重新生成

**必须严格遵守：**
- ✅ 每次修改JSON后必须重新生成输出
- ✅ 验证生成结果正确
- ✅ 删除旧输出，生成新输出
- ❌ 禁止只改JSON不重新生成
- ❌ 禁止部分更新输出文件
- ❌ 禁止混合手动和自动修改

**重新生成时机：**
- 修改品牌信息后
- 更新产品数据后
- 调整SEO设置后
- 优化内容后

---

### 🔴 铁律 6: 模板与数据分离 - 保持清晰边界

**必须严格遵守：**
- ✅ HTML模板只包含结构和样式
- ✅ 所有动态内容来自JSON
- ✅ 使用占位符替换数据
- ❌ 禁止在模板中硬编码品牌信息
- ❌ 禁止模板中包含具体数据
- ❌ 禁止数据和模板混合

**模板示例：**
```html
<!-- ✅ 正确：使用占位符 -->
<title>{{SEO_TITLE}}</title>
<meta name="description" content="{{SEO_DESCRIPTION}}">

<!-- ❌ 错误：硬编码 -->
<title>3peak Distributor | BeiLuo</title>
```

---

### 🔴 铁律 7: 数据源唯一性 - 只修改data/目录

**必须严格遵守：**
- ✅ **只修改 `data/` 目录下的文件**
  - `data/[品牌]/brand.json` - 品牌数据
  - `data/[品牌]/products.json` - 产品数据
  - `data/.project-memory/` - 项目记忆文件
- ✅ 使用脚本从JSON生成 `output/[品牌]/`
- ✅ 可以删除整个output/重新生成
- ❌ **禁止直接修改 `output/` 目录的任何文件**
- ❌ 禁止把output/当作工作目录
- ❌ 禁止绕过data/直接改输出

**为什么重要：**
- data/ 是唯一数据源
- output/ 是构建产物，不是源文件
- 随时可以清空output/重新生成
- 确保生成过程可重复
- 避免数据不一致

**正确的数据流：**
```
修改 data/ 目录 (唯一入口)
    ├── data/[品牌]/brand.json      ← 修改品牌数据
    ├── data/[品牌]/products.json   ← 修改产品数据
    └── data/.project-memory/       ← 修改记忆文件
    ↓
运行生成脚本
    ↓
生成 output/[品牌]/index.html (只读构建产物)
```

**错误的做法：**
```
❌ 直接编辑 output/[品牌]/index.html
❌ 手动修改 output/ 中的任何文件
❌ 在 .claude/memory/ 中保存记忆文件
```

---

### ⚡ 违反铁律的后果

| 铁律 | 违反后果 |
|------|---------|
| 铁律 1 | 数据混乱、记忆冲突、优化质量下降 |
| 铁律 2 | 丢失关键发现、重复工作、进度无法追踪 |
| 铁律 3 | 重复劳动、无法回溯、时间浪费 |
| 铁律 4 | 数据不一致、源数据失效、维护困难 |
| 铁律 5 | 修改不生效、数据不同步、错误累积 |
| 铁律 6 | 模板无法复用、数据混乱、生成错误 |
| 铁律 7 | 构建不可重复、部署风险、数据丢失 |

---

### ✅ 执行检查清单

开始每个品牌前，确认：
- [ ] 上一个品牌已全部完成（7个步骤）
- [ ] 上一个品牌的记忆文件已更新
- [ ] 上一个品牌的报告已生成
- [ ] 当前品牌的目录已创建
- [ ] 未直接修改过output/目录

完成每个步骤后，确认：
- [ ] 结果已保存到文件
- [ ] 记忆文件已更新
- [ ] 进度已记录
- [ ] 发现的问题已记录

Step 7 (生成输出) 前，确认：
- [ ] 只修改了 `data/[品牌]/*.json`，未改 `output/`
- [ ] 项目记忆文件更新在 `data/.project-memory/`
- [ ] JSON数据完整且验证通过
- [ ] 模板文件使用占位符，无硬编码
- [ ] 准备删除旧 `output/` 重新生成

Step 7 完成后，确认：
- [ ] `output/` 完全由脚本生成
- [ ] 无手动修改痕迹
- [ ] 内容来自 `data/` 中的JSON数据
- [ ] 可以删除 `output/` 重新生成
- [ ] 所有源数据都在 `data/` 目录

---

## Step 1: Memory Management - 初始化项目记忆结构

### 1.1 创建项目记忆文件

**文件位置**: `data/.project-memory/seo-optimization-project.md`

```markdown
# SEO/GEO 优化项目记忆文件

## 项目概述
- **项目名称**: BeiLuo 电子元器件分销商网站 SEO 优化
- **目标域名**: ic-distributor.com
- **优化策略**: 按品牌字母顺序逐个优化
- **当前优化品牌**: [品牌名称]
- **品牌总数**: 100+

## [品牌名称] 品牌信息 (HOT - 当前活跃)

### 品牌基础信息
- **品牌名称**: 
- **中文名**: 
- **行业**: 
- **成立时间**: 
- **总部**: 
- **员工**: 
- **官网**: 

### 核心产品类别
1. 
2. 
3. 

### 目标关键词
- 
- 
- 

### 应用领域
- 
- 

### 认证资质
- 

## 优化状态跟踪

### [品牌名称] 优化进度
- [x] Step 1: Memory Management 初始化
- [ ] Step 2: Research (关键词 + SERP + 竞品 + 内容缺口)
- [ ] Step 3: Optimize (页面SEO + 技术SEO + 内链 + 内容刷新)
- [ ] Step 4: Cross-cutting (内容质量 + 域名权威 + 实体优化)
- [ ] Step 5: Memory Management 更新
- [ ] Step 6: 生成优化报告

## 技术SEO基准
- **当前 robots.txt**: 已允许 /output-*/ 目录
- **Canonical URL**: https://ic-distributor.com/[品牌名称]/
- **Schema标记**: 需要添加 Organization + Product 结构化数据

## 待优化品牌队列 (WARM)
1. 3peak (当前)
2. adi
3. aipu
4. allegro
5. ... (按字母顺序)

## 优化发现 (动态更新)
### [品牌名称] 发现
- 页面位置: 
- 需要统一规范URL
- 需要添加更多技术内容

## 上次更新
- 日期: 
- 操作: 
```

### 1.2 读取品牌数据（必须首先执行）

> **⚠️ 重要**: 每次优化新品牌时，**必须首先读取** `data/[品牌]/` 目录下的所有数据文件！

**读取顺序**：
```bash
# 1. 读取品牌基础数据（必须）
cat data/[品牌名称]/brand.json

# 2. 读取产品数据（必须）
cat data/[品牌名称]/products.json

# 3. 读取支持文档（如果有）
cat data/[品牌名称]/support.json

# 4. 读取新闻数据（如果有）
cat data/[品牌名称]/news.json
```

**数据文件说明**：

| 文件 | 必需 | 内容 | 用途 |
|------|------|------|------|
| `brand.json` | ✅ 必须 | 品牌基础信息、SEO数据、FAQ | 生成页面核心内容 |
| `products.json` | ✅ 必须 | 产品列表、分类、规格 | 生成产品展示 |
| `support.json` | ⚠️ 可选 | 支持文档、应用笔记 | 生成支持页面 |
| `news.json` | ⚠️ 可选 | 品牌新闻、动态 | 生成新闻内容 |

**检查清单**：
- [ ] 确认 `data/[品牌]/` 目录存在
- [ ] 确认 `brand.json` 文件存在且可读
- [ ] 确认 `products.json` 文件存在且可读
- [ ] 读取并理解品牌核心信息
- [ ] 提取SEO相关数据（seoTitle, seoDescription, seoKeywords）
- [ ] 提取FAQ数据
- [ ] 提取产品类别数据

> **注意**: 所有后续优化步骤都基于这些数据，务必确保数据读取完整准确！

---

## Step 2: Research - 研究分析

### 2.1 Keyword Research (关键词研究)

#### 2.1.1 核心关键词定义

> **核心关键词公式**: `[品牌名称] + distributor`

**示例**:
- 3peak → **3peak distributor**
- adi → **adi distributor**
- infineon → **infineon distributor**

**为什么这是核心关键词**:
- 直接反映用户寻找品牌代理商的意图
- 交易型关键词，转化率高
- 竞争度适中，有排名机会
- 与网站定位（分销商）完全匹配

#### 2.1.2 关键词扩展策略

基于核心关键词 `[品牌] distributor`，扩展以下关键词矩阵：

**第一层：核心变体**
| 关键词 | 搜索意图 | 优先级 | 示例 |
|--------|---------|--------|------|
| [品牌] distributor | 交易型 | ⭐⭐⭐ 最高 | 3peak distributor |
| [品牌] distributor china | 交易型 | ⭐⭐⭐ 最高 | 3peak distributor china |
| [品牌] authorized distributor | 交易型 | ⭐⭐⭐ 最高 | 3peak authorized distributor |

**第二层：产品+品牌**
| 关键词 | 搜索意图 | 优先级 | 示例 |
|--------|---------|--------|------|
| [品牌] [产品] distributor | 交易型 | ⭐⭐ 高 | 3peak op amp distributor |
| [品牌] [产品] supplier | 交易型 | ⭐⭐ 高 | 3peak adc supplier |
| buy [品牌] [产品] | 交易型 | ⭐⭐ 高 | buy 3peak operational amplifier |

**第三层：选型+支持**
| 关键词 | 搜索意图 | 优先级 | 示例 |
|--------|---------|--------|------|
| [品牌] selection guide | 信息型 | ⭐⭐ 高 | 3peak selection guide |
| [品牌] cross reference | 信息型 | ⭐⭐ 高 | 3peak ti cross reference |
| [品牌] technical support | 信息型 | ⭐ 中 | 3peak technical support |

**第四层：长尾关键词**
| 关键词 | 搜索意图 | 优先级 | 示例 |
|--------|---------|--------|------|
| [品牌] automotive grade distributor | 交易型 | ⭐ 中 | 3peak automotive grade distributor |
| [品牌] [应用] solution | 信息型 | ⭐ 中 | 3peak industrial control solution |
| [品牌] price | 交易型 | ⭐ 中 | 3peak op amp price |

#### 2.1.3 关键词研究检查清单

**核心关键词确认**:
- [ ] 确认核心关键词: `[品牌] distributor`
- [ ] 验证核心关键词搜索量（使用工具）
- [ ] 分析核心关键词SERP竞争度

**关键词扩展**:
- [ ] 提取 brand.json 中的产品类别关键词
- [ ] 提取 brand.json 中的FAQs作为长尾词
- [ ] 分析产品型号关键词机会
- [ ] 识别应用场景关键词

**关键词优先级排序**:
- [ ] 标记高优先级关键词（交易型+高搜索量）
- [ ] 标记中优先级关键词（信息型+中搜索量）
- [ ] 标记低优先级关键词（长尾+低搜索量）

**关键词映射**:
- [ ] 核心关键词 → 品牌首页
- [ ] 产品关键词 → 产品分类页
- [ ] 选型关键词 → 选型指南页
- [ ] 长尾关键词 → 博客/支持页面

### 2.2 SERP Analysis (搜索结果分析)

#### 2.2.1 分析目标SERP特征

**检查项目**:
- [ ] 搜索结果页面类型分布
- [ ] 是否存在Featured Snippet
- [ ] 是否存在People Also Ask
- [ ] 视频/图片结果占比
- [ ] 竞品页面特征

#### 2.2.2 SERP分析模板

```markdown
## SERP分析 - [关键词]

### 搜索结果特征
- **结果类型**: [产品页/选型指南/代理商列表]
- **Featured Snippet**: [是/否]
- **People Also Ask**: [数量]
- **视频结果**: [是/否]

### 竞品页面分析
| 排名 | 网站 | 页面类型 | 内容特征 |
|------|------|---------|---------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

### 优化机会
- 
- 
```

### 2.3 Competitor Analysis (竞品分析)

#### 2.3.1 识别主要竞争对手

**竞争对手类型**:
1. **大型分销商**: DigiKey, Mouser, Arrow
2. **国内分销商**: 立创商城, 云汉芯城
3. **其他授权代理商**: 同类品牌代理商
4. **原厂官网**: 品牌官方网站

#### 2.3.2 竞品分析框架

```markdown
## 竞品分析

### 竞争对手 1: [名称]
- **网站**: 
- **优势**: 
- **劣势**: 
- **内容策略**: 
- **技术SEO**: 

### 我们的竞争优势
- 本地技术支持
- 快速交货
- 价格优势
- FAE团队支持

### 差异化策略
- 
```

### 2.4 Content Gap Analysis (内容缺口分析)

#### 2.4.1 内容缺口检查清单

- [ ] 产品对比表 (品牌 vs 竞品)
- [ ] 应用案例研究
- [ ] 选型指南/决策树
- [ ] 参考设计/电路图
- [ ] 视频教程
- [ ] 技术博客文章
- [ ] FAQ页面
- [ ] 下载中心 (Datasheet, 应用笔记)

#### 2.4.2 内容缺口分析模板

```markdown
## 内容缺口分析

### 缺失内容
| 内容类型 | 重要性 | 优先级 | 预计工作量 |
|---------|--------|--------|-----------|
| 产品对比表 | 高 | P1 | 2天 |
| 应用案例 | 高 | P1 | 3天 |
| 选型指南 | 中 | P2 | 2天 |
| 视频教程 | 中 | P3 | 5天 |

### 内容建议
1. 
2. 
3. 
```

---

### 2.5 生成SEO/GEO分析报告 (Step 2 输出)

根据铁律2，使用以下技能生成完整的SEO/GEO分析报告：

**使用的技能**:
1. `keyword-research` - 关键词研究
2. `serp-analysis` - SERP分析
3. `competitor-analysis` - 竞品分析
4. `content-gap-analysis` - 内容缺口分析

**报告内容结构**:
```markdown
# [品牌] Step 2: Research Analysis Report

## 2.1 Keyword Research (关键词研究)
- 核心关键词定义
- 关键词矩阵（4层）
- 关键词映射

## 2.2 SERP Analysis (SERP分析)
- 目标SERP特征
- 竞品SERP分析
- 优化机会识别

## 2.3 Competitor Analysis (竞品分析)
- 主要竞争对手
- 竞品优劣势
- 我们的竞争优势

## 2.4 Content Gap Analysis (内容缺口分析)
- 缺失内容清单
- 内容建议
- 优先级排序

## Research Summary
- 关键发现
- 推荐行动
- 下一步
```

**报告存储位置** (根据铁律2):
```
data/.project-memory/
└── [品牌]_step2_research_[日期].md
```

**示例**:
```
data/.project-memory/
├── 3peak_step2_research_2026-05-12.md
├── adi_step2_research_2026-05-12.md
└── ...
```

> **重要**: Step 2 研究报告必须存储在 `data/.project-memory/` 目录下，与品牌数据和项目记忆文件一起管理

---

## Step 3: Optimize - 优化执行

> **数据来源说明**: Step 3优化时，**主要基于`data/[品牌]/`目录下的JSON文件**。
> 
> **可选参考**（推荐）:
> - 读取 `output/[品牌]/index.html` 了解现有页面结构
> - 查看生产环境网页了解实际展示效果
> - 分析当前SEO状况和问题
> 
> **重要**: 所有修改**必须通过JSON文件完成**，保持数据源唯一性。参考HTML仅用于了解现状，不直接修改。

### 3.1 优化前准备

#### 3.1.1 读取数据源

**必须读取**:
```bash
# 1. 品牌基础数据
cat data/[品牌]/brand.json

# 2. 产品数据
cat data/[品牌]/products.json

# 3. 支持文档（如果有）
cat data/[品牌]/support.json

# 4. 解决方案（如果有）
cat data/[品牌]/solutions.json

# 5. 新闻数据（如果有）
cat data/[品牌]/news.json
```

**可选读取（推荐）**:
```bash
# 了解现有页面结构（如果已生成）
cat output/[品牌]/index.html

# 或查看生产环境（了解实际效果）
curl https://ic-distributor.com/[品牌]/
```

#### 3.1.2 分析现状

**JSON数据分析**:
- [ ] 检查现有SEO数据质量
- [ ] 识别关键词覆盖情况
- [ ] 评估内容完整性

**HTML参考分析**（可选）:
- [ ] 了解页面结构布局
- [ ] 检查现有SEO问题
- [ ] 识别内容优化机会
- [ ] 查看竞品对比情况

### 3.2 On-Page SEO Auditor (页面SEO审计)

#### 3.1.1 页面SEO检查清单

**标题和Meta**:
- [ ] Title标签 (50-60字符)
- [ ] Meta Description (150-160字符)
- [ ] Meta Keywords (可选)
- [ ] Canonical URL

**内容结构**:
- [ ] H1标签 (唯一)
- [ ] H2-H6层级结构
- [ ] 段落长度 (<150字)
- [ ] 关键词密度 (1-2%)

**图片优化**:
- [ ] Alt属性
- [ ] 文件名描述性
- [ ] 压缩优化
- [ ] WebP格式

**链接**:
- [ ] 内部链接
- [ ] 外部链接 (nofollow)
- [ ] 锚文本多样性

#### 3.1.2 页面SEO评分表

```markdown
## 页面SEO审计 - [页面URL]

### 评分标准 (满分100)
| 检查项 | 权重 | 得分 | 状态 |
|--------|------|------|------|
| Title优化 | 15% | | |
| Meta Description | 10% | | |
| H1标签 | 10% | | |
| 内容质量 | 20% | | |
| 关键词使用 | 15% | | |
| 图片优化 | 10% | | |
| 内部链接 | 10% | | |
| 结构化数据 | 10% | | |
| **总分** | 100% | | |

### 问题列表
1. [问题描述] - [修复建议]
2. 

### 修复操作
- [ ] 修复1
- [ ] 修复2
```

### 3.2 Technical SEO Checker (技术SEO检查)

#### 3.2.1 技术SEO检查清单

**可抓取性**:
- [ ] robots.txt 配置正确
- [ ] XML Sitemap 有效
- [ ] 无404错误
- [ ] 301重定向正确

**页面速度**:
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] 图片优化
- [ ] 代码压缩

**移动适配**:
- [ ] 响应式设计
- [ ] 视口设置
- [ ] 触摸目标大小

**安全性**:
- [ ] HTTPS
- [ ] 有效SSL证书
- [ ] 无混合内容

#### 3.2.2 技术SEO修复脚本

```javascript
// 检查并修复canonical标签
function fixCanonicalTags() {
  // 读取所有HTML文件
  // 检查canonical标签
  // 修复缺失或错误的canonical
}

// 检查并添加结构化数据
function addSchemaMarkup() {
  // 添加Organization Schema
  // 添加Product Schema
  // 添加BreadcrumbList Schema
}

// 优化图片
function optimizeImages() {
  // 添加alt属性
  // 压缩图片
  // 转换为WebP格式
}
```

### 3.3 Internal Linking Optimizer (内链优化)

#### 3.3.1 内链策略

**品牌页面内链结构** (子目录形式):
```
主站首页 (ic-distributor.com)
  └── 品牌子目录首页 (/3peak/)
        ├── 产品页 (/3peak/products/)
        │     ├── 产品分类1
        │     ├── 产品分类2
        │     └── 产品详情页
        ├── 解决方案 (/3peak/solutions/)
        │     ├── 工业控制
        │     ├── 汽车电子
        │     └── 通信设备
        └── 技术支持 (/3peak/support/)
              ├── 选型指南
              ├── 应用笔记
              └── FAQ
```

#### 3.3.2 内链优化检查清单

- [ ] 面包屑导航
- [ ] 相关产品推荐
- [ ] 分类导航
- [ ] 页脚链接
- [ ] 上下文链接

### 3.4 Content Refresher (内容刷新)

#### 3.4.1 内容刷新策略

**现有内容评估**:
- [ ] 内容时效性
- [ ] 信息准确性
- [ ] 完整性
- [ ] 可读性

**内容增强方向**:
1. 添加更多技术规格
2. 增加应用案例
3. 补充选型指导
4. 添加对比表格
5. 优化FAQ

#### 3.4.2 内容刷新模板

```markdown
## 内容刷新计划 - [品牌名称]

### 页面: [页面URL]

#### 当前问题
- 
- 

#### 刷新内容
1. **添加内容**:
   - 
   - 

2. **修改内容**:
   - 
   - 

3. **删除内容**:
   - 

#### 预期效果
- 
```

---

## Step 4: Cross-cutting - 质量审计

### 4.1 Content Quality Auditor (内容质量审计)

#### 4.1.1 CORE-EEAT 80项检查

**C - Content (内容质量)**:
- [ ] C01: 内容原创性
- [ ] C02: 信息准确性
- [ ] C03: 内容深度
- [ ] C04: 更新频率
- [ ] ... (共20项)

**O - Optimization (优化)**:
- [ ] O01: 标题优化
- [ ] O02: Meta描述
- [ ] O03: 关键词使用
- [ ] O04: 结构化数据
- [ ] ... (共20项)

**R - Readability (可读性)**:
- [ ] R01: 段落长度
- [ ] R02: 句子复杂度
- [ ] R03: 标题结构
- [ ] R04: 列表使用
- [ ] ... (共20项)

**E - Engagement (参与度)**:
- [ ] E01: 多媒体使用
- [ ] E02: 互动元素
- [ ] E03: 分享功能
- [ ] E04: 评论功能
- [ ] ... (共10项)

**A - Authority (权威性)**:
- [ ] A01: 作者资质
- [ ] A02: 引用来源
- [ ] A03: 外部链接
- [ ] A04: 认证展示
- [ ] ... (共10项)

**T - Trust (信任度)**:
- [ ] T01: 联系信息
- [ ] T02: 隐私政策
- [ ] T03: HTTPS
- [ ] T04: 用户评价
- [ ] ... (共10项)

#### 4.1.2 内容质量评分报告

```markdown
## CORE-EEAT 内容质量审计报告

### 品牌: [品牌名称]
### 审计日期: 

### 评分结果
| 维度 | 满分 | 得分 | 百分比 |
|------|------|------|--------|
| Content | 20 | | % |
| Optimization | 20 | | % |
| Readability | 20 | | % |
| Engagement | 10 | | % |
| Authority | 10 | | % |
| Trust | 10 | | % |
| **总分** | **100** | | **%** |

### 关键问题 (否决项)
- [ ] 无
- [ ] 有: [问题描述]

### 优先修复项
1. [项目] - [得分]/[满分] - [修复建议]
2. 

### 发布建议
- [ ] 可以发布 (总分>70且无否决项)
- [ ] 需要修改后发布
- [ ] 不建议发布
```

### 4.2 Domain Authority Auditor (域名权威审计)

#### 4.2.1 CITE 40项检查

**C - Citations (引用)**:
- [ ] C01: 外部链接数量
- [ ] C02: 外部链接质量
- [ ] C03: 引用域名多样性
- [ ] C04: 行业相关链接
- [ ] ... (共10项)

**I - Influence (影响力)**:
- [ ] I01: 品牌提及
- [ ] I02: 社交媒体存在
- [ ] I03: 行业认可
- [ ] I04: 媒体报道
- [ ] ... (共10项)

**T - Trust Signals (信任信号)**:
- [ ] T01: 域名年龄
- [ ] T02: SSL证书
- [ ] T03: 隐私政策
- [ ] T04: 联系信息
- [ ] ... (共10项)

**E - Engagement (参与度)**:
- [ ] E01: 网站流量
- [ ] E02: 用户停留时间
- [ ] E03: 跳出率
- [ ] E04: 回访率
- [ ] ... (共10项)

#### 4.2.2 域名权威评分报告

```markdown
## CITE 域名权威审计报告

### 域名: ic-distributor.com
### 审计日期: 

### 评分结果
| 维度 | 满分 | 得分 | 百分比 |
|------|------|------|--------|
| Citations | 25 | | % |
| Influence | 25 | | % |
| Trust Signals | 25 | | % |
| Engagement | 25 | | % |
| **总分** | **100** | | **%** |

### 域名评级
- [ ] A级 (90-100): 高权威
- [ ] B级 (70-89): 中等权威
- [ ] C级 (50-69): 低权威
- [ ] D级 (<50): 需要改进

### 改进建议
1. 
2. 
```

### 4.3 Entity Optimizer (实体优化)

#### 4.3.1 实体优化检查清单

**品牌实体**:
- [ ] 品牌名称一致性
- [ ] 品牌描述准确性
- [ ] Logo和视觉识别
- [ ] 品牌故事

**产品实体**:
- [ ] 产品名称规范
- [ ] 产品描述完整
- [ ] 技术规格准确
- [ ] 产品分类清晰

**组织实体**:
- [ ] 公司信息完整
- [ ] 联系方式准确
- [ ] 地址信息
- [ ] 社交媒体链接

#### 4.3.2 Schema.org 结构化数据模板

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ic-distributor.com/#organization",
      "name": "BeiLuo",
      "url": "https://ic-distributor.com",
      "logo": "https://ic-distributor.com/assets/images/logo.svg",
      "description": "Leading electronic components distributor",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Shanxian County",
        "addressRegion": "Shandong Province",
        "addressCountry": "CN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+86-15013702378",
        "contactType": "sales"
      }
    },
    {
      "@type": "Product",
      "@id": "https://ic-distributor.com/3peak/products/[product-id]/#product",
      "name": "[产品名称]",
      "brand": {
        "@type": "Brand",
        "name": "3peak"
      },
      "description": "[产品描述]",
      "manufacturer": {
        "@type": "Organization",
        "name": "3peak"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://ic-distributor.com/3peak/products/[product-id]/",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "BeiLuo"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ic-distributor.com/3peak/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ic-distributor.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "3peak",
          "item": "https://ic-distributor.com/3peak/"
        }
      ]
    }
  ]
}
```

---

## Step 5: Memory Management - 更新记忆文件

### 5.1 更新项目记忆

**更新内容**:
- 完成Step 2-4的发现
- 更新优化进度
- 记录修复的问题
- 添加新的待办事项

### 5.2 记忆文件更新模板

```markdown
## 更新记录 - [日期]

### 完成的工作
- [x] 
- [x] 

### 关键发现
1. 
2. 

### 修复的问题
- 
- 

### 下一步计划
- [ ] 
- [ ] 

### 优化评分变化
| 维度 | 优化前 | 优化后 | 变化 |
|------|--------|--------|------|
| CORE-EEAT | | | + |
| CITE | | | + |
```

---

## Step 6: 生成优化报告

### 6.1 品牌优化报告模板

```markdown
# [品牌名称] SEO/GEO 优化报告

## 执行摘要
- **品牌名称**: 
- **优化日期**: 
- **优化人员**: 
- **报告生成日期**: 

## 优化前状态
### 技术SEO
- robots.txt: 
- Canonical: 
- Schema: 
- 页面速度: 

### 内容质量 (CORE-EEAT)
- 总分: /100
- 主要问题: 

### 域名权威 (CITE)
- 总分: /100
- 主要问题: 

## 执行的优化操作

### Step 1: Memory Management
- [x] 初始化项目记忆文件
- [x] 读取品牌数据

### Step 2: Research
- [x] Keyword Research
  - 识别关键词: 个
  - 高优先级: 个
- [x] SERP Analysis
  - 分析SERP特征
  - 识别优化机会
- [x] Competitor Analysis
  - 分析竞争对手: 个
- [x] Content Gap Analysis
  - 识别内容缺口: 项

### Step 3: Optimize
- [x] On-Page SEO
  - 优化页面: 个
  - 修复问题: 个
- [x] Technical SEO
  - 修复技术问题: 个
- [x] Internal Linking
  - 添加内链: 个
- [x] Content Refresh
  - 刷新内容: 页

### Step 4: Cross-cutting
- [x] Content Quality Audit
  - 优化前: /100
  - 优化后: /100
- [x] Domain Authority Audit
  - 优化前: /100
  - 优化后: /100
- [x] Entity Optimization
  - 添加Schema: 个

## 优化后状态
### 技术SEO
- robots.txt: ✓ 已优化
- Canonical: ✓ 已统一
- Schema: ✓ 已添加
- 页面速度: 

### 内容质量 (CORE-EEAT)
- 总分: /100 (↑ )
- 评级: 

### 域名权威 (CITE)
- 总分: /100 (↑ )
- 评级: 

## 关键改进
1. 
2. 
3. 

## 建议后续操作
1. 
2. 
3. 

## 附录
### 关键词列表
| 关键词 | 优先级 | 搜索量 | 竞争度 |
|--------|--------|--------|--------|
| | | | |

### 修复清单
- [x] 
- [x] 

### 参考文档
- 
```

---

## 批量执行脚本

### 批量优化脚本

```bash
#!/bin/bash
# batch-optimize.sh

BRANDS=("3peak" "adi" "aipu" "allegro" "anlogic" "aowei")

for BRAND in "${BRANDS[@]}"; do
  echo "=========================================="
  echo "Optimizing brand: $BRAND"
  echo "=========================================="
  
  # Step 1: Memory Management
  echo "Step 1: Initializing memory..."
  
  # Step 2: Research
  echo "Step 2: Running research analysis..."
  
  # Step 3: Optimize
  echo "Step 3: Executing optimizations..."
  
  # Step 4: Cross-cutting
  echo "Step 4: Running quality audits..."
  
  # Step 5: Update Memory
  echo "Step 5: Updating memory..."
  
  # Step 6: Generate Report
  echo "Step 6: Generating report..."
  
  # Step 7: Generate Output Site
  echo "Step 7: Generating output site..."
  node generate-brand-site.js $BRAND
  
  echo "Completed: $BRAND"
  echo ""
done

echo "All brands optimized and generated!"
```

---

## 执行时间表

| 阶段 | 预计时间 | 依赖 |
|------|---------|------|
| Step 1: Memory | 30分钟 | 无 |
| Step 2: Research | 2小时 | Step 1 |
| Step 3: Optimize | 4小时 | Step 2 |
| Step 4: Cross-cutting | 3小时 | Step 3 |
| Step 5: Memory Update | 30分钟 | Step 4 |
| Step 6: Report | 1小时 | Step 5 |
| Step 7: Output Generation | 30分钟 | Step 6 |
| **总计** | **~12小时/品牌** | - |

---

## Step 7: 生成子目录网站 - 输出到output/

> **⚠️ 铁律 7: 必须修改JSON源文件，重新生成，禁止直接修改output/的HTML文件！**

### 🔴 铁律 7 详细说明

**禁止事项**:
- ❌ 直接修改 `output/[品牌]/index.html`
- ❌ 手动编辑输出目录中的任何文件
- ❌ 绕过JSON数据源直接改输出

**必须遵守**:
- ✅ 只修改 `data/[品牌]/*.json` 源数据
- ✅ 使用脚本重新生成 `output/[品牌]/`
- ✅ 保持数据与输出的一致性

**为什么重要**:
- 确保数据源唯一性
- 避免数据不一致
- 便于后续批量更新
- 可追溯修改历史

---

### 7.1 正确的数据流

```
修改数据源 (唯一入口)
    ↓
data/[品牌]/
    ├── brand.json      ← 修改这里
    ├── products.json   ← 修改这里
    ├── support.json    ← 修改这里
    └── news.json       ← 修改这里
    ↓
运行生成脚本
    ↓
生成/更新 output/[品牌]/
    └── index.html      ← 自动生成，不手动修改
```

---

### 7.2 输出目录结构

```
output/
├── [品牌名称]/
│   ├── index.html          # 品牌首页 (自动生成)
│   ├── products/
│   │   └── index.html      # 产品页面 (自动生成)
│   ├── solutions/
│   │   └── index.html      # 解决方案页面 (自动生成)
│   ├── support/
│   │   └── index.html      # 支持页面 (自动生成)
│   └── assets/             # 品牌专属资源 (自动复制)
├── _headers                # Cloudflare Headers
├── _routes.json            # Cloudflare Routes
└── sitemap.xml             # 站点地图 (自动生成)
```

---

### 7.3 生成脚本模板

```javascript
// generate-brand-site.js
const fs = require('fs');
const path = require('path');

const BRAND = process.argv[2]; // 从命令行获取品牌名称
const DATA_DIR = `data/${BRAND}`;
const TEMPLATE_FILE = `templates/brand-template.html`; // HTML模板
const OUTPUT_DIR = `output/${BRAND}`;

function generateBrandSite() {
  console.log(`🚀 Generating site for: ${BRAND}`);
  
  // 1. 读取JSON源数据 (唯一数据源)
  console.log('  📖 Reading JSON data...');
  const brandData = JSON.parse(fs.readFileSync(`${DATA_DIR}/brand.json`, 'utf-8'));
  const productsData = JSON.parse(fs.readFileSync(`${DATA_DIR}/products.json`, 'utf-8'));
  const supportData = JSON.parse(fs.readFileSync(`${DATA_DIR}/support.json`, 'utf-8'));
  
  // 2. 读取HTML模板
  console.log('  📄 Reading template...');
  let template = fs.readFileSync(TEMPLATE_FILE, 'utf-8');
  
  // 3. 从JSON生成内容 (所有动态内容来自JSON)
  console.log('  🔧 Generating content from JSON...');
  
  // 生成SEO内容
  const seoTitle = `${brandData.name} Distributor | ${brandData.seoTitle || 'Authorized Supplier'}`;
  const seoDescription = brandData.seoDescription || brandData.description;
  const seoKeywords = brandData.seoKeywords?.join(', ') || `${brandData.name} distributor`;
  
  // 生成产品类别HTML
  const productCategoriesHtml = generateProductCategories(brandData.coreProducts, productsData);
  
  // 生成FAQ HTML
  const faqHtml = generateFAQs(brandData.faqs);
  
  // 4. 替换模板变量
  template = template.replace(/{{BRAND_NAME}}/g, brandData.name);
  template = template.replace(/{{BRAND_CHINESE_NAME}}/g, brandData.ChineseName || '');
  template = template.replace(/{{SEO_TITLE}}/g, seoTitle);
  template = template.replace(/{{SEO_DESCRIPTION}}/g, seoDescription);
  template = template.replace(/{{SEO_KEYWORDS}}/g, seoKeywords);
  template = template.replace(/{{BRAND_DESCRIPTION}}/g, brandData.description);
  template = template.replace(/{{BRAND_LONG_DESCRIPTION}}/g, brandData.longDescription || brandData.description);
  template = template.replace(/{{FOUNDED_YEAR}}/g, brandData.foundedYear || '');
  template = template.replace(/{{HEADQUARTERS}}/g, brandData.headquarters || '');
  template = template.replace(/{{EMPLOYEES}}/g, brandData.employees || '');
  template = template.replace(/{{WEBSITE}}/g, brandData.website || '');
  template = template.replace(/{{CERTIFICATIONS}}/g, generateCertifications(brandData.certifications));
  template = template.replace(/{{INDUSTRIES}}/g, generateIndustries(brandData.industries));
  template = template.replace(/{{PRODUCT_CATEGORIES}}/g, productCategoriesHtml);
  template = template.replace(/{{FAQ_SECTION}}/g, faqHtml);
  
  // 5. 确保输出目录存在
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // 6. 写入生成的页面 (覆盖旧文件)
  fs.writeFileSync(`${OUTPUT_DIR}/index.html`, template, 'utf-8');
  console.log(`  ✅ Generated: ${OUTPUT_DIR}/index.html`);
  
  // 7. 复制静态资源
  copyStaticAssets(DATA_DIR, OUTPUT_DIR);
  
  // 8. 生成产品页面
  generateProductPages(productsData, OUTPUT_DIR);
  
  // 9. 生成支持页面
  if (supportData) {
    generateSupportPages(supportData, OUTPUT_DIR);
  }
  
  console.log(`🎉 Completed: ${BRAND}`);
}

function generateProductCategories(coreProducts, productsData) {
  // 从JSON生成产品类别HTML
  let html = '<div class="product-categories">';
  coreProducts.forEach(product => {
    html += `
      <article class="category-card">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </article>
    `;
  });
  html += '</div>';
  return html;
}

function generateFAQs(faqs) {
  // 从JSON生成FAQ HTML
  let html = '<div class="faq-list">';
  faqs.forEach(faq => {
    html += `
      <details class="faq-item">
        <summary>${faq.question}</summary>
        <div class="faq-answer">${faq.answer}</div>
      </details>
    `;
  });
  html += '</div>';
  return html;
}

function generateCertifications(certifications) {
  return certifications?.map(cert => `<span class="cert-badge">${cert}</span>`).join('') || '';
}

function generateIndustries(industries) {
  return industries?.map(ind => `<li>${ind}</li>`).join('') || '';
}

function copyStaticAssets(dataDir, outputDir) {
  // 复制品牌logo等资源
  const assetsDir = `${dataDir}/assets`;
  const outputAssetsDir = `${outputDir}/assets`;
  if (fs.existsSync(assetsDir)) {
    if (!fs.existsSync(outputAssetsDir)) {
      fs.mkdirSync(outputAssetsDir, { recursive: true });
    }
    // 复制文件...
  }
}

function generateProductPages(productsData, outputDir) {
  // 生成产品详情页面
  if (!fs.existsSync(`${outputDir}/products`)) {
    fs.mkdirSync(`${outputDir}/products`, { recursive: true });
  }
  // 生成产品页面...
}

function generateSupportPages(supportData, outputDir) {
  // 生成支持页面
  if (!fs.existsSync(`${outputDir}/support`)) {
    fs.mkdirSync(`${outputDir}/support`, { recursive: true });
  }
  // 生成支持页面...
}

generateBrandSite();
```

---

### 7.4 修改流程示例

**场景**: 需要修改3peak的SEO标题

**正确做法**:
```bash
# 1. 修改JSON源文件
# 编辑 data/3peak/brand.json
# 修改 seoTitle 字段

# 2. 重新生成
node generate-brand-site.js 3peak

# 3. 验证
# 检查 output/3peak/index.html 已更新
```

**错误做法**:
```bash
# ❌ 直接编辑 output/3peak/index.html
# 这样会导致数据不一致，下次生成会覆盖
```

---

### 7.5 生成检查清单

- [ ] 确认已修改 `data/[品牌]/*.json` 源文件
- [ ] 运行生成脚本 `node generate-brand-site.js [品牌]`
- [ ] 验证 `output/[品牌]/index.html` 已生成/更新
- [ ] 验证页面内容来自JSON数据
- [ ] 检查SEO元素正确生成
- [ ] 验证静态资源已复制
- [ ] 本地预览确认正常
- [ ] 更新 `output/sitemap.xml`

---

### 7.6 输出验证

```bash
# 1. 验证输出目录存在
ls -la output/[品牌]/

# 2. 验证HTML文件生成
ls output/[品牌]/*.html

# 3. 验证内容来自JSON
grep "来自JSON的关键内容" output/[品牌]/index.html

# 4. 本地预览
npx serve output/

# 5. 验证SEO元素
curl -s output/[品牌]/index.html | grep "<title>"
curl -s output/[品牌]/index.html | grep "meta name=\"description\""
```

---

### 7.7 部署准备

生成完成后，`output/` 目录可以直接部署：
- Cloudflare Pages
- Vercel
- Netlify
- 或其他静态托管服务

**重要**: 部署前务必确认所有内容都来自JSON生成，没有手动修改的痕迹。

---

## 注意事项

### 核心原则
1. **严格遵守三大铁律** - 违反铁律将导致优化失败
2. **验证修复** - 每个修复都要验证
3. **记录发现** - 新问题及时记录

### 质量要求
- 每个步骤必须达到质量标准才能进入下一步
- 发现问题立即记录，不要依赖记忆
- 定期回顾和总结优化经验

### 沟通规范
- 遇到问题立即反馈
- 重要决策需要确认
- 保持文档更新同步

---

## 联系支持

如有问题，请参考:
- SEO/GEO Skills 文档: `E:\Users\ymlt\.trae-cn\skills\seo-geo-claude-skills\`
- 项目记忆文件: `.claude/memory/seo-optimization-project.md`
