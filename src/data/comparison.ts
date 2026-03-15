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
    dimension: 'User sees',
    current: '22 features to navigate',
    triveda: 'Simple input/output \u2014 one card daily',
  },
  {
    dimension: '22 features',
    current: 'All user-facing, shallow',
    triveda: 'Backend intelligence \u2014 powers recommendations invisibly',
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
    triveda: 'Learns from every response \u2014 your little buddy',
  },
  {
    dimension: 'Onboarding',
    current: 'See all 22 features at once',
    triveda: '3 questions \u2192 first card \u2192 learns over time',
  },
];
