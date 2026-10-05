/**
 * content-quality.js — shared text-length helper used to detect empty /
 * near-empty pages that harm SEO (soft-404, near-duplicate, crawl budget).
 */
function textLength(c) {
  if (c === null || c === undefined) return 0;
  if (typeof c === 'string') return c.replace(/\s+/g, ' ').trim().length;
  if (typeof c === 'number' || typeof c === 'boolean') return String(c).length;
  if (Array.isArray(c)) return c.reduce((n, x) => n + textLength(x), 0);
  if (typeof c === 'object') {
    let n = 0;
    for (const k of ['text', 'content', 'heading', 'subheading', 'description', 'paragraph', 'title', 'answer', 'question']) {
      if (c[k] !== undefined) n += textLength(c[k]);
    }
    if (Array.isArray(c.items)) n += textLength(c.items);
    if (c.items && !Array.isArray(c.items)) n += textLength(c.items);
    return n;
  }
  return 0;
}

const EMPTY_THRESHOLD = 50;

function isEmptySupportArticle(a) {
  if (!a || typeof a !== 'object') return false;
  return textLength(a.content) < EMPTY_THRESHOLD;
}

module.exports = { textLength, isEmptySupportArticle, EMPTY_THRESHOLD };
