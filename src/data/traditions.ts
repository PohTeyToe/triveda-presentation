export interface Tradition {
  name: string;
  shortName: string;
  color: string;
  lens: string;
  description: string;
  detail: string;
  role: string;
}

export const traditions: Tradition[] = [
  {
    name: 'Ayurveda',
    shortName: 'Ayurveda',
    color: '#22c55e',
    lens: 'The Food Lens',
    description: 'What to eat and why it fits your body',
    detail:
      'Constitutional typing (dosha classification with genomic validation), food-as-medicine reasoning (rasa/virya/vipaka), and seasonal dietary protocols (Ritucharya). Answers: what to eat and why it fits your body.',
    role: 'Constitutional pillar',
  },
  {
    name: 'Traditional Chinese Medicine',
    shortName: 'TCM',
    color: '#ed7523',
    lens: 'The Energy Lens',
    description: 'When to eat and what your energy means today',
    detail:
      'The temporal-emotional layer — organ clock timing (when to eat), seasonal energy patterns, the emotion-body connection, and Five Element constitutional nuance. Answers: when to eat it and what your emotional state means for your digestion today.',
    role: 'Constitutional pillar',
  },
  {
    name: 'Naturopathy',
    shortName: 'Naturopathy',
    color: '#6b8156',
    lens: 'The Honesty Lens',
    description: 'What the science says, and where it runs out',
    detail:
      'The evidence bridge — what does biochemistry say? What clinical evidence exists, and where does it run out? The product\'s honesty layer, whose job is to say "no evidence for this specific claim" when that is the truth.',
    role: 'Empirical check',
  },
];
