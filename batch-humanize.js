const fs = require('fs');
const path = require('path');

const DATA_DIR = path.resolve(__dirname, 'data');

// --- Patterns from Humanizer skill ---

// 1. AI vocabulary words (section 7)
// Only words that are CLEARLY AI slop, not legitimate technical terms.
// Technical/engineering terms like "optimized", "robust", "comprehensive",
// "innovative" are kept unless used in purely promotional contexts.
const AI_VOCAB_REPLACEMENTS = [
  [/\bcrucial\b/gi, 'important'],
  [/\bpivotal\b/gi, 'key'],
  [/\bdelve\s+into\b/gi, 'explore'],
  [/\bshowcase\b/gi, 'show'],
  [/\bshowcasing\b/gi, 'showing'],
  [/\bunderscore\b/gi, 'show'],
  [/\bunderscores\b/gi, 'shows'],
  [/\bunderscoring\b/gi, 'showing'],
  [/\btapestry\b/gi, 'range'],
  [/\btestament\b/gi, 'example'],
  [/\bgarners?\b/gi, 'gets'],
  [/\bfoster(ing|s|ed)?\b/gi, (m) => m ? 'encourag' + m.slice(1) : 'encourage'],
  [/\binterplay\b/gi, 'relationship'],
  [/\bintricacies?\b/gi, 'details'],
  [/\bintricate\b/gi, 'complex'],
  [/\bembody\b/gi, 'represent'],
  [/\bembodies\b/gi, 'represents'],
  [/\bembodied\b/gi, 'represented'],
  [/\bthe\s+landscape\b/gi, 'the field'],
  [/\brealm\b/gi, 'area'],
  [/\bendeavor\b/gi, 'effort'],
  [/\bunleash\b/gi, 'release'],
  [/\bresonate\b/gi, 'connect'],
  [/\bcutting-edge\b/gi, 'advanced'],
  [/\bstate-of-the-art\b/gi, 'modern'],
  [/\bworld-class\b/gi, 'high-quality'],
  [/\bbest-in-class\b/gi, 'leading'],
  [/\bgame-changer\b/gi, 'important change'],
  [/\brevolutionize\b/gi, 'transform'],
  [/\bparadigm\b/gi, 'model'],
  [/\bgroundbreaking\b/gi, 'innovative'],
  [/\bdrastic(ally)?\b/gi, (m) => m === 'drastically' ? 'significantly' : 'significant'],
  [/\bstellar\b/gi, 'excellent'],
  [/\bthrive\b/gi, 'succeed'],
  [/\bthriving\b/gi, 'successful'],
  [/\belevate\b/gi, 'improve'],
  [/\bempower\b/gi, 'enable'],
  [/\bempowering\b/gi, 'enabling'],
  [/\bempowers\b/gi, 'enables'],
  [/\bultimately\b/gi, 'eventually'],
  [/\barguably\b/gi, 'some argue'],
  [/\bessentially\b/gi, 'in essence'],
  [/\beffectively\b/gi, 'in effect'],
  [/\bdynamic\s+landscape\b/gi, 'changing field'],
  [/\bdigital\s+transformation\b/gi, 'digital change'],
];

// 2. Promotional language (section 4)
const PROMO_REPLACEMENTS = [
  [/\bnestled\b/gi, 'located'],
  [/\bbreathtaking\b/gi, 'impressive'],
  [/\bstunning\b/gi, 'beautiful'],
  [/\bvibrant\b/gi, 'lively'],
  [/\b(rich|vibrant)\s+(cultural\s+)?heritage\b/gi, 'history'],
  [/\bmust-visit\b/gi, 'worth seeing'],
  [/\biconic\b/gi, 'well-known'],
  [/\blegendary\b/gi, 'famous'],
  [/\bexemplify\b/gi, 'show'],
  [/\bexemplifies\b/gi, 'shows'],
  [/\bepitomize\b/gi, 'represent'],
  [/\bepitomizes\b/gi, 'represents'],
  [/\birreplaceable\b/gi, 'valuable'],
  [/\binvaluable\b/gi, 'useful'],
  [/\bindispensable\b/gi, 'essential'],
  [/\bboasts?\s+(a\s+)?/gi, 'has '],
  [/\bboasting\b/gi, 'having'],
];

// 3. Filler phrases (section 23)
const FILLER_REPLACEMENTS = [
  [/\bin order to\b/gi, 'to'],
  [/\bdue to the fact that\b/gi, 'because'],
  [/\bat this point in time\b/gi, 'now'],
  [/\bin the event that\b/gi, 'if'],
  [/\bhas the ability to\b/gi, 'can'],
  [/\bhave the ability to\b/gi, 'can'],
  [/\bit is important to note that\b/gi, 'note that'],
  [/\bit should be noted that\b/gi, 'note that'],
  [/\bit is worth noting that\b/gi, 'note that'],
  [/\bit is worth mentioning that\b/gi, 'note that'],
  [/\bin terms of\b/gi, 'regarding'],
  [/\bwith regard to\b/gi, 'regarding'],
  [/\bwith respect to\b/gi, 'regarding'],
  [/\bin relation to\b/gi, 'regarding'],
  [/\bon a regular basis\b/gi, 'regularly'],
  [/\bon a daily basis\b/gi, 'daily'],
  [/\bon a weekly basis\b/gi, 'weekly'],
  [/\bon a monthly basis\b/gi, 'monthly'],
  [/\bfor the purpose of\b/gi, 'for'],
  [/\bin the vicinity of\b/gi, 'near'],
  [/\ba number of\b/gi, 'several'],
  [/\bthe majority of\b/gi, 'most'],
  [/\ba majority of\b/gi, 'most'],
  [/\ba minority of\b/gi, 'few'],
  [/\bis able to\b/gi, 'can'],
  [/\bwas able to\b/gi, 'could'],
  [/\bare able to\b/gi, 'can'],
];

// 4. Hedging (section 24)
const HEDGE_REPLACEMENTS = [
  [/\b(potentially|possibly|arguably|purportedly|ostensibly)\s+(could|may|might)\s+(potentially|possibly)?\b/gi, (m, adv, modal, dup) => dup ? `${modal} ${dup}` : `${modal}`],
  [/\bit could be argued that\b/gi, 'one could argue that'],
  [/\bit might be said that\b/gi, 'one might say that'],
  [/\bit is believed that\b/gi, 'some believe that'],
  [/\bit is thought that\b/gi, 'some think that'],
  [/\bit is considered\b/gi, 'it is viewed as'],
  [/\bis widely regarded as\b/gi, 'is'],
  [/\bis widely considered\b/gi, 'is'],
];

// 5. "serves as" / "stands as" -> "is" (section 8)
const COPULA_REPLACEMENTS = [
  [/\bserves as\b/gi, 'is'],
  [/\bserve as\b/gi, 'are'],
  [/\bserving as\b/gi, 'being'],
  [/\bstands as\b/gi, 'is'],
  [/\bstand as\b/gi, 'are'],
  [/\bstanding as\b/gi, 'being'],
  [/\bmarks a\b/gi, 'is a'],
  [/\brepresents a\b/gi, 'is a'],
  [/\brepresent a\b/gi, 'are a'],
  [/\bacts as\b/gi, 'is'],
  [/\bact as\b/gi, 'are'],
  [/\bacting as\b/gi, 'being'],
];

// 6. Collaborative artifacts (section 20)
const COLLAB_REPLACEMENTS = [
  [/\bI hope this helps[.!]*\b/gi, 'This should help'],
  [/\bOf course!\b/gi, 'Sure!'],
  [/\bCertainly!\b/gi, 'Sure!'],
  [/\bYou're absolutely right!\b/gi, 'That is correct'],
  [/\bhere is a\b/gi, 'this is a'],
  [/\bPlease let me know if you have any questions\b/gi, 'Contact us for questions'],
  [/\bfeel free to\b/gi, 'do not hesitate to'],
  [/\bif you have any further questions\b/gi, 'for more questions'],
  [/\bdon't hesitate to\b/gi, ''],
];

// 7. Knowledge-cutoff disclaimers (section 21)
const CUTOFF_REPLACEMENTS = [
  [/\bas of (my last|our)?\s*(knowledge|update|training|data)[^,]*,\b/gi, ''],
  [/\bup to my last training update[^,]*,\b/gi, ''],
  [/\bup to (my|our) knowledge[^,]*,\b/gi, ''],
  [/\bwhile specific details are (limited|scarce)[^,]*,\b/gi, ''],
  [/\bbased on available information[^,]*,\b/gi, ''],
];

// 8. Vague attributions (section 5)
const VAGUE_ATTR_REPLACEMENTS = [
  [/\b(industry|market)\s+(reports?|analysts?|experts?|observers?)\s+(say|suggest|indicate|claim|argue|believe|cite)\b/gi, ''],
  [/\b(some|many|several)\s+(critics?|analysts?|observers?|sources?|publications?)\s+(say|suggest|argue|claim|believe|cite)\b/gi, ''],
  [/\bexperts?\s+(believe|say|suggest|argue|claim)\b/gi, ''],
];

// 9. Generic positive conclusions (section 25)
const GENERIC_CONCLUSIONS = [
  /\bThe future looks bright for\b.+/gi,
  /\bExciting times lie ahead\b.+/gi,
  /\b(?:This|That)\s+represents?\s+a\s+major\s+step\b.+/gi,
  /\ba\s+bright\s+future\s+(ahead|lies)\b.+/gi,
];

// 10. Signposting (section 28)
const SIGNPOST_REPLACEMENTS = [
  [/\bLet's dive in\b/gi, ''],
  [/\blet's explore\b/gi, 'let us examine'],
  [/\blet's break this down\b/gi, 'to break this down'],
  [/\bhere's what you need to know\b/gi, 'key points'],
  [/\bwithout further ado\b/gi, 'now'],
  [/\bnow let's look at\b/gi, 'consider'],
  [/\bin this (article|guide|section|post), we('ll| will)\b/gi, 'We'],
];

// 11. Negative parallelisms - "Not only... but also..." (section 9)
const NEG_PARALLEL_REPLACEMENTS = [
  [/\bNot only (does|do|did|is|are|was|were)\b.+\bbut (also )?/gi, (m) => {
    // Simplify: replace "Not only does X do Y, but also Z" with "X does Y and Z"
    let r = m.replace(/\bNot only (does|do|did|is|are|was|were)\s+/i, '');
    r = r.replace(/\bbut (also |\s*)/gi, 'and ');
    return r;
  }],
  [/\bit('?s| is) not just about\b(.+?)\bit('?s| is)\b(.+?)$/gi, (m, prefix, x, mid, y) => `It is${y}`],
];

function applyReplacements(text, replacements) {
  if (!text || typeof text !== 'string') return text;
  let result = text;
  for (const [pattern, replacement] of replacements) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

function removeEmDashes(text) {
  if (!text || typeof text !== 'string') return text;
  // Replace em dashes (—, --, spaced) with appropriate alternatives
  return text
    .replace(/\s*—\s*/g, ', ')
    .replace(/\s*–\s*/g, ', ')
    .replace(/\s+--\s+/g, ', ')
    .replace(/^,\s+/, '')
    .replace(/,\s*$/, '');
}

function removeSuperficialIng(text) {
  if (!text || typeof text !== 'string') return text;
  // Remove trailing -ing phrases that add fake depth
  const ingPatterns = [
    { pattern: /,\s+(highlighting|underscoring|emphasizing|showcasing|reflecting|symbolizing|contributing to|encompassing|demonstrating|illustrating|reinforcing)\s+([^,.]{0,120})$/gi, replacement: (m, verb, rest) => `. This ${verb.replace(/ing( to)?$/i, (t) => t === 'ing' ? 'es' : 'es to')} ${rest}` },
    { pattern: /,\s+(highlighting|underscoring|emphasizing|showcasing|reflecting|symbolizing|demonstrating|illustrating)\s+([^,.]{0,120})\.\s*/gi, replacement: (m, verb, rest) => `. This ${verb.replace(/ing$/i, 'es')} ${rest}. `.replace(/\s+/g, ' ') },
  ];
  let result = text;
  for (const { pattern, replacement } of ingPatterns) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

function simplifyRuleOfThree(text) {
  if (!text || typeof text !== 'string') return text;
  // Collapse "A, B, and C" lists that look like the rule of three
  // Only apply to triples that are clearly promotional/excessive
  const ruleOfThree = /(?:,\s+and\s+|\s+and\s+)\w+\s+\w+/;
  // Full intelligent handling is complex; we focus on obvious cases
  return text;
}

function fixCopula(text) {
  if (!text || typeof text !== 'string') return text;
  // Already handled via COPULA_REPLACEMENTS
  return applyReplacements(text, COPULA_REPLACEMENTS);
}

function cleanUpPunctuation(text) {
  if (!text || typeof text !== 'string') return text;
  return text
    .replace(/[ ]{2,}/g, ' ')  // double spaces (NOT newlines)
    .replace(/\s+\./g, '.')   // space before period
    .replace(/\s+,/g, ',')    // space before comma
    .replace(/,\./g, '.')     // comma-period
    .replace(/\.\./g, '.')    // double period
    .replace(/^,\s*/, '')     // leading comma
    .replace(/,\./g, '.')
    .trim();
}

function humanizeText(text) {
  if (!text || typeof text !== 'string') return text;

  let result = text;

  // Apply all replacement groups in order
  result = applyReplacements(result, AI_VOCAB_REPLACEMENTS);
  result = applyReplacements(result, PROMO_REPLACEMENTS);
  result = applyReplacements(result, FILLER_REPLACEMENTS);
  result = applyReplacements(result, HEDGE_REPLACEMENTS);
  result = applyReplacements(result, COLLAB_REPLACEMENTS);
  result = applyReplacements(result, CUTOFF_REPLACEMENTS);
  result = applyReplacements(result, VAGUE_ATTR_REPLACEMENTS);
  result = applyReplacements(result, SIGNPOST_REPLACEMENTS);
  result = applyReplacements(result, NEG_PARALLEL_REPLACEMENTS);
  result = applyReplacements(result, COPULA_REPLACEMENTS);

  // Structural fixes
  result = removeEmDashes(result);
  result = removeSuperficialIng(result);

  // Cleanup
  result = cleanUpPunctuation(result);

  return result;
}

function walkObject(obj, visitor) {
  if (!obj || typeof obj !== 'object') return;
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'string') {
        obj[i] = visitor(obj[i]);
      } else {
        walkObject(obj[i], visitor);
      }
    }
  } else {
    for (const key of Object.keys(obj)) {
      if (typeof obj[key] === 'string') {
        obj[key] = visitor(obj[key]);
      } else {
        walkObject(obj[key], visitor);
      }
    }
  }
}

function walkObjectWithPath(obj, visitor, path = '') {
  if (!obj || typeof obj !== 'object') return;
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      const childPath = `${path}[${i}]`;
      if (typeof obj[i] === 'string') {
        obj[i] = visitor(obj[i], childPath);
      } else {
        walkObjectWithPath(obj[i], visitor, childPath);
      }
    }
  } else {
    for (const key of Object.keys(obj)) {
      const childPath = path ? `${path}.${key}` : key;
      if (typeof obj[key] === 'string') {
        obj[key] = visitor(obj[key], childPath);
      } else if (!key.startsWith('related') && key !== 'tags' && key !== 'keywords' && key !== 'seoKeywords') {
        walkObjectWithPath(obj[key], visitor, childPath);
      }
    }
  }
}

// Specific field path patterns to skip (lists, code, etc.)
// Only batch-process short descriptive fields; skip long-form content
// that needs context-aware AI humanization.
function shouldSkipPath(path) {
  const skipPatterns = [
    /\.(keywords|tags|related)/i,
    /\.seoKeywords/i,
    /\.(id|slug|sku|mpn|partNumber|part_number)$/i,
    /\.(publishDate|lastUpdated|date)$/i,
    /\.(imageUrl|imageAlt|logo|icon)$/i,
    /\.(readTime|author|source)$/i,
    /\.(email|phone|phoneNumber|address)$/i,
    /\.(website|url|link)$/i,
    /\.(meta|metadata)/i,
    /\.(version|revision)$/i,
    /\.(status|type|category|subcategory)$/i,
    /\.(price|cost|currency)$/i,
    /\.(packaging|package)$/i,
    /\.(stock|quantity|moq)$/i,
    // Skip long-form content fields (need AI humanizer, not batch)
    /\.content$/i,
    /\.faeInsights/i,
    /\.customerCases/i,
    /\.articles\[\d+\]\.faqs/i,
    /\.(insight|logic|insightLogic)$/i,
    /\.faqs\[\d+\]\.(answer|decisionGuide)$/i,
  ];
  for (const p of skipPatterns) {
    if (p.test(path)) return true;
  }
  return false;
}

// Main processing function - humanize ALL string fields
function humanizeBrandDir(brandDir) {
  const brandName = path.basename(brandDir);
  console.log(`\nProcessing: ${brandName}`);

  const files = ['brand.json', 'products.json', 'solutions.json', 'support.json', 'news.json'];
  let totalFields = 0;

  for (const file of files) {
    const filePath = path.join(brandDir, file);
    if (!fs.existsSync(filePath)) {
      console.log(`  SKIP ${file} (not found)`);
      continue;
    }

    try {
      const raw = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(raw);
      const before = JSON.stringify(data);

      let fieldCount = 0;
      walkObjectWithPath(data, (text, fieldPath) => {
        if (shouldSkipPath(fieldPath)) return text;
        const humanized = humanizeText(text);
        if (humanized !== text) {
          fieldCount++;
        }
        return humanized;
      });

      const after = JSON.stringify(data);

      if (after !== before) {
        // Format consistently
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
        totalFields += fieldCount;
        console.log(`  ${file}: ${fieldCount} fields changed`);
      } else {
        console.log(`  ${file}: no changes`);
      }
    } catch (err) {
      console.error(`  ERROR ${file}: ${err.message}`);
    }
  }

  return totalFields;
}

// --- Main ---
function main() {
  const startTime = Date.now();
  const brandDirs = fs.readdirSync(DATA_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('_') && !d.name.startsWith('.'))
    .map(d => path.join(DATA_DIR, d.name));

  // If arg provided, only process specific brand
  const target = process.argv[2];
  const filtered = target
    ? brandDirs.filter(d => path.basename(d).toLowerCase() === target.toLowerCase())
    : brandDirs;

  console.log(`Target brands: ${filtered.length} (${target || 'all'})`);
  let totalFields = 0;

  for (const dir of filtered) {
    totalFields += humanizeBrandDir(dir);
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n=== Done in ${elapsed}s ===`);
  console.log(`Total fields changed: ${totalFields}`);
}

main();
