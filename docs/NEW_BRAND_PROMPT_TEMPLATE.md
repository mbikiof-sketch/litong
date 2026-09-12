# 新增品牌 AI 提示词模板

使用此模板可以快速让 AI 理解任务并开始创建新品牌数据。

---

## 🚀 快速提示词（精简版）

```
请为网站新增一个品牌：[品牌名称]

品牌信息：
- 品牌名称：[如 onsemi]
- 品牌显示名：[如 onsemi]
- 品牌类型：[功率半导体 / 轨道交通 / MCU / 传感器]
- 核心产品：[IGBT、MOSFET、SiC 等]
- 主要应用：[汽车、工业、可再生能源等]

请按照 docs/NEW_BRAND_ONBOARDING.md 的 7 步流程完成：
1. 创建品牌目录
2. 制作品牌专用模板（参考 templates/brand-data-template/ 下的差异化模板）
3. 填写品牌数据（替换所有占位符）
4. 验证数据完整性
5. 修复验证错误
6. 生成网站
7. 验证网站页面

注意：
- 替代料号必须满足电气参数 ≥ 被替代型号（参考 docs/ALTERNATIVE_PARTS_GUIDELINES.md）
- FAE 点评要体现品牌专业特色
- 所有内容必须原创，符合 NEW_BRAND_DATA_REQUIREMENTS.md 要求
```

---

## 📝 详细提示词（完整版）

```
## 任务：为 ic-distributor.com 网站新增品牌

### 品牌基本信息
- **品牌名称（URL用）**: [如 onsemi]
- **品牌显示名**: [如 onsemi]
- **品牌定位**: [功率半导体 / 轨道交通 / MCU / 传感器 / 综合]
- **核心产品**: [列出主要产品类别]
- **目标市场**: [汽车 / 工业 / 可再生能源 / 轨道交通等]
- **技术特色**: [品牌核心技术优势]

### 产品信息（请提供）
1. **产品分类**：[如 IGBT Modules、MOSFETs、Gate Drivers]
2. **典型产品型号**：每个分类提供 2-3 个代表型号
3. **关键参数**：电压、电流、封装等
4. **主要应用**：典型应用场景

### 执行步骤

请严格按照以下步骤执行：

#### 步骤 1: 创建品牌目录
```bash
mkdir data/[brand-name]
```

#### 步骤 2: 制作品牌专用模板
- 根据品牌类型选择合适的差异化模板基型：
  - 功率半导体（汽车/工业）→ 参考 Infineon 模板
  - 功率半导体（工业驱动）→ 参考 Semikron 模板
  - 轨道交通 → 参考 CRRC 模板
  - MCU/处理器 → 参考 Infineon MCU 模板

- 从 templates/brand-data-template/ 复制模板到 data/[brand-name]/
- 自定义品牌内容（品牌标识、分类描述、选型指南、配套料号）

#### 步骤 3: 填写品牌数据
创建以下文件并填写内容：

**A. brand.json**
- 品牌基本信息（name, displayName, description, longDescription）
- 核心产品（coreProducts）
- 服务行业（industries）
- 认证资质（certifications）

**B. products.json**
- 产品分类和描述
- 每个产品必须包含：
  - shortDescription（80-120字符）
  - descriptionParagraphs（3段，每段100字符内）
  - faeReview（代理商点评，200-300字）
  - alternativeParts（≥2个，电气参数 ≥ 被替代型号）
  - companionParts（≥3个）
- 每个分类的 selectionGuide

**C. solutions.json**
- 解决方案基本信息
