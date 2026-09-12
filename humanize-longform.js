const fs = require('fs');
const path = require('path');

const DATA_DIR = path.resolve(__dirname, 'data');

// Cover all text fields — humanizer patterns are safe no-ops on non-matching text
function isLongformPath(path) {
  return true;
}

// === HUMANIZER PATTERNS (from Wikipedia Signs of AI Writing) ===

// H1: Undue emphasis on significance/legacy
function h1Significance(text) {
  return text
    .replace(/\bstands?\s+as\s+a\s+(testament|reminder)\b/gi, 'is one')
    .replace(/\bis\s+a\s+(vital|significant|crucial|pivotal|key)\s+(role|moment|factor)\b/gi, (m, adj, noun) => 'is an important ' + noun)
    .replace(/\b(underscores|highlights)\s+its\s+(importance|significance)\b/gi, 'shows its value')
    .replace(/\b(indelible|lasting|enduring)\s+mark\b/gi, 'lasting impact')
    .replace(/\bsetting\s+the\s+stage\s+for\b/gi, 'paving the way for')
    .replace(/\breflects?\s+broader\b/gi, 'reflects')
    .replace(/\bcontributing\s+to\s+the\b/gi, 'contributing to')
    .replace(/\b(marking|shaping)\s+the\s+(future|evolution)\b/gi, 'shaping')
    .replace(/\bevolving\s+landscape\b/gi, 'changes')
    .replace(/\bfocal\s+point\b/gi, 'focus')
    .replace(/\bdeeply\s+rooted\b/gi, 'rooted');
}

// H3: -ing analyses
function h3IngEndings(text) {
  let r = text;
  r = r.replace(/,\s+(highlighting|underscoring|emphasizing|showcasing|reflecting|symbolizing|demonstrating|illustrating|reinforcing|contributing to|encompassing|fostering|cultivating)\s+([^,.]{0,120})\.\s*/gi, (m, verb, rest) => `. This ${verb.replace(/ing$/i, 'es')} ${rest}. `.replace(/\s+/g, ' '));
  r = r.replace(/,\s+(highlighting|underscoring|emphasizing|showcasing|reflecting|symbolizing|demonstrating|illustrating)\s+([^,.]{0,120})$/gi, (m, verb, rest) => `. This ${verb.replace(/ing$/i, 'es')} ${rest}`);
  r = r.replace(/^(Highlighting|Underscoring|Emphasizing|Showcasing|Reflecting|Symbolizing|Demonstrating|Illustrating|Fostering|Cultivating)\s+([^,.]{0,120}),\s+/gi, (m, verb, rest) => `This ${verb.replace(/ing$/i, 'es')} ${rest}. `);
  return r;
}

// H4: Promotional language
function h4Promotional(text) {
  return text
    .replace(/\bboasts?\s+(a\s+)?/gi, 'has ')
    .replace(/\b(vibrant|rich)\s+(cultural\s+)?(heritage|history|tradition)\b/gi, 'notable history')
    .replace(/\bprofound\s+(impact|effect|influence)\b/gi, 'significant impact')
    .replace(/\bgroundbreaking\s+(work|research|technology|innovation)\b/gi, 'important work')
    .replace(/\bbreathtaking\s+(views?|scenery|landscape|beauty)\b/gi, 'impressive views')
    .replace(/\bmust-visit\b/gi, 'recommended')
    .replace(/\bstunning\s+(views?|scenery|landscape|beauty|architecture)\b/gi, 'impressive')
    .replace(/\bnestled\s+(in|within|amidst?)\s+the\b/gi, 'located in the')
    .replace(/\bin\s+the\s+heart\s+of\b/gi, 'in')
    .replace(/\brenowned\s+(for|as)\b/gi, 'known for')
    .replace(/\bexemplifies?\b/gi, 'is an example of')
    .replace(/\bcommitment\s+to\s+excellence\b/gi, 'focus on quality');
}

// H5: Vague attributions
function h5VagueAttributions(text) {
  return text
    .replace(/\b(Industry\s+reports?|Observers?\s+(have\s+)?cited?|Experts?\s+(argue|say|believe|claim)|Some\s+critics?\s+(argue|say)|Several\s+sources?\s+(report|indicate|suggest))\b/gi, 'Reports indicate')
    .replace(/\bis\s+of\s+interest\s+to\s+(researchers|scientists|experts)\b/gi, 'interests researchers');
}

// H6: Challenges section
function h6Challenges(text) {
  return text
    .replace(/\bDespite\s+(its|these|this)\s+[^,.]*,\s+[^.]*\b(?:faces|encounters|experiences)\s+(?:several\s+)?challenges\b/gi, (m) => {
      const challengesMatch = m.match(/(?:including|such as|like)\s+(.+)/i);
      if (challengesMatch) return challengesMatch[1].charAt(0).toUpperCase() + challengesMatch[1].slice(1);
      return m.replace(/Despite\s+(its|these|this)\s+[^,.]*,\s+/i, '').replace(/faces\s+(several\s+)?challenges[.,]?\s*/i, 'has challenges');
    })
    .replace(/\bDespite\s+these\s+challenges[^,.]*,/gi, 'However,')
    .replace(/\bChallenges\s+and\s+(Future\s+)?(Outlook|Legacy)\b/gi, 'Challenges');
}

// H7: AI vocabulary words
function h7AiVocabulary(text) {
  let r = text;
  // Remove common collocations
  r = r.replace(/\b(Actually|Additionally),?\s*/gi, 'Moreover, ');
  r = r.replace(/\balign(s|ed|ing)?\s+with\b/gi, 'match');
  r = r.replace(/\bcrucial\s+(role|part|factor|aspect|element|component)\b/gi, 'important $1');
  r = r.replace(/\bdelve\s+into\b/gi, 'examine');
  r = r.replace(/\benduring\s+(legacy|appeal|popularity|relevance)\b/gi, 'lasting $1');
  r = r.replace(/\bfoster(s|ed|ing)?\b/gi, 'encourage');
  r = r.replace(/\bgarner(s|ed|ing)?\b/gi, 'received');
  r = r.replace(/\binterplay\b/gi, 'interaction');
  r = r.replace(/\bintricat(e|cies)\b/gi, 'complex');
  r = r.replace(/\blandscape\s+(of|for)\b/gi, 'field of');
  r = r.replace(/\bpivotal\s+(role|moment|point|factor|technology)\b/gi, 'important $1');
  r = r.replace(/\bshowcas(e|es|ed|ing)\b/gi, 'show');
  r = r.replace(/\btapestry\b/gi, 'range');
  r = r.replace(/\btestament\s+to\b/gi, 'evidence of');
  r = r.replace(/\bunderscore(s|d)?\b/gi, 'show');
  r = r.replace(/\bvaluable\s+(insight|tool|asset|resource|addition)\b/gi, 'useful $1');
  r = r.replace(/\bvibrant\s+(community|market|city|scene|culture)\b/gi, 'active $1');
  return r;
}

// H8: Copula avoidance (serves as, stands as, etc.)
function h8CopulaAvoidance(text) {
  return text
    .replace(/\bserves?\s+as\b/gi, 'is')
    .replace(/\bstands?\s+as\b/gi, 'is')
    .replace(/\bmarks?\b(?=\s+(a\s+)?(significant|major|important)\s)/gi, 'is')
    .replace(/\brepresents?\s+(a\s+)?/gi, 'is ')
    .replace(/\bboasts?\b(?=\s+(a\s+)?(wide|extensive|comprehensive|modern|large))/gi, 'has');
}

// H9: Negative parallelism (already covered, enhance)
function h9NegParallelism(text) {
  let r = text;
  r = r.replace(/\bNot only (does|do|did|is|are|was|were)\s+([^,]+),\s+but\s+(also\s+)?(.+?)(?:\.|$)/gi, (m, verb, part1, also, part2) => {
    return `${part1.trim()} and ${part2.trim()}`;
  });
  r = r.replace(/\bit('?s| is) not (just|only) about\s+[^,]+,\s*(?:it'?s|it is)\s+(?:about\s+)?(.+?)(?:\.|$)/gi, (m, a, b, main) => {
    return main.trim();
  });
  r = r.replace(/,\s+(no|without)\s+\w+(?:\s+\w+)?\s*$/gi, (m) => {
    return m.replace(/,\s+(no|without)\s+/, ' without ');
  });
  return r;
}

// H10: Rule of three
function h10RuleOfThree(text) {
  // Detect lists of three where they seem formulaic
  return text.replace(/\b(\w+(?:\s+\w+){0,2}),\s+(\w+(?:\s+\w+){0,2}),\s+and\s+(\w+(?:\s+\w+){0,2})\b/gi, (m, a, b, c) => {
    // Only collapse when all three are abstract nouns or similar promotional triplets
    if (/(innovation|excellence|quality|performance|reliability|efficiency|growth|success|future|vision)/i.test(m)) {
      return `${a}, ${b}, and ${c}`;
    }
    return m;
  });
}

// H11: Elegant variation
function h11ElegantVariation(text) {
  return text
    .replace(/\b(The\s+)?(\w+)\s+(faces|has|is|was|will)\s+[^.]*\.\s+(The\s+)?(\w+)\s+(faces|has|is|was|will)\s+[^.]*\.\s+(The\s+)?(\w+)\s+(faces|has|is|was|will)\s+[^.]*\./gi, (m) => {
      const sentences = m.split('.').filter(s => s.trim());
      if (sentences.length < 2) return m;
      return sentences.map(s => s.trim()).join('. ') + '.';
    });
}

// H12: False ranges
function h12FalseRanges(text) {
  return text
    .replace(/\bfrom\s+the\s+\w+\s+of\s+[^,.]+\s+to\s+the\s+\w+\s+of\s+[^,.]+\b/gi, (m) => {
      if (/\b(from\s+\d{4})\s+(to\s+\d{4})\b/i.test(m)) return m;
      if (/\b(from\s+\$?[\d,.]+)\s+(to\s+\$?[\d,.]+)\b/i.test(m)) return m;
      return m.replace(/\bfrom\s+the\s+/, 'the ').replace(/\s+to\s+the\s+/, ' and the ');
    });
}

// H13: Passive voice (minimal — only clear improvements)
function h13PassiveVoice(text) {
  return text
    .replace(/\bNo\s+(\w+)\s+(needed|required)\b/gi, 'No $1 is needed');
}

// H14: Em dashes
function h14EmDashes(text) {
  let r = text;
  // Spaced em dash: "word — word" → "word, word" or split sentence
  r = r.replace(/\s+[—–]\s+/g, ', ');
  // Unspaced: "word—word" → "word - word"
  r = r.replace(/(\w)[—–](\w)/g, '$1, $2');
  // Leading/trailing em dashes
  r = r.replace(/^[—–]\s*/gm, '');
  r = r.replace(/\s*[—–]$/gm, '');
  // Double hyphen
  r = r.replace(/ -- /g, ', ');
  r = r.replace(/(\w)--(\w)/g, '$1, $2');
  return r;
}

// H15: Bold overuse
function h15BoldOveruse(text) {
  return text.replace(/\*\*([^*]{20,})\*\*/g, '$1');
}

// H16: Inline-header lists
function h16InlineHeaders(text) {
  return text
    .replace(/- \*\*([^:*]+):\*\*\s+/gi, (m, header) => `- ${header.toLowerCase()}: `)
    .replace(/\*\*([^:*]+):\*\*\s+/gi, (m, header) => `${header.toLowerCase()}: `);
}

// H17: Title case headings
function h17TitleCase(text) {
  return text.replace(/^(#{1,6}\s+)([A-Z][a-z]+\s+[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/gm, (m, prefix, heading) => {
    const smallWords = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'by', 'with', 'of', 'in'];
    const words = heading.split(' ');
    const fixed = words.map((w, i) => {
      if (i === 0) return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
      if (smallWords.includes(w.toLowerCase())) return w.toLowerCase();
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    });
    return prefix + fixed.join(' ');
  });
}

// H18: Emojis
function h18Emojis(text) {
  return text.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}]/gu, '');
}

// H19: Curly quotes
function h19CurlyQuotes(text) {
  return text
    .replace(/\u201C/g, '"')
    .replace(/\u201D/g, '"')
    .replace(/\u2018/g, "'")
    .replace(/\u2019/g, "'");
}

// H20: Collaborative communication — rewrite, don't delete
function h20Collaborative(text) {
  return text
    .replace(/\bI hope this helps[.!]*\s*/gi, 'This should address your needs. ')
    .replace(/\bOf course![.!]*\s*/gi, 'Sure! ')
    .replace(/\bCertainly![.!]*\s*/gi, 'Sure! ')
    .replace(/\bYou're absolutely right![.!]*\s*/gi, 'That is correct. ')
    .replace(/\bWould you like\s+to\s+([^?]*)\?/gi, 'To $1:')
    .replace(/\bWant me to\s+([^?]*)\?/gi, 'I can $1 if needed. ')
    .replace(/\bShould I continue\?/gi, 'I can continue with more details if helpful. ')
    .replace(/\blet me know\s+if\s+you\s+(would\s+)?like\b[^.]*\./gi, 'Contact us for further assistance. ')
    .replace(/\bHere is a\s+/gi, 'This is a ');
}

// H21: Knowledge-cutoff disclaimers — rewrite, don't delete
function h21CutoffDisclaimers(text) {
  let r = text;
  r = r.replace(/\bas\s+of\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b/gi, 'Since $1');
  r = r.replace(/\bUp to my last (training\s+)?update,\s*/gi, 'Currently, ');
  r = r.replace(/\bWhile specific details are (limited|scarce)(.*?)\.\s*/gi, (m, word, rest) => `Specific details ${word === 'limited' ? 'are' : 'remain'} limited${rest}. `);
  r = r.replace(/\bbased on available information,\s*/gi, 'From what is known, ');
  r = r.replace(/\bis\s+not\s+publicly\s+available([^.]*\.)/gi, (m, rest) => `is not disclosed${rest}`);
  r = r.replace(/\bprefers?\s+to\s+stay\s+out\s+of\s+the\s+spotlight\b([^.]*\.)/gi, (m, rest) => `keeps a low profile${rest}`);
  r = r.replace(/\bkeeps?\s+personal\s+details?\s+private\b([^.]*\.)/gi, (m, rest) => `does not share personal details${rest}`);
  r = r.replace(/\bmaintains?\s+a\s+low\s+profile\b([^.]*\.)/gi, (m, rest) => `stays out of the public eye${rest}`);
  r = r.replace(/\blikely\s+(grew up|studied|began|came from)\b([^.]*\.)/gi, (m, info, rest) => `${info}${rest}`);
  r = r.replace(/\bit is believed that\b/gi, 'Some sources indicate that');
  return r;
}

// H22: Sycophantic tone
function h22Sycophantic(text) {
  return text
    .replace(/\bGreat question!\s*/gi, 'Good question. ')
    .replace(/\bExcellent question!\s*/gi, 'Good question. ')
    .replace(/\bThat's an excellent (point|question)\b[.!]*\s*/gi, 'That is a valid $1. ')
    .replace(/\bThat's a great (point|question)\b[.!]*\s*/gi, 'That is a valid $1. ');
}

// H23: Filler phrases
function h23Filler(text) {
  return text
    .replace(/\bin order to\b/gi, 'to')
    .replace(/\bdue to the fact that\b/gi, 'because')
    .replace(/\bat this point in time\b/gi, 'now')
    .replace(/\bin the event that\b/gi, 'if')
    .replace(/\bhas the ability to\b/gi, 'can')
    .replace(/\bit is important to note that\b/gi, 'note that')
    .replace(/\bit should be noted that\b/gi, 'note that')
    .replace(/\bit is worth noting that\b/gi, 'note that')
    .replace(/\bit goes without saying that\b/gi, 'obviously,');
}

// H24: Excessive hedging
function h24Hedging(text) {
  return text
    .replace(/\bcould\s+potentially\b/gi, 'could')
    .replace(/\bpossibly\s+maybe\b/gi, 'maybe')
    .replace(/\bIt\s+could\s+be\s+(argued|said)\s+that\b/gi, 'One could $1 that');
}

// H25: Generic conclusions — rewrite with simpler ending
function h25GenericConclusions(text) {
  return text
    .replace(/\bthe\s+future\s+(looks|is)\s+(bright|promising|exciting)\s+(for\s+.+?\.?)/gi, 'Development continues for $3')
    .replace(/\bexciting\s+times\s+(lie|are)\s+ahead\b[^.]*\.?/gi, 'Ongoing development continues')
    .replace(/\b(?:this|that)\s+represents?\s+a\s+major\s+step\s+(?:in\s+the\s+right\s+direction|forward)\b[^.]*\.?/gi, 'This marks continued progress')
    .replace(/\bcontinued\s+(?:growth|success|innovation)\s+in\s+the\s+years?\s+to\s+come\b[^.]*\.?/gi, 'Ongoing development')
    .replace(/\bjourney\s+toward\s+excellence\b[^.]*\.?/gi, 'Continued focus on quality');
}

// H26: Hyphenated compounds
function h26Hyphenated(text) {
  let r = text;
  const compounds = [
    ['cross-functional', 'cross functional'],
    ['client-facing', 'client facing'],
    ['data-driven', 'data driven'],
    ['decision-making', 'decision making'],
    ['high-quality', 'high quality'],
    ['real-time', 'real time'],
    ['long-term', 'long term'],
    ['end-to-end', 'end to end'],
    ['well-known', 'well known'],
  ];
  for (const [hyphenated, plain] of compounds) {
    const predPattern = new RegExp(`\\b(is|are|was|were|become|seems?|appears?)\\s+${hyphenated}\\b`, 'gi');
    r = r.replace(predPattern, (m) => m.replace(hyphenated, plain));
  }
  return r;
}

// H27: Persuasive authority
function h27Persuasive(text) {
  return text
    .replace(/\bthe\s+real\s+question\s+is\b/gi, 'the question is')
    .replace(/\bat its core\b/gi, 'essentially')
    .replace(/\bin reality\b/gi, 'in practice')
    .replace(/\bwhat really matters\b/gi, 'what matters')
    .replace(/\bthe (deeper|real|heart)\s+(issue|matter|problem)\b/gi, 'the core $2')
    .replace(/\bthe heart of the matter\b/gi, 'the core issue')
    .replace(/\bfundamentally\b/gi, 'at a basic level');
}

// H28: Signposting
function h28Signposting(text) {
  return text
    .replace(/^(Let's\s+dive in\s*)/gmi, 'Let us begin. ')
    .replace(/^(Let's\s+explore\s*)/gmi, 'Let us explore ')
    .replace(/^(Let's\s+break this down\s*)/gmi, 'To break this down, ')
    .replace(/^(Let's\s+look at\s*)/gmi, 'Consider ')
    .replace(/^(Here's what you need to know\s*)/gmi, 'Key points: ')
    .replace(/^(Without further ado\s*)/gmi, 'Now, ')
    .replace(/^Now let's look at\s+/gmi, 'Now consider ')
    .replace(/\s+Let's dive into\s+/gmi, '. ');
}

// H29: Fragmented headers
function h29FragmentedHeaders(text) {
  return text.replace(/^(#{2,6}\s+)(.+)\n\n\1\s*(?:is|are|was|were|refers?\s+to|means?)\s+.+\./gim, (m, prefix, heading) => {
    return prefix + heading;
  });
}

// H30: Diff-anchored writing
function h30DiffAnchored(text) {
  return text
    .replace(/\b(was|were)\s+(added|introduced|implemented)\s+to\s+(replace|improve|address)\b/gi, '$1 designed to $2')
    .replace(/\bthis\s+function\s+was\s+added\b/gi, 'this function');
}

// H31: Staccato drama
function h31Staccato(text) {
  let r = text;
  const paragraphs = r.split(/\n\n+/);
  for (let i = 0; i < paragraphs.length; i++) {
    const sentences = paragraphs[i].split(/(?<=[.!?])\s+/);
    const shortCount = sentences.filter(s => s.length < 60 && s.length > 0).length;
    if (shortCount >= 3 && sentences.length >= 3 && shortCount / sentences.length > 0.5) {
      const merged = [];
      for (let j = 0; j < sentences.length; j++) {
        if (j > 0 && sentences[j].length < 60 && merged[merged.length - 1].length < 100) {
          merged[merged.length - 1] += ' ' + sentences[j];
        } else {
          merged.push(sentences[j]);
        }
      }
      paragraphs[i] = merged.join(' ');
    }
  }
  return paragraphs.join('\n\n');
}

// H32: (removed - "is the [noun] of [noun]" is normal technical language, not AI aphorism)

// H33: Rhetorical openers
function h33Rhetorical(text) {
  return text
    .replace(/^(Honestly\?\s*)/gmi, 'To be straightforward, ')
    .replace(/^(Look,\s*)/gmi, 'Now, ')
    .replace(/^(Here's the thing\s*)/gmi, 'The key point is that ')
    .replace(/^(The thing is\s*)/gmi, 'The point is that ')
    .replace(/^(Let's be honest\s*)/gmi, 'To be honest, ')
    .replace(/^(Real talk\s*)/gmi, 'To be direct, ');
}

// Main humanize function
function humanizeLongform(text) {
  if (!text || typeof text !== 'string') return text;
  let result = text;

  result = h1Significance(result);
  result = h3IngEndings(result);
  result = h4Promotional(result);
  result = h5VagueAttributions(result);
  result = h6Challenges(result);
  result = h7AiVocabulary(result);
  result = h8CopulaAvoidance(result);
  result = h9NegParallelism(result);
  result = h11ElegantVariation(result);
  result = h12FalseRanges(result);
  result = h13PassiveVoice(result);
  result = h14EmDashes(result);
  result = h16InlineHeaders(result);
  result = h17TitleCase(result);
  result = h18Emojis(result);
  result = h19CurlyQuotes(result);
  result = h20Collaborative(result);
  result = h21CutoffDisclaimers(result);
  result = h22Sycophantic(result);
  result = h23Filler(result);
  result = h24Hedging(result);
  result = h25GenericConclusions(result);
  result = h26Hyphenated(result);
  result = h27Persuasive(result);
  result = h28Signposting(result);
  result = h30DiffAnchored(result);
  result = h33Rhetorical(result);

  // Multi-line patterns
  result = h29FragmentedHeaders(result);
  result = h31Staccato(result);

  // Cleanup
  result = result
    .replace(/[ ]{2,}/g, ' ')
    .replace(/\s+\./g, '.')
    .replace(/\s+,/g, ',')
    .replace(/,\./g, '.')
    .replace(/^,\s*/, '')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/\.([A-Z])/g, '. $1')
    .trim();

  return result;
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
      } else {
        walkObjectWithPath(obj[key], visitor, childPath);
      }
    }
  }
}

// Context-aware rewrite for FAE/FAQ/[Data Pending]
const FAE_PURE_TEMPLATE = /^Based on extensive experience supporting customers with .+?[,.] this solution addresses critical design challenges through proven architecture/;
const FAQ_FOOTER = / For more detailed information and application guidance, please consult the product datasheet or contact our technical support team\.?/gi;
const CONTACT_FOOTER = /Contact our technical support team to [^.!]+\./gi;
const DATA_PENDING = /^\[Data Pending\][^.]*\.\s*/gm;

function buildFaeContent(fi, solutionTitle, brandName) {
  const parts = [];
  if (fi.summary && fi.summary.length > 20 && !fi.summary.includes('Based on extensive')) {
    parts.push(fi.summary);
  } else if (fi.recommendation && fi.recommendation.length > 20 && !fi.recommendation.includes('Based on extensive')) {
    parts.push(fi.recommendation);
  } else if (fi.keyConsiderations) {
    const kc = Array.isArray(fi.keyConsiderations) ? fi.keyConsiderations.join(' ') : fi.keyConsiderations;
    if (kc.length > 20) parts.push(kc);
  }
  if (fi.keyTakeaways && Array.isArray(fi.keyTakeaways) && fi.keyTakeaways.length > 0) {
    parts.push('Key considerations: ' + fi.keyTakeaways.join('; ') + '.');
  }
  if (fi.commonPitfalls && Array.isArray(fi.commonPitfalls) && fi.commonPitfalls.length > 0) {
    parts.push('Common pitfalls to avoid: ' + fi.commonPitfalls.join('; ') + '.');
  }
  if (parts.length === 0 && solutionTitle) {
    parts.push(`${brandName}'s ${solutionTitle} provides a proven solution for this application. For detailed design guidance, contact our application team.`);
  }
  return parts.join('\n\n');
}

function rewriteBrandContent(data, brandName) {
  let changes = 0;

  // FAE Insights
  const solutions = data.solutions;
  if (Array.isArray(solutions)) {
    for (const s of solutions) {
      const fi = s.faeInsights;
      if (!fi || typeof fi.content !== 'string') continue;
      if (FAE_PURE_TEMPLATE.test(fi.content)) {
        const rebuilt = buildFaeContent(fi, s.title || s.slug, brandName);
        if (rebuilt && rebuilt !== fi.content) {
          fi.content = rebuilt;
          changes++;
        }
      }
    }
  }

  // FAQ footer
  for (const art of (data.articles || [])) {
    for (const faq of (art.faqs || [])) {
      if (typeof faq.answer === 'string' && FAQ_FOOTER.test(faq.answer)) {
        FAQ_FOOTER.lastIndex = 0;
        faq.answer = faq.answer.replace(FAQ_FOOTER, ` For detailed specifications and application support on ${brandName} products, refer to the datasheet or contact our team.`);
        changes++;
      }
    }
  }
  for (const cat of (data.categories || [])) {
    for (const prod of (cat.products || [])) {
      for (const faq of (prod.faqs || [])) {
        if (typeof faq.answer === 'string' && FAQ_FOOTER.test(faq.answer)) {
          FAQ_FOOTER.lastIndex = 0;
          faq.answer = faq.answer.replace(FAQ_FOOTER, ` For detailed specifications and application support on ${brandName} ${prod.partNumber || ''}, refer to the datasheet or contact our team.`);
          changes++;
        }
      }
    }
  }

  // Contact footer
  for (const art of (data.articles || [])) {
    for (const faq of (art.faqs || [])) {
      if (typeof faq.answer === 'string' && CONTACT_FOOTER.test(faq.answer)) {
        CONTACT_FOOTER.lastIndex = 0;
        faq.answer = faq.answer.replace(CONTACT_FOOTER, `Contact ${brandName}'s technical support team for application-specific design guidance and recommendations. `);
        changes++;
      }
    }
  }
  for (const cat of (data.categories || [])) {
    for (const prod of (cat.products || [])) {
      if (prod.faeReview && typeof prod.faeReview.content === 'string' && CONTACT_FOOTER.test(prod.faeReview.content)) {
        CONTACT_FOOTER.lastIndex = 0;
        prod.faeReview.content = prod.faeReview.content.replace(CONTACT_FOOTER, `Contact ${brandName}'s technical support team for application-specific design guidance and recommendations. `);
        changes++;
      }
    }
  }

  // [Data Pending] replacement
  for (const section of ['articles', 'news']) {
    for (const item of (data[section] || [])) {
      if (!Array.isArray(item.content)) continue;
      const summary = item.summary || item.description || '';
      const tags = Array.isArray(item.tags) ? item.tags.join(', ') : '';
      let modified = false;
      item.content = item.content.map((p, idx) => {
        if (typeof p !== 'string' || !/\[Data Pending\]/.test(p)) return p;
        modified = true;
        const variants = [
          summary.length > 20 ? summary : `${brandName} ${item.title || item.slug}: ${summary || 'Comprehensive guide for product selection and application design.'}`,
          tags ? `Key topics covered include ${tags}. This section provides detailed technical information for engineers designing with ${brandName} products.` : `Design considerations include electrical specifications, thermal management, and application-specific requirements. Refer to the product documentation for detailed parameters.`,
          `For specific application requirements and design assistance, contact ${brandName}'s technical support team or refer to the official product documentation and reference designs.`
        ];
        return variants[idx] || variants[variants.length - 1];
      });
      if (modified) changes++;
    }
  }

  return changes;
}

function processBrand(brandDir) {
  const brandName = path.basename(brandDir);
  console.log(`\nProcessing: ${brandName}`);

  const files = ['brand.json', 'products.json', 'solutions.json', 'support.json', 'news.json'];
  let totalFields = 0;

  for (const file of files) {
    const filePath = path.join(brandDir, file);
    if (!fs.existsSync(filePath)) continue;

    try {
      const raw = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(raw);
      const before = JSON.stringify(data);

      let fieldCount = 0;
      let rewriteCount = 0;

      walkObjectWithPath(data, (text, fieldPath) => {
        if (!isLongformPath(fieldPath)) return text;
        const humanized = humanizeLongform(text);
        if (humanized !== text) fieldCount++;
        return humanized;
      });

      rewriteCount = rewriteBrandContent(data, brandName);
      const total = fieldCount + rewriteCount;

      const after = JSON.stringify(data);
      if (after !== before) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
        totalFields += total;
        const flag = rewriteCount > 0 ? ` (${rewriteCount} context-rewritten)` : '';
        console.log(`  ${file}: ${total} long-form changed${flag}`);
      } else {
        console.log(`  ${file}: no changes`);
      }
    } catch (err) {
      console.error(`  ERROR ${file}: ${err.message}`);
    }
  }

  return totalFields;
}

function main() {
  const startTime = Date.now();
  const brandDirs = fs.readdirSync(DATA_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('_') && !d.name.startsWith('.'))
    .map(d => path.join(DATA_DIR, d.name))
    .sort((a, b) => path.basename(a).localeCompare(path.basename(b)));

  const target = process.argv[2];
  const filtered = target
    ? brandDirs.filter(d => path.basename(d).toLowerCase() === target.toLowerCase())
    : brandDirs;

  console.log(`Target brands: ${filtered.length} alphabetically (${target || 'all'})`);
  let totalFields = 0;

  for (const dir of filtered) {
    totalFields += processBrand(dir);
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n=== Done in ${elapsed}s ===`);
  console.log(`Total long-form fields changed: ${totalFields}`);
}

main();
