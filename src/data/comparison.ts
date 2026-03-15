export interface ComparisonRow {
  dimension: string;
  current: string;
  triveda: string;
}

export const comparisonRows: ComparisonRow[] = [
  {
    dimension: 'Core loop',
    current: 'Episodic consultation',
    triveda: 'Daily food companion',
  },
  {
    dimension: 'Features',
    current: '22 routes, shallow',
    triveda: '5 screens, deep',
  },
  {
    dimension: 'AI role',
    current: 'LLM is the product',
    triveda: 'LLM only explains',
  },
  {
    dimension: 'Defensibility',
    current: 'Copy the prompts',
    triveda: 'Structured DB + scoring = IP',
  },
  {
    dimension: 'Daily use',
    current: 'None',
    triveda: '"What should I eat today?"',
  },
  {
    dimension: 'Trust',
    current: 'None',
    triveda: 'Show reasoning, cite sources, surface disagreements',
  },
  {
    dimension: 'Personalization',
    current: 'None',
    triveda: 'Learns from every food response',
  },
];
