---
name: seo-geo-optimizer
description: >
  7-step SEO/GEO workflow for BeiLuo (core-distributor.com).
  DEFAULT for ANY brand task: content, data, optimization, audit.
  Triggers: 优化品牌, SEO/GEO, 审计, 新增品牌, 产品数据, ranking/traffic
  drop, SEO audit, content quality, 关键词, 竞品, SERP, schema, sitemap,
  brand check, data fix. Integrates 12 SEO/GEO sub-skills.
  Also "brand", "distributor", "代理商", "电子元器件". Chinese: SEO优化,
  GEO优化, 关键词研究, 竞品分析, 产品检查, 数据修复, 结构化数据.
---

# BeiLuo SEO/GEO Optimizer

Optimizes `core-distributor.com/[brand]/` subdirectory pages alphabetically one brand at a time. **Working dir**: `C:\Users\ymlt\Desktop\3`. **Data**: `data/[brand]/*.json` (5 files per brand). **Output**: regenerated `output/[brand]/` via build scripts.

**Bundled**: `../../references/test-prompts.json` (validation), `../../references/checklist.md` (audit checklist), `../../scripts/validate-skill.js`, `../../scripts/brand-data-check.js`, `../../scripts/seo-readiness-report.js`, `../../scripts/test-integration.js`, `../../scripts/audit.js`, `../../scripts/add-jsonld-schema.js`. Run `npm run audit` for health check. Run `npm run schema -- --all` for JSON-LD schemas.

---

## 7 Iron Rules (七条铁律)

| # | Rule | Violation consequence |
|---|------|---------------------|
| 1 | **One brand at a time**, alphabetical order | Data corruption across brands |
| 2 | **Update memory after EVERY step** | Lost optimization state |
| 3 | **Save intermediate results** to `.project-memory/` | Cannot roll back |
| 4 | **JSON is the only source** — never hand-edit `output/` | Changes lost on rebuild |
| 5 | **Regenerate after every JSON change** via `node scripts/generate.js --brand [brand]` | Stale output |
| 6 | **Templates hold structure + styles only** | Duplicate maintenance |
| 7 | **Only modify `data/`** — `output/` is a build artifact | Irrecoverable data loss |

---

## Quick Start

Before starting: run `npm run audit` for a comprehensive health check (skill integrity + brand data + SEO state + integration test). What the user says → what to do:

| User says | Execute |
|-----------|---------|
| "优化 brand X" / "do SEO for brand X" | **Steps 1→7** (full optimization) |
| "审计 brand X" / "check SEO for brand X" | **Steps 2 + 4 + 6** (audit + report) |
| "加新品牌 brand X" / "added brand X" | **Steps 1 + 2 + 6** (setup + research + report) |
| "brand X 有什么问题" / "missing products" | **Step 1** (read data → report) |
| "关键词研究" / "keyword research only" | **Step 2** only |
| Unclear | **Step 1** preview → ask user |

Partial execution: still update memory. Pick up where you left off next time.

Before starting: run `npm run check:brands` for data completeness, `node scripts/seo-readiness-report.js` for current SEO state across all brands.

### Error Handling

| Scenario | Response |
|----------|----------|
| `data/[brand]/` not found | Warn "品牌 [brand] 数据目录不存在。跳过该品牌。" |
| `brand.json` missing/invalid | Warn + skip + log to memory |
| Build script fails | Show error output, stop, ask user to fix |
| Brand already done | Show previous scores → ask "重新优化还是跳过？" |
| User skips ahead out of order | Warn "当前应该优化 [expected_brand]。确认跳过？" — record skip in memory |
| Live site unreachable (timeout/5xx) | Note: "live site unreachable, using local data only". Continue with file-based audit. Flag for user. |
| Memory file doesn't exist | Create it with header row and HOT brand entry |
| JSON has unexpected fields/structure | Validate JSON.parse() first. If structure wrong, flag and skip that file |
| No product categories found | Note: "brand has no product categories — likely new/empty brand" |

---

## 7-Step Workflow

> Execute **sequentially**. PAUSE at each step's checkpoint for user confirmation before continuing.

### Step 1: Memory Management — Initialize Project Memory
> **INPUT**: `data/[brand]/*.json` + `data/.project-memory/seo-optimization-project.md`
> **OUTPUT**: Updated memory file with brand summary
> **SKILLS**: `memory-management`

**Action**: Run `npm run check:brands -- --json | grep "\"brand\""` for a quick compliance overview. Then read all 5 data files (`brand.json`, `products.json`, `solutions.json`, `support.json`, `news.json`). Update `seo-optimization-project.md` with brand info, progress, keywords. Verify alphabetical order against previous brand.

> **⏸ 检查点 CP1**: Show user brand summary → "已读取 [brand] 数据（[N] 个产品，[N] 篇文章）。确认继续？"

**Memory update format**:
```markdown
## Active Brand: [brand]
- Progress: Step 1 ✅, Step 2-7 ⬜
- Data: `brand.json` (N lines), `products.json` (N products), `solutions.json` (N), `support.json` (N), `news.json` (N)
- Keywords: `[brand] distributor`, `[brand] [product]`, ...
```

---

### Step 2: Research — Load SEO/GEO Analysis Skills
> **INPUT**: Brand data from Step 1 + live `core-distributor.com/[brand]/`
> **OUTPUT**: `[brand]_step2_research_[date].md`
> **SKILLS**: `keyword-research`, `serp-analysis`, `competitor-analysis`, `content-gap-analysis`

**Action**: Load all 4 skills. Build 4-layer keyword matrix (`[brand] + distributor`). Analyze SERP features, competitors (DigiKey/Mouser/Arrow + domestic), and content gaps. Save report.

**Keyword matrix**:
| Layer | Intent | Example |
|-------|--------|---------|
| L1 Core | Transactional | `3peak distributor`, `3peak distributor china` |
| L2 Product+brand | Transactional | `3peak op amp distributor` |
| L3 Selection+support | Informational | `3peak selection guide` |
| L4 Long-tail | Mixed | `3peak automotive grade distributor` |

Map: L1→homepage, L2→product pages, L3→support, L4→blog.

> **⏸ 检查点 CP2**: Show research findings → "已找到 [N] 个关键词，[N] 个内容缺口。确认继续优化？"

---

### Step 3: Optimize — Execute Optimizations
> **INPUT**: Research report + `data/[brand]/*.json`
> **OUTPUT**: Modified JSON files + `[brand]_step3_optimize_[date].md`
> **SKILLS**: `meta-tags-optimizer`, `technical-seo-checker`, `internal-linking-optimizer`, `content-refresher`

**Action**: Load all 4 skills. Use `../../references/checklist.md` for verification.

**JSON SEO fields to check**:
| File | Path |
|------|------|
| `products.json[].seo` | `seoTitle`, `seoDescription` |
| `solutions.json[].seo` | `seoTitle`, `seoDescription` |
| `support.json[].seo` | `seoTitle`, `seoDescription` |
| `brand.json.seo` | `seoTitle`, `seoDescription` |

Missing/empty → HIGH priority.

**On-Page rules**: Title 50-60 chars + `[brand] distributor`. Meta desc 150-160 chars + CTA. H1 unique. Canonical `https://www.core-distributor.com/[brand]/`. Keyword density 1-2%.

**Technical + Security**:
```bash
curl -sI "https://www.core-distributor.com/.project-memory/seo-optimization-project.md"  # HTTP 200 = CRITICAL
curl -s "https://www.core-distributor.com/robots.txt" | grep -E "(Disallow|ClaudeBot|GPTBot)"
curl -s "https://www.core-distributor.com/sitemap.xml" | grep -oP '<loc>[^<]+</loc>' | head -20
```

**Internal linking**: `Home → /[brand]/ → /products/ → product detail` with breadcrumbs, recommendations.

> **⏸ 检查点 CP3 (before JSON edit)**: "将修改 [list fields]。确认执行？" → after user OK, edit JSON files, then regenerate.

---

### Step 4: Cross-cutting — Quality Audits
> **INPUT**: Optimized JSON + live site
> **OUTPUT**: `[brand]_step4_audit_[date].md` with CORE-EEAT, CITE, entity scores
> **SKILLS**: `content-quality-auditor`, `domain-authority-auditor`, `entity-optimizer`

**Action**: Load all 3 skills.
- CORE-EEAT: 6 dims × 100 pts. Veto items → block.
- CITE: 4 dims × 100 pts. Grade A/B/C/D.
- Entity: verify Organization, Product, BreadcrumbList, TechArticle, NewsArticle schemas. Run `npm run schema -- [brand]` to auto-generate schema.json from brand data (or `npm run schema -- --all` for all brands). Check that schema.json is being read by the template engine during HTML generation.

---

### Step 5: Memory Management — Update
> **INPUT**: Reports from Steps 2-4
> **OUTPUT**: Updated `seo-optimization-project.md` (brand→ARCHIVE, next→HOT)
> **SKILLS**: `memory-management`

Record scores (CORE-EEAT/CITE before→after), issues fixed, remaining items, "what to watch" for next brand.

---

### Step 6: Generate Optimization Report
> **INPUT**: All step reports + score deltas
> **OUTPUT**: `[brand]_final_report_[date].md`

Template:
```markdown
## Executive Summary
- Brand, Date, Scores: before → after
## Pre-Optimization State
- Technical SEO, CORE-EEAT: N/100, CITE: N/100
## Operations Performed
- Step 1-4: briefs
## Post-Optimization State with deltas
## Top 5 Improvements
## Recommended Follow-Ups (P1, P2)
## Keyword List with priorities
## Appendix: files modified
```

---

### Step 7: Generate Output Site
> **INPUT**: Modified `data/[brand]/*.json`
> **OUTPUT**: Regenerated `output/[brand]/` + updated `sitemap.xml`

1. `git diff --name-only` — confirm only `data/` files changed
2. `rm -rf output/[brand]/`
3. `node scripts/generate.js --brand [brand]` (or `npm run build` for full)
4. Validate: `ls output/[brand]/index.html`, `grep "<title>" output/[brand]/index.html`
5. `node scripts/generate-sitemap.js`
6. Commit only if user asks

> **⏸ 检查点 CP4 (before Step 7)**: "将删除 `output/[brand]/` 并重新生成。确认？"
> **⏸ 检查点 CP5 (before commit)**: "将提交 [list files]。确认？"

**Never simulate.** Either run or say: "Did not run `node scripts/generate.js --brand [brand]` because [reason]."

---

## File Locations

| Item | Path |
|------|------|
| Project memory | `data/.project-memory/seo-optimization-project.md` |
| Step 2/3/4 reports | `data/.project-memory/[brand]_step[N]_[action]_[date].md` |
| Final report | `data/.project-memory/[brand]_final_report_[date].md` |
| Brand data | `data/[brand]/*.json` |
| Built output | `output/[brand]/` (never hand-edit) |
