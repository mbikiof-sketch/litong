---
name: seo-geo-optimizer
description: >
  Full 7-step SEO/GEO optimization workflow for BeiLuo electronic components
  distributor website (core-distributor.com). Optimizes brand subdirectory pages
  alphabetically one brand at a time. Triggers when user mentions: 优化品牌,
  SEO/GEO优化, SEO audit, 审计品牌, 优化网站, ranking drop, traffic drop,
  content optimization, 新增品牌, or any request related to improving search
  engine visibility for electronic component distributor sites. Integrates 12
  SEO/GEO sub-skills: keyword-research, serp-analysis, competitor-analysis,
  content-gap-analysis, content-quality-auditor, domain-authority-auditor,
  entity-optimizer, meta-tags-optimizer, technical-seo-checker,
  internal-linking-optimizer, content-refresher, memory-management. Use this
  skill whenever a user asks about brand SEO, GEO optimization, search ranking
  improvement, or content quality auditing for brand subdirectory sites — even
  if they don't explicitly use the word "SEO". Also triggers on Chinese terms:
  SEO优化, GEO优化, 搜索引擎优化, 关键词研究, 竞品分析.
---

# BeiLuo SEO/GEO Optimizer

## Overview

Optimizes BeiLuo electronic components distributor site (`core-distributor.com`) brand subdirectory pages (`/[brand]/`) one brand at a time, alphabetically. 100+ brands total.

**Brand subdirectory structure**: `core-distributor.com/[brand]/` (e.g., `core-distributor.com/3peak/`)

**Data source**: `data/[brand]/*.json` (brand.json, products.json, solutions.json, support.json, news.json)

**Output**: regenerated into `output/[brand]/` via build scripts.

**Working directory**: `C:\Users\ymlt\Desktop\3`

---

## ⚠️ 7 Iron Rules (七条铁律)

These are absolute guardrails. Violating any causes data loss or optimization failure.

### Rule 1: One Brand at a Time — No Parallel
- ✅ Optimize one brand, finish all 7 steps, then start next
- ✅ Alphabetical order (3peak → adi → aipu → allegro → ...)
- ❌ Never optimize multiple brands in parallel
- ❌ Never skip brands

### Rule 2: Update Memory After Every Step
- ✅ Update `data/.project-memory/seo-optimization-project.md` after EACH step
- ✅ Save intermediate results to `data/.project-memory/[brand]_step[N]_[date].md`
- ❌ Never batch-update memory

### Rule 3: Save Intermediate Results
- Naming: `[brand]_step[N]_[action]_[YYYY-MM-DD].md`, Location: `data/.project-memory/`
- Never overwrite unconfirmed results; never delete intermediate files

### Rule 4: JSON Data Integrity — Never Modify HTML Directly
- ✅ Only modify `data/[brand]/*.json` source files
- ✅ Use scripts to regenerate `output/[brand]/`
- ❌ Never edit `output/[brand]/` files directly

### Rule 5: Regenerate After Every JSON Change
- ✅ After any JSON edit, `node scripts/generate.js --brand [brand]`
- ✅ Verify output is correct after generation
- ❌ Never update output incrementally or manually

### Rule 6: Templates vs Data Separation
- ✅ Templates hold structure + styles only; all dynamic content comes from JSON
- ❌ Never hardcode brand data in templates

### Rule 7: Single Data Source — Only Modify data/
- ✅ `data/` is the ONLY entry point for changes
- ✅ `output/` is a read-only build artifact (delete + regenerate anytime)
- ❌ Never directly edit anything in `output/`

---

## Checkpoint Protocol

Insert user confirmation BEFORE these actions:

| Checkpoint | When | Question to ask user |
|------------|------|---------------------|
| CP1: Confirm scope | After Step 1 (data read complete) | "已读取 [brand] 数据（[N] 个产品，[N] 篇支持文章）。确认继续优化？" |
| CP2: Confirm changes | Before modifying any JSON file | "将修改以下字段：[list fields]. 确认执行？" |
| CP3: Confirm destructive | Before Step 7 (delete output/) | "将删除 `output/[brand]/` 并重新生成。确认？" |
| CP4: Confirm commit | Before git commit | "将提交以下文件：[list]. 确认提交？" |

If user says "no" / "stop" at any checkpoint: save current state to memory, exit cleanly, and report what's been done.

## Error Handling

| Scenario | What to do |
|----------|-----------|
| `data/[brand]/` directory not found | Warn: "品牌 [brand] 数据目录不存在。跳过该品牌。" |
| `data/[brand]/brand.json` missing or invalid JSON | Warn + skip brand. Log to memory file. |
| Build script fails (`node scripts/generate.js ...` returns non-zero) | Show error output, stop, ask user to fix. Do NOT cover up errors. |
| Brand already fully optimized (all 7 steps done) | Show previous scores and ask: "重新优化还是跳过？" |
| User asks about a brand not in alphabetical order (e.g., skip ahead) | Warn: "当前应该优化 [expected_brand]。确认跳过？" Record skip reason in memory. |

---

## Request Type Detection

Before starting, detect what the user actually wants. Don't always run all 7 steps:

| User intent | Steps to execute |
|-------------|-----------------|
| "优化品牌"/"do SEO for brand X" (full) | Steps 1→7 |
| "审计"/"audit"/"check SEO" (audit only) | Steps 2 (research) + 4 (cross-cutting audit) + 6 (report) |
| "关键词研究" (keyword research only) | Step 2 only |
| "内容质量检查" (content quality check) | Step 4.1 only |
| "just Step 1"/"先看看数据" (preview only) | Step 1 only |
| Unclear / user hasn't specified | Ask: "Just audit or full optimization?" |

When doing partial execution: still update memory for the steps you ran. When the user later asks for more, pick up where you left off.

---

## 7-Step Workflow

Execute steps **sequentially**. Each step must complete before the next begins.

---

### Step 1: Memory Management — Initialize Project Memory

#### 1.1 Read brand data (MANDATORY first action)
```bash
cat data/[brand]/brand.json
cat data/[brand]/products.json
cat data/[brand]/support.json    # if exists
cat data/[brand]/solutions.json   # if exists
cat data/[brand]/news.json         # if exists
```

#### 1.2 Update project memory file
Location: `data/.project-memory/seo-optimization-project.md`

Update the active brand section with brand info, core product categories, target keywords, application industries, certifications, and set progress.

#### 1.3 Read current project state
Check the memory file to confirm previous brand is fully complete and this brand is next in alphabetical order. Verify the alphabetical sequence explicitly (e.g., `aipu < xilinx`).

---

### Step 2: Research — Load SEO/GEO Analysis Skills

Load ALL of these skills via the `skill()` tool:
1. `keyword-research`
2. `serp-analysis`
3. `competitor-analysis`
4. `content-gap-analysis`

#### 2.1 Keyword Research
Core keyword formula: `[brand] + distributor`

Build 4-layer keyword matrix:

| Layer | Intent | Example |
|-------|--------|---------|
| L1: Core variants | Transactional | `3peak distributor`, `3peak distributor china` |
| L2: Product + brand | Transactional | `3peak op amp distributor` |
| L3: Selection + support | Informational | `3peak selection guide` |
| L4: Long-tail | Mixed | `3peak automotive grade distributor` |

Map keywords to pages: Core → brand homepage, Product → product category pages, Selection → selection guide pages, Long-tail → support/blog pages.

#### 2.2 SERP Analysis
Analyze target SERP features: Featured Snippets, People Also Ask, video/image results, competitor page patterns, AI Overviews opportunities.

#### 2.3 Competitor Analysis
Identify and analyze: large distributors (DigiKey, Mouser, Arrow), domestic distributors, other authorized agents, OEM official sites.

#### 2.4 Content Gap Analysis
Check for missing: product comparison tables, application case studies, selection guides/decision trees, reference designs, video tutorials, technical blogs, FAQ pages, download center.

#### 2.5 Save Research Report
`data/.project-memory/[brand]_step2_research_[YYYY-MM-DD].md`

---

### Step 3: Optimize — Execute Optimizations

Load ALL of these skills via the `skill()` tool:
1. `meta-tags-optimizer`
2. `technical-seo-checker`
3. `internal-linking-optimizer`
4. `content-refresher`

#### 3.1 Read data sources
Re-read data files to get current state.

#### 3.2 On-Page SEO
Per page: titles (50-60 chars), meta descriptions (150-160 chars), H1 uniqueness, H2-H6 hierarchy, keyword density (1-2%), image alt attributes, internal/external links.

#### 3.3 Technical SEO
Check: robots.txt, XML sitemap, no 404s, proper redirects, Core Web Vitals, responsive design, HTTPS, SSL.

**Security check — critical**: Check if `data/.project-memory/` or any other internal directory is publicly accessible on the live site (this is a common issue with Cloudflare Pages static deployments). If exposed, flag as CRITICAL priority. Also check sitemap.xml for internal-only URLs.

#### 3.4 Internal Linking
Architecture:
```
Home → /[brand]/ → /products/ → product detail
                 → /solutions/ → solution detail
                 → /support/ → support detail
```
Ensure breadcrumbs, related product recommendations, category navigation, footer links, contextual links.

#### 3.5 Content Refresh
Review: technical specs, application cases, selection guidance, comparison tables, FAQ quality.

**All modifications go through JSON files only** — then regenerate.

Save report: `data/.project-memory/[brand]_step3_optimize_[YYYY-MM-DD].md`

---

### Step 4: Cross-cutting — Quality Audits

Load ALL via `skill()`:
1. `content-quality-auditor` — CORE-EEAT 80-item audit
2. `domain-authority-auditor` — CITE 40-item audit
3. `entity-optimizer` — entity/KG optimization

#### 4.1 Content Quality (CORE-EEAT)
6 dimensions: Content (20), Optimization (20), Readability (20), Engagement (10), Authority (10), Trust (10). Total: 100. Identify veto items.

#### 4.2 Domain Authority (CITE)
4 dimensions: Citations (25), Influence (25), Trust Signals (25), Engagement (25). Total: 100. Grades: A (90-100), B (70-89), C (50-69), D (<50).

#### 4.3 Entity Optimization
Brand/product/organization entity consistency. Add/verify Schema.org structured data (Organization, Product, BreadcrumbList, TechArticle, NewsArticle).

Save report: `data/.project-memory/[brand]_step4_audit_[YYYY-MM-DD].md`

---

### Step 5: Memory Management — Update

Update `data/.project-memory/seo-optimization-project.md`:
- Record all findings from Steps 2-4
- Update optimization progress
- Log issues fixed and remaining
- Record score changes (CORE-EEAT, CITE before/after)
- Move this brand to WARM/ARCHIVE, set next brand as HOT

---

### Step 6: Generate Optimization Report

Save to: `data/.project-memory/[brand]_final_report_[YYYY-MM-DD].md`

Must contain: executive summary, pre-optimization state, all operations performed, post-optimization state with score deltas, key improvements (top 3-5), recommended follow-up actions, keyword list, all fixes applied.

---

### Step 7: Generate Output Site

**CRITICAL — never simulate. Either do it or say why you can't.**

1. Verify all changes are only in `data/[brand]/*.json`, NOT in `output/`
2. Delete old output: `rm -rf output/[brand]/`
3. Regenerate: `node scripts/generate.js --brand [brand]` (or `npm run generate:brand -- --brand [brand]`)
4. Validate: check `output/[brand]/` exists, pages render, SEO elements present
5. Update sitemap: `node scripts/generate-sitemap.js`
6. Commit: only if user asks

**If you cannot run the build (e.g., in a test/simulation context), you MUST say so explicitly: "Did not run `node scripts/generate.js --brand [brand]` because [reason]. To execute, run this command in the project root."** Never just pretend to run it.

---

## File Locations Summary

| Item | Path |
|------|------|
| Project memory | `data/.project-memory/seo-optimization-project.md` |
| Step 2 report | `data/.project-memory/[brand]_step2_research_[date].md` |
| Step 3 report | `data/.project-memory/[brand]_step3_optimize_[date].md` |
| Step 4 report | `data/.project-memory/[brand]_step4_audit_[date].md` |
| Final report | `data/.project-memory/[brand]_final_report_[date].md` |
| Brand data | `data/[brand]/brand.json` |
| Product data | `data/[brand]/products.json` |
| Built output | `output/[brand]/` (auto-generated, never hand-edit) |
