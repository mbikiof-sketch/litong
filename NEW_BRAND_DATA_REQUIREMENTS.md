# 新增品牌数据要求文档

## 概述

本文档规定了为 ic-distributor.com 网站新增品牌子目录时的数据要求和规范。每个品牌必须有独立的完整数据文件，确保内容差异化，避免 SEO 降权。

---

## 1. 品牌数据文件结构

在 `data/[brand-name]/` 目录下创建以下 5 个 JSON 文件：

```
data/
└── [brand-name]/
    ├── brand.json      # 品牌信息（含 about-brand FAQ）
    ├── products.json   # 产品数据（含 products-list、product-category、product-detail FAQ）
    ├── solutions.json  # 解决方案数据（含 solutions-list、solution-detail FAQ）
    ├── support.json    # 技术支持数据（含 support-list FAQ）
    └── news.json       # 新闻数据
```

---

## 2. brand.json 要求

### 必填字段

```json
{
  "name": "品牌英文名",
  "displayName": "品牌完整显示名",
  "logo": "/assets/brands/[brand-name]/logo.svg",
  "description": "品牌简短描述（100-200 字）",
  "longDescription": "品牌详细介绍（500-1000 字）",
  "coreProducts": [
    {
      "name": "产品类别名",
      "description": "产品类别描述",
      "keywords": ["关键词 1", "关键词 2"]
    }
  ],
  "industries": [
    {
      "name": "行业名",
      "description": "行业应用描述",
      "keywords": ["关键词 1", "关键词 2"]
    }
  ],
  "certifications": [
    {
      "name": "认证名称",
      "description": "认证说明"
    }
  ],
  "yearFounded": 成立年份,
  "headquarters": "总部所在地",
  "distributorStatus": "Core Distributor",
  "seoMetaTitle": "SEO 标题（60 字符以内）",
  "seoMetaDescription": "SEO 描述（160 字符以内）",
  "seoKeywords": ["关键词 1", "关键词 2", "中文关键词"]
}
```

### 内容差异化要求

- **品牌描述**：必须根据品牌实际背景编写，不能复制其他品牌
- **核心产品**：根据品牌实际产品线定制，不同品牌的产品分类应不同
- **应用行业**：根据品牌目标市场定制
- **认证资质**：填写品牌实际拥有的认证

---

## 3. products.json 要求

### 结构

```json
{
  "categories": [
    {
      "id": "产品类别 ID（小写，用连字符）",
      "name": "产品类别名称",
      "fullName": "产品类别全称",
      "description": "类别描述（100-200 字）",
      "longDescription": "类别详细描述（300-500 字）",
      "series": [
        {
          "name": "系列名称",
          "description": "系列描述",
          "applications": ["应用领域 1", "应用领域 2"]
        }
      ],
      "parameters": ["参数 1", "参数 2", "参数 3"],
      "applications": ["应用领域 1", "应用领域 2"],
      "selectionGuide": {
        "title": "选型指南标题",
        "description": "选型指南描述",
        "articleId": "对应技术支持文章 ID",
        "articleLink": "/[brand-name]/support/[article-id].html"
      },
      "seoKeywords": "品牌名+产品名+distributor, 品牌名+产品名+选型, 其他关键词",
      "products": [
        {
          "partNumber": "产品型号",
          "series": "所属系列",
          "voltage": "电压参数",
          "current": "电流参数",
          "package": "封装参数",
          "description": "产品简短描述",
          "longDescription": "产品详细描述（200-400 字）",
          "features": ["特性 1", "特性 2", "特性 3"],
          "datasheet": "/datasheets/[partNumber].pdf",
          "stock": "In Stock",
          "application": "应用领域",
          "seoTitle": "产品 SEO 标题",
          "seoDescription": "产品 SEO 描述",
          "faeReview": {
            "author": "FAE 姓名",
            "title": "职位",
            "content": "FAE 专业点评和应用解读（200-300字）",
            "highlight": "核心观点一句话总结"
          },
          "alternativeParts": [
            {
              "partNumber": "替代料号",
              "brand": "品牌",
              "reason": "替代原因（如：更高性价比、更高电压等级）",
              "link": "/[brand-name]/products/[part-number].html"
            }
          ],
          "companionParts": [
            {
              "partNumber": "配套料号",
              "category": "配套类别（如：Gate Driver, Diode）",
              "description": "配套产品描述",
              "link": "/[brand-name]/products/[part-number].html"
            }
          ]
        }
      ]
    }
  ]
}
```

### 产品描述规范

每个产品必须包含三个层级的描述：

```json
{
  "partNumber": "产品型号",
  "shortDescription": "简短描述（80-120字符）",
  "description": "完整描述（200-300字）",
  "descriptionParagraphs": [
    "第一段：核心规格（100字符内）",
    "第二段：主要特性（100字符内）",
    "第三段：供应信息（100字符内）"
  ]
}
```

**描述层级说明：**

| 字段 | 用途 | 长度要求 | 示例 |
|------|------|----------|------|
| `shortDescription` | 产品详情页标题下方 | 80-120字符 | High-power 3300V/1200A IGBT module for railway traction. |
| `description` | SEO 完整描述 | 200-300字 | The CRRC-IGBT-3300V-1200A is a high-power IGBT module... |
| `descriptionParagraphs` | Product Overview 分段显示 | 每段100字符内 | 3段简洁短句 |

**descriptionParagraphs 优化原则：**
- 删除冗余词汇（The, is a, designed for）
- 使用短句，每段控制在100字符内
- 第一段：产品类型 + 应用场景 + 核心规格
- 第二段：封装/技术特点
- 第三段：库存/支持信息

✅ 正确示例：
```json
{
  "shortDescription": "High-power 3300V/1200A IGBT module for railway traction and HVDC applications.",
  "description": "The CRRC-IGBT-3300V-1200A is a high-power IGBT module designed for demanding railway traction...",
  "descriptionParagraphs": [
    "High-power IGBT module for railway traction and HVDC applications. 3300V/1200A rating with advanced trench gate technology.",
    "IHM-B package provides excellent thermal management and reliable operation in harsh environments.",
    "In stock with competitive pricing. Full technical support from LiTong Electronics."
  ]
}
```

❌ 错误示例（段落过长）：
```json
{
  "descriptionParagraphs": [
    "The CRRC-IGBT-3300V-1200A is a high-power IGBT module designed for demanding railway traction and HVDC transmission applications. Featuring advanced trench gate technology, this module delivers exceptional performance with 3300V voltage rating and 1200A current capacity."
  ]
}
```

### 产品分类页规范

#### 分类描述要求

产品分类页的 `description` 和 `longDescription` 必须包含以下内容：

**内容要素：**
1. **总体特点** - 该产品分类的技术特点和市场定位
2. **主要系列** - 涵盖的主要产品系列
3. **核心优势** - 相比竞品的独特优势
4. **主要应用领域** - 典型应用场景

**SEO 关键词融入：**
自然地融入以下关键词模式：
- `[品牌名]+[产品名]+distributor`（如：Infineon IGBT distributor）
- `[品牌名]+[产品名]+选型`（如：Infineon IGBT 选型）
- `[品牌名]+[产品名]+代理商`（如：Infineon MCU 代理商）
- `[产品名]+price`（如：IGBT module price）
- `[产品名]+in stock`（如：IGBT module in stock）

**示例：**
```
Infineon IGBT Modules are industry-leading power semiconductors for motor drives, 
renewable energy, and EV applications. As an authorized Infineon IGBT distributor, 
LiTong offers the complete EconoDUAL and PrimePACK series with competitive pricing 
and technical support. Whether you need Infineon IGBT 选型 guidance or immediate 
shipment from stock, our FAE team can help you find the optimal solution.
```

#### 选型指南入口（selectionGuide）

每个产品分类必须配置选型指南入口：

```json
{
  "selectionGuide": {
    "title": "如何选择最适合的 [产品类别]？",
    "description": "根据您的应用需求，快速找到最合适的产品型号",
    "articleId": "how-to-select-[category]",
    "articleLink": "/[brand-name]/support/how-to-select-[category].html"
  }
}
```

**要求：**
- `articleId` 必须对应 support.json 中存在的文章
- 文章标题格式：《如何选择最适合您项目的 [品牌名] [产品类别]？》
- 描述要简洁明了，突出价值

---

### 型号详情页规范

#### FAE 代理商点评（faeReview）

每个产品必须包含原创的 FAE 专业点评：

```json
{
  "faeReview": {
    "author": "张伟",
    "title": "Senior FAE - Power Electronics",
    "content": "FF300R12ME4 是工业驱动应用的经典选择。在实际项目中，我发现这款模块在 5-20kHz 开关频率下表现尤为出色，Vce(sat) 的温度稳定性很好。对于需要频繁启停的伺服系统，建议配合 1ED020I12-F2 驱动器使用，可以获得更好的保护特性。",
    "highlight": "工业驱动的经典选择，5-20kHz 频段表现优异"
  }
}
```

**内容要求：**
- **原创性**：基于 FAE 实际项目经验撰写，禁止复制粘贴
- **主观色彩**：包含个人观点和偏好（如"我个人推荐..."、"在实际项目中我发现..."）
- **具体场景**：提及具体应用条件和注意事项
- **实用建议**：提供选型、设计、调试的实用建议
- **字数**：200-300 字
- **highlight**：一句话总结核心观点（30-50 字）

**内容结构：**
1. **总体评价** - 对该产品的整体评价和定位
2. **应用洞察** - 在特定场景下的表现和注意事项
3. **搭配建议** - 推荐的配套产品或替代方案
4. **避坑指南** - 使用该产品的常见误区

#### 替代料号（alternativeParts）

提供该产品的替代选项：

```json
{
  "alternativeParts": [
    {
      "partNumber": "FF450R12ME4",
      "brand": "Infineon",
      "reason": "更高电流等级（450A），适合大功率应用",
      "link": "/infineon/products/ff450r12me4_b11.html"
    },
    {
      "partNumber": "SKM300GB12T4",
      "brand": "Semikron",
      "reason": "性价比更高的替代方案，兼容性好",
      "link": "/semikron/products/skm300gb12t4.html"
    }
  ]
}
```

**替代类型：**
- **同品牌升级**：更高性能等级（如 300A → 450A）
- **同品牌降级**：性价比优化版本
- **跨品牌替代**：其他品牌的兼容产品
- **停产替代**：针对老型号的升级替代

**要求：**
- 至少提供 1-2 个替代选项
- 说明替代原因和适用场景
- 链接到对应产品详情页

#### 配套料号（companionParts）

推荐配套使用的产品：

```json
{
  "companionParts": [
    {
      "partNumber": "1ED020I12-F2",
      "category": "Gate Driver",
      "description": "推荐驱动器，2A 输出，1200V 隔离",
      "link": "/infineon/products/1ed020i12-f2.html"
    },
    {
      "partNumber": "IDW30E65D1",
      "category": "Diode",
      "description": "配套续流二极管，650V/30A",
      "link": "/infineon/products/idw30e65d1.html"
    }
  ]
}
```

**配套类别：**
- **Gate Driver** - 栅极驱动器
- **Diode** - 二极管/续流二极管
- **Capacitor** - 电容器
- **Sensor** - 传感器
- **MCU** - 微控制器
- **Power Supply** - 电源芯片

**要求：**
- 至少提供 2-3 个配套产品
- 说明配套原因和协同优势
- 链接到对应产品详情页

---

### 产品参数规范

**重要**：产品参数字段必须是简单类型（字符串、数字），不能是对象或数组。

✅ 正确示例：
```json
{
  "partNumber": "SKM100GB12T4",
  "voltage": "1200V",
  "current": "100A",
  "package": "SEMiTRANS 4",
  "vceSat": "2.1V @ 100A, 25°C"
}
```

❌ 错误示例（不要这样做）：
```json
{
  "partNumber": "SKM100GB12T4",
  "technicalSpecs": {
    "voltage": "1200V",
    "current": "100A"
  },
  "alternatives": ["产品 1", "产品 2"],
  "matchingProducts": ["产品 A", "产品 B"]
}
```

### 内容差异化要求

- **产品分类**：不同品牌的产品分类应不同（如 Infineon 有 MCU，Semikron 没有）
- **参数字段**：根据产品类型定义不同的参数字段名
- **产品描述**：每个产品必须有独特的描述，不能复制

---

## 4. solutions.json 要求

### 结构

```json
{
  "solutions": [
    {
      "id": "解决方案 ID（小写，用连字符）",
      "name": "解决方案名称",
      "description": "解决方案描述（150-300 字）",
      "longDescription": "解决方案详细描述（300-500 字）",
      "applications": [
        {
          "name": "应用名称",
          "description": "应用描述",
          "features": ["特性 1", "特性 2", "特性 3"]
        }
      ],
      "benefits": ["优势 1", "优势 2", "优势 3", "优势 4", "优势 5"],
      "coreAdvantages": ["核心优势 1", "核心优势 2", "核心优势 3", "核心优势 4", "核心优势 5"],
      "bomList": [
        {
          "partNumber": "产品型号",
          "description": "产品描述",
          "link": "/[brand-name]/products/[product-id].html",
          "quantity": 数量
        }
      ],
      "technicalSpecs": {
        "key1": "value1",
        "key2": "value2"
      },
      "seoKeywords": "关键词 1, 关键词 2, 关键词 3",
      "faqs": [
        {
          "question": "问题",
          "answer": "答案",
          "decisionGuide": "决策引导",
          "keywords": ["关键词"]
        }
      ],
      "customerCases": [
        {
          "customerName": "客户名称（可匿名）",
          "industry": "所在行业",
          "application": "应用场景",
          "challenge": "面临挑战（100-150字）",
          "solution": "解决方案（150-200字）",
          "results": "实施效果（100-150字）",
          "quote": "客户评价（可选）",
          "products": ["使用的产品型号1", "产品型号2"]
        }
      ],
      "faeInsights": {
        "author": {
          "name": "FAE姓名",
          "title": "职位",
          "experience": "从业年限"
        },
        "insight": "FAE个人见解（300-500字）",
        "logic": "见解逻辑/决策框架（200-300字）",
        "keyTakeaways": ["要点1", "要点2", "要点3"],
        "commonPitfalls": ["常见误区1", "常见误区2"],
        "bestPractices": ["最佳实践1", "最佳实践2", "最佳实践3"]
      }
    }
  ]
}
```

### 必填字段说明

| 字段 | 说明 | 重要性 |
|------|------|--------|
| `id` | 唯一标识，用于生成 URL | 必须 |
| `name` | 解决方案显示名称 | 必须 |
| `description` | 简短描述，列表页显示 | 必须 |
| `longDescription` | 详细描述，详情页显示 | 必须 |
| `applications` | 应用案例数组 | 必须 |
| `benefits` | 优势列表 | 必须 |
| `coreAdvantages` | 核心优势标签（用于列表页显示） | **必须** |
| `bomList` | 物料清单，关联产品 | **必须** |
| `technicalSpecs` | 技术规格对象 | **必须** |
| `seoKeywords` | SEO 关键词 | 必须 |
| `faqs` | 解决方案详情页 FAQ | 必须 |
| `customerCases` | 客户案例数组（至少1个） | **新增必须** |
| `faeInsights` | FAE 专业见解 | **新增必须** |

### 客户案例规范（customerCases）

每个解决方案必须包含 **1-3 个真实客户案例**，结构如下：

| 字段 | 要求 | 说明 |
|------|------|------|
| `customerName` | 必填 | 客户公司名称，可匿名处理（如"某知名变频器厂商"） |
| `industry` | 必填 | 客户所在行业（如：工业自动化、新能源、轨道交通） |
| `application` | 必填 | 具体应用场景 |
| `challenge` | 必填，100-150字 | 客户面临的技术/业务挑战 |
| `solution` | 必填，150-200字 | 采用的解决方案和关键产品 |
| `results` | 必填，100-150字 | 量化实施效果（效率提升XX%、成本降低XX%等） |
| `quote` | 可选 | 客户评价/反馈 |
| `products` | 必填 | 该案例使用的产品型号列表 |

**案例编写要求：**
- 案例必须真实可信，基于实际项目经验
- 突出技术难点和解决方案的专业性
- 使用具体数据和量化指标
- 体现 LiTong 的技术支持价值

### FAE 专业见解规范（faeInsights）

每个解决方案必须包含 **FAE 专业见解**，结构如下：

| 字段 | 要求 | 说明 |
|------|------|------|
| `author` | 必填 | FAE 信息（name, title, experience） |
| `insight` | 必填，300-500字 | FAE 对该应用场景的深度见解 |
| `logic` | 必填，200-300字 | 见解逻辑/决策框架 |
| `keyTakeaways` | 必填，3-5条 | 核心要点 |
| `commonPitfalls` | 必填，2-3条 | 常见误区/避坑指南 |
| `bestPractices` | 必填，3-5条 | 最佳实践建议 |

**见解内容要求：**

**1. FAE 个人见解（insight）**
- 基于实际项目经验的深度洞察
- 技术选型的关键考量因素
- 行业趋势和技术发展方向
- 与竞品方案的对比分析
- 具体技术难点的解决思路

**2. 见解逻辑/决策框架（logic）**
- 清晰的决策树或评估框架
- 选型步骤和优先级
- 关键参数的选择逻辑
- 风险评估和应对策略
- 示例决策流程：
  ```
  需求分析 → 功率等级确定 → 拓扑选择 → 
  器件选型 → 热设计验证 → 驱动设计 → 系统测试
  ```

**3. 核心要点（keyTakeaways）**
- 简明扼要的技术要点
- 便于用户快速掌握关键信息
- 每条控制在 30-50 字

**4. 常见误区（commonPitfalls）**
- 用户常犯的错误
- 设计中的陷阱
- 选型时的盲点

**5. 最佳实践（bestPractices）**
- 经过验证的设计建议
- 优化方案
- 调试技巧

### 内容差异化要求

- **解决方案类型**：根据品牌实际应用领域定制
- **BOM 清单**：必须使用该品牌的产品型号
- **技术规格**：根据解决方案实际情况编写
- **客户案例**：基于真实项目，不同解决方案案例不重复
- **FAE 见解**：针对不同应用场景提供差异化专业见解

---

## 5. support.json 要求

### 结构

```json
{
  "resources": [
    {
      "id": "资源分类 ID",
      "name": "资源分类名称",
      "description": "分类描述",
      "items": [
        {
          "title": "资源标题",
          "type": "PDF/ZIP/EXE",
          "size": "文件大小",
          "url": "下载链接"
        }
      ]
    }
  ],
  "articles": [
    {
      "id": "文章 ID（小写，用连字符）",
      "title": "文章标题",
      "summary": "文章摘要（100-200 字）",
      "content": "文章内容（Markdown 格式，1000-3000 字）",
      "category": "文章分类",
      "tags": ["标签 1", "标签 2"],
      "date": "YYYY-MM-DD",
      "author": { 
        "name": "作者名",
        "title": "职位",
        "experience": "从业年限",
        "expertise": ["专长领域1", "专长领域2"]
      },
      "publishDate": "YYYY-MM-DD",
      "relatedArticles": ["相关文章 ID 1", "相关文章 ID 2", "相关文章 ID 3"],
      "faeInsights": {
        "insight": "FAE 对该技术主题的专业见解（300-500字）",
        "logic": "技术决策逻辑/选型框架（200-300字）",
        "keyTakeaways": ["核心要点1", "核心要点2", "核心要点3"],
        "commonPitfalls": ["常见误区1", "常见误区2"],
        "bestPractices": ["最佳实践1", "最佳实践2", "最佳实践3"],
        "troubleshootingTips": ["排错技巧1", "排错技巧2"]
      },
      "customerCases": [
        {
          "customerName": "客户名称（可匿名）",
          "industry": "所在行业",
          "application": "应用场景",
          "problem": "遇到的技术问题（100-150字）",
          "diagnosis": "问题诊断过程（100-150字）",
          "solution": "解决方案（150-200字）",
          "results": "解决效果（100-150字）",
          "lessons": "经验总结（可选）"
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "问题",
      "answer": "答案"
    }
  ],
  "contact": {
    "title": "联系标题",
    "description": "联系描述",
    "methods": [
      {
        "type": "phone/email/hours",
        "label": "标签",
        "value": "值"
      }
    ]
  }
}
```

### 必填字段说明

**articles 数组每一项必须包含：**

| 字段 | 说明 | 重要性 |
|------|------|--------|
| `id` | 唯一标识，用于生成 URL | 必须 |
| `title` | 文章标题 | 必须 |
| `summary` | 文章摘要 | 必须 |
| `content` | 文章内容（Markdown） | 必须 |
| `category` | 文章分类 | 必须 |
| `tags` | 标签数组 | 必须 |
| `date` | 日期 | 必须 |
| `author` | 作者对象，扩展包含 `title`, `experience`, `expertise` | **必须** |
| `publishDate` | 发布日期 | **必须** |
| `relatedArticles` | 相关文章 ID 数组（至少 3 个） | **必须** |
| `faeInsights` | FAE 专业见解对象 | **新增必须** |
| `customerCases` | 客户案例数组（至少 1 个） | **新增必须** |

### 作者信息规范（author）

| 字段 | 要求 | 说明 |
|------|------|------|
| `name` | 必填 | FAE 姓名 |
| `title` | 必填 | 职位（如：Senior FAE - Power Electronics） |
| `experience` | 必填 | 从业年限（如：12+ years） |
| `expertise` | 必填 | 专长领域数组（如：["IGBT Applications", "Motor Drive Design"]） |

### FAE 专业见解规范（faeInsights）

技术支持文章必须包含 **FAE 专业见解**，结构如下：

| 字段 | 要求 | 说明 |
|------|------|------|
| `insight` | 必填，300-500字 | 对该技术主题的深度专业见解 |
| `logic` | 必填，200-300字 | 技术决策逻辑/选型框架 |
| `keyTakeaways` | 必填，3-5条 | 核心要点，便于快速掌握 |
| `commonPitfalls` | 必填，2-3条 | 常见误区/避坑指南 |
| `bestPractices` | 必填，3-5条 | 最佳实践建议 |
| `troubleshootingTips` | 必填，2-3条 | 排错技巧和诊断方法 |

**见解内容要求：**

**1. FAE 个人见解（insight）**
- 基于实际项目经验的深度技术洞察
- 技术选型的关键考量因素和权衡点
- 与竞品技术的对比分析
- 具体技术难点的解决思路
- 行业发展趋势和技术演进方向

**2. 技术决策逻辑（logic）**
- 清晰的选型决策树或评估框架
- 参数选择的优先级和逻辑
- 设计验证的步骤和方法
- 风险评估和应对策略
- 示例决策流程：
  ```
  需求分析 → 关键参数识别 → 方案对比 → 
  原型验证 → 优化迭代 → 量产导入
  ```

**3. 核心要点（keyTakeaways）**
- 简明扼要的技术要点总结
- 便于用户快速掌握关键信息
- 每条控制在 30-50 字

**4. 常见误区（commonPitfalls）**
- 设计中的常见错误
- 选型时的典型盲点
- 调试中的陷阱

**5. 最佳实践（bestPractices）**
- 经过验证的设计建议
- 优化方案和技巧
- 测试验证方法

**6. 排错技巧（troubleshootingTips）**
- 常见问题的诊断方法
- 故障排查步骤
- 快速定位问题的技巧

### 客户案例规范（customerCases）

技术支持文章必须包含 **1-2 个真实客户案例**，结构如下：

| 字段 | 要求 | 说明 |
|------|------|------|
| `customerName` | 必填 | 客户名称，可匿名（如"某工业变频器厂商"） |
| `industry` | 必填 | 所在行业 |
| `application` | 必填 | 具体应用场景 |
| `problem` | 必填，100-150字 | 遇到的技术问题描述 |
| `diagnosis` | 必填，100-150字 | 问题诊断和分析过程 |
| `solution` | 必填，150-200字 | 解决方案和实施步骤 |
| `results` | 必填，100-150字 | 解决效果和性能提升 |
| `lessons` | 可选 | 经验总结和技术洞察 |

**案例编写要求：**
- 基于真实技术支持案例
- 突出问题的复杂性和解决的专业性
- 展示 LiTong FAE 的技术支持价值
- 使用具体技术参数和量化指标
- 体现从问题到解决的完整过程

### 内容要求

- **文章主题**：与品牌产品和技术相关
- **技术深度**：提供有价值的技术内容
- **产品关联**：文章中提到的产品型号必须存在于 products.json 中
- **FAE 权威性**：通过详细的 author 信息建立专业可信度
- **实用性**：FAE 见解和案例必须具有实际指导价值

---

## 6. FAQ 数据要求

FAQ 数据**集成在各页面的 JSON 文件中**，而不是单独的 faqs.json。

### FAQ 数据结构

每个 FAQ 条目包含以下字段：

```json
{
  "question": "自然、用户真实搜索的问题（15-35 字）",
  "answer": "专业、深度、有实用价值的回答（250-500 字）",
  "decisionGuide": "1-2 句明确的决策引导句（帮助用户选型、询价、联系我们）",
  "keywords": ["长尾关键词1", "长尾关键词2"]
}
```

### FAQ 分布位置

| 页面类型 | 所在 JSON 文件 | 字段路径 | FAQ 数量 | 内容重点 |
|---------|---------------|---------|---------|---------|
| **about-brand** | `brand.json` | `faqs` | 4-8 条 | 品牌背景、授权资质、公司实力、与竞品差异、为什么选择我们 |
| **products-list** | `products.json` | `faqs` | 8-12 条 | 产品大类整体介绍、如何选择合适的大类、不同类别区别、常见应用场景对比 |
| **product-category** | `products.json` | `categories[].faqs` | 10-16 条 | 该分类整体选型指南、表格参数解读、如何高效使用表格、型号差异对比、封装选择 |
| **product-detail** | `products.json` | `categories[].products[].faqs` | 3-6 条 | 针对具体型号的选型细节、实际应用案例、安装注意事项、与竞品对比、真假辨别 |
| **solutions-list** | `solutions.json` | `faqs` | 8-14 条 | 不同应用场景的整体方案对比、如何根据项目特点选择解决方案 |
| **solution-detail** | `solutions.json` | `solutions[].faqs` | 3-6 条 | 针对具体应用场景的系统集成要点、注意事项、真实案例分析、推荐产品搭配 |
| **support-list** | `support.json` | `faqs` | 12-18 条 | 授权验证、采购流程、报价方式、交期、物流、真假货鉴别、技术支持、保修政策 |

### 各页面类型 FAQ 详细规范

#### 1. About Brand 页面（品牌介绍页）

- **生成 4-8 条 FAQ**
- **重点**：品牌背景、官方授权资质、公司实力、与竞品差异、为什么选择我们作为代理等信任类问题
- **答案长度**：250-450 字
- **每条必须包含 decisionGuide**（引导用户进入产品列表页或联系我们）

#### 2. 产品列表页

- **生成 8-12 条 FAQ**（页面实际展示 6-10 条）
- **重点**：产品大类整体介绍、如何选择合适的大类、不同类别区别、常见应用场景对比
- **答案长度**：250-400 字
- **每条必须包含 decisionGuide**（引导用户点击进入具体二级分类页）

#### 3. 二级产品分类页

- **生成 10-16 条 FAQ**（页面实际展示 8-12 条）
- **重点**：该分类整体选型指南、表格中参数解读、如何高效使用表格、型号差异对比、封装/外形选择、适用场景推荐
- **答案长度**：300-500 字
- **每条必须包含较强 decisionGuide**（引导用户点击具体型号进入详情页，或提供项目参数让我们帮忙选型）
- **FAQ 要与表格形成互补**，帮助用户更好理解和对比表格内容

#### 4. 型号详情页

- **生成 3-6 条 FAQ**（严格控制数量）
- **重点**：针对这个具体型号的选型细节、实际应用案例、安装注意事项、与其他型号/竞品对比、真假辨别、典型参数解读等
- **答案长度**：250-400 字
- **每条必须包含 decisionGuide**（推荐使用场景、引导询价或下载资料）
- **FAQ 要补充规格表之外的实用信息和决策支持**，不要重复页面已有参数表

#### 5. Solutions 列表页

- **生成 8-14 条 FAQ**（实际展示 6-10 条）
- **重点**：不同应用场景的整体方案对比、如何根据项目特点选择解决方案
- **答案长度**：250-450 字
- **每条必须包含 decisionGuide**（引导进入具体解决方案详情页）

#### 6. Solutions 详情页

- **生成 3-6 条 FAQ**（严格控制）
- **重点**：针对这个具体应用场景的系统集成要点、注意事项、真实案例分析、推荐产品搭配
- **答案长度**：250-450 字
- **每条必须包含 decisionGuide**（引导联系获取完整定制方案）

#### 7. Support 列表页

- **生成 12-18 条 FAQ**（实际展示 10-15 条）
- **重点**：授权验证、采购流程、报价方式、交期、物流、真假货鉴别、技术支持、保修政策、退换货等
- **答案长度**：200-450 字
- **每条必须包含强 decisionGuide**（引导立即询价、提交表单、联系销售）

### 内容要求

**Answer 结构（4段式）：**
1. **直接答案** - 开篇直接回答用户问题
2. **解释/对比** - 详细解释技术原理或与其他方案对比
3. **实用建议** - 提供具体的选型或应用建议
4. **decisionGuide** - 明确的行动引导

**通用要求：**
- 内容必须真实、专业、技术深度高
- 避免硬广，体现"授权代理"信任感和专业服务
- 自然融入长尾关键词，但不堆砌
- 每条 FAQ 必须包含 decisionGuide 引导用户下一步行动
- 不同页面类型的 FAQ 内容要有差异化，避免重复
- 总输出为清晰分开的多个 JSON 对象，便于直接导入静态网站

### 示例

参考文件：
- `data/infineon/brand.json` - about-brand FAQ
- `data/infineon/products.json` - products-list、product-category、product-detail FAQ
- `data/infineon/solutions.json` - solutions-list、solution-detail FAQ
- `data/infineon/support.json` - support-list FAQ

---

## 7. news.json 要求

### 结构

```json
{
  "articles": [
    {
      "id": "新闻 ID",
      "title": "新闻标题",
      "category": "公司新闻/行业动态",
      "publishDate": "YYYY-MM-DD",
      "author": "作者名",
      "summary": "新闻摘要",
      "content": "新闻内容（Markdown 格式）",
      "tags": ["标签 1", "标签 2"]
    }
  ]
}
```

---

## 8. 生成命令

```bash
# 生成单个品牌
npm run generate:brand [brand-name]

# 生成所有品牌
npm run generate:all
```

---

## 9. 检查清单

新增品牌前，请确认：

- [ ] brand.json 包含所有必填字段
- [ ] 品牌描述是原创的，与其他品牌不同
- [ ] products.json 中的产品参数字段都是简单类型
- [ ] 每个产品分类都有 `products` 数组（至少 2 个产品）
- [ ] 每个产品分类都有 `selectionGuide` 选型指南入口
- [ ] 每个产品分类描述自然地融入 SEO 关键词（品牌名+产品名+distributor/选型/代理商）
- [ ] 每个产品都有 `shortDescription`（80-120字符）
- [ ] 每个产品都有 `descriptionParagraphs` 数组（3段，每段100字符内）
- [ ] descriptionParagraphs 简洁无冗余，不是长段落拆分
- [ ] 每个产品都有 `faeReview` 代理商点评
- [ ] 每个产品都有 `alternativeParts` 替代料号（至少 1 个）
- [ ] 每个产品都有 `companionParts` 配套料号（至少 2 个）
- [ ] 产品分类和参数字段与其他品牌有差异化
- [ ] solutions.json 中的每个解决方案都有 `coreAdvantages` 数组
- [ ] solutions.json 中的每个解决方案都有 `bomList` 数组（至少 2 个产品）
- [ ] solutions.json 中的每个解决方案都有 `technicalSpecs` 对象
- [ ] solutions.json 中的 BOM 使用该品牌的产品型号
- [ ] **solutions.json 中的每个解决方案都有 `customerCases` 数组（至少 1 个）**
- [ ] **solutions.json 中的每个解决方案都有 `faeInsights` 对象**
- [ ] support.json 中的每篇文章都有 `author` 对象（含 `name`, `title`, `experience`, `expertise`）
- [ ] support.json 中的每篇文章都有 `publishDate` 字段
- [ ] support.json 中的每篇文章都有 `relatedArticles` 数组（至少 3 个）
- [ ] **support.json 中的每篇文章都有 `faeInsights` 对象**
- [ ] **support.json 中的每篇文章都有 `customerCases` 数组（至少 1 个）**
- [ ] support.json 中的文章与品牌产品相关
- [ ] **FAQ 数据包含 7 个页面类型的 FAQ**
- [ ] **每个 FAQ 包含 question, answer, decisionGuide, keywords 字段**
- [ ] **FAQ 内容专业、有深度，符合各页面类型定位**
- [ ] 所有 JSON 文件格式正确，无语法错误
- [ ] SEO 元数据（title, description, keywords）已填写

---

## 10. 常见错误

### 错误 1：产品参数使用对象类型

❌ 错误：
```json
{
  "technicalSpecs": {
    "voltage": "1200V"
  }
}
```

✅ 正确：
```json
{
  "voltage": "1200V"
}
```

### 错误 2：解决方案使用其他品牌的数据

❌ 错误：Semikron 的 solutions 使用 Infineon 的产品型号

✅ 正确：每个品牌的 solutions 只使用该品牌的产品

### 错误 3：内容完全复制

❌ 错误：直接复制 Infineon 的描述到其他品牌

✅ 正确：根据每个品牌的实际情况编写独特内容

---

## 11. 参考示例

- Infineon: `data/infineon/` (包含完整的 faqs.json 示例)
- Semikron: `data/semikron/`

---

## 12. 已发现的模板问题和修复

### 问题 1：solution-detail.html 硬编码静态内容

**问题**：模板使用硬编码的 "EV Charger Solution" 而不是动态数据

**修复**：重写模板使用 `<%= solution.title %>` 等模板变量

### 问题 2：product-category.html 硬编码品牌名

**问题**：标题硬编码为 "Infineon Products"

**修复**：改为 `<title><%= brand.displayName %> Products | <%= category.name %></title>`

### 问题 3：brand-about.html 硬编码 canonical URL

**问题**：`<link rel="canonical" href="https://ic-distributor.com/infineon/">`

**修复**：改为 `<link rel="canonical" href="https://ic-distributor.com/<%= brand.name.toLowerCase() %>/">`

### 问题 4：产品参数使用对象类型

**问题**：`technicalSpecs`, `orderingInfo`, `alternatives`, `matchingProducts` 是对象或数组，不应该在表格中显示

**修复**：模板中排除这些字段，只收集简单类型字段（字符串、数字、布尔值）

---

## 13. 模板检查清单

创建新品牌模板时，请确认：

- [ ] 所有页面标题使用 `<%= brand.displayName %>` 而不是硬编码品牌名
- [ ] 所有链接使用 `/\<%= brand.name.toLowerCase() %>/` 而不是 `/infineon/`
- [ ] canonical URL 使用动态品牌名
- [ ] 解决方案详情页使用 `<%= solution.title %>` 等模板变量
- [ ] 产品详情页使用 `<%= product.partNumber %>` 等模板变量
- [ ] 技术支持页使用 `<%= article.title %>` 等模板变量
- [ ] 产品参数字段只使用简单类型（字符串、数字、布尔值）
- [ ] 排除对象类型字段（technicalSpecs, orderingInfo, alternatives, matchingProducts）

---

**文档版本**: 1.6  
**最后更新**: 2026 年 4 月 1 日  
**已修复问题**: 4 个模板硬编码问题  
**新增内容**: 
- 产品描述规范（shortDescription, descriptionParagraphs）
- FAQ 数据要求及 7 个页面类型的详细规范（合并原 faq.md）
- 解决方案详情页客户案例和 FAE 见解规范
- 技术支持详情页客户案例和 FAE 见解规范
- 产品分类页选型指南入口和 SEO 关键词规范
- 型号详情页 FAE 代理商点评、替代料号、配套料号规范
