export interface Phase {
  label: string;
  weeks: string;
  color: string;
  title: string;
  bullets: string[];
}

export const phases: Phase[] = [
  {
    label: 'Phase 1',
    weeks: 'Weeks 1\u20132',
    color: '#14b8a6',
    title: 'Constitution Card + Progressive Profiling',
    bullets: [
      '3 questions to start \u2014 get your first card immediately',
      'Weave in 1 question per day as part of the daily experience',
      'Full profile builds itself by week 2 \u2014 user never fills out a form',
      'Beautiful shareable constitution card output',
      'Deploy, share with close contacts, gather feedback',
    ],
  },
  {
    label: 'Phase 2',
    weeks: 'Weeks 3\u20137',
    color: '#ed7523',
    title: 'Daily Food Engine',
    bullets: [
      'Scoring engine + 50-food structured database',
      'Three-call LLM architecture',
      'Deterministic convergence detection',
      'Weather + season integration',
      'Feedback loop \u2014 the app learns and gets better over time',
    ],
  },
];

export const metrics = [
  { label: 'Assessment completion', target: '>80%' },
  { label: 'Why panel engagement', target: '25\u201335%' },
  { label: 'Tradition expansion', target: '>40% non-Ayurvedic' },
  { label: 'Feedback engagement', target: '>40%' },
];
