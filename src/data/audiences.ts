export interface Audience {
  priority: string;
  name: string;
  color: string;
  bullets: string[];
  devilsAdvocate?: string;
}

export const audiences: Audience[] = [
  {
    priority: 'Primary',
    name: 'Functional Medicine Curious',
    color: '#ed7523',
    bullets: [
      'Shopping for frameworks, not committed to any system',
      'Values convergence as trust signal \u2014 "if three systems agree, pay attention"',
      'Values the evidence layer \u2014 "where does the science run out?"',
      'Already spends money on wellness \u2014 $4.99/month is trivial',
      'Findable: r/Supplements, r/Biohacking, functional medicine Instagram',
    ],
  },
  {
    priority: 'Secondary',
    name: 'Yoga-to-Ayurveda Pipeline',
    color: '#22c55e',
    bullets: [
      'Already bought into one tradition, curious about others',
      'Risk: they came for deeper Ayurveda, not three traditions',
    ],
    devilsAdvocate:
      'Devil\u2019s advocate found: \u201cTriveda is a downgrade from their existing Ayurveda content ecosystem.\u201d',
  },
  {
    priority: 'Tertiary',
    name: 'Intellectual Hobbyists',
    color: '#6b8156',
    bullets: [
      'Framework thinkers (Huberman Lab watchers)',
      'Format mismatch: daily card is too shallow for their preferred depth',
      'Better served by a knowledge base than a daily companion',
    ],
    devilsAdvocate:
      'They want depth, not daily drips.',
  },
];

export const headspaceAnalogy = {
  title: 'The Headspace Analogy \u2014 Where It Breaks',
  content:
    'Headspace works because meditation needs nothing but time. Triveda needs behavior change \u2014 buying ingredients, cooking differently. Better frame: Oura Ring (multi-signal daily synthesis into one actionable number) or Co\u2011Star (daily card about your type that drives identity + sharing).',
};
