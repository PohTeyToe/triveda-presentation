export interface TraditionPanel {
  tradition: string;
  color: string;
  label: string;
  content: string;
}

export interface DemoScene {
  id: string;
  title: string;
  weather: string;
  suggestion: string;
  rationale: string;
  convergenceLine: string;
  isDisagreement: boolean;
  panels: TraditionPanel[];
}

export const demoScenes: DemoScene[] = [
  {
    id: 'convergence',
    title: 'Today — Early Spring',
    weather: '46\u00b0F, warming to 62. Dry, with wind building after noon.',
    suggestion: 'Warm oatmeal with ghee, cardamom, and stewed apples.',
    rationale:
      'Grounding, warm, and easy on your digestion \u2014 which peaks in the next two hours. The wind this afternoon will stir restless energy; a heavy breakfast anchors you.',
    convergenceLine:
      'All three traditions point the same direction this morning: warm, heavy, grounding food for your constitution in a windy, transitional season.',
    isDisagreement: false,
    panels: [
      {
        tradition: 'Ayurveda',
        color: '#22c55e',
        label: 'Your Constitution',
        content:
          'Oats are Madhura (sweet) and Guru (heavy) \u2014 they directly ground Vata\u2019s mobile, scattered quality. Spring is Vasanta Ritu, when Kapha accumulated over winter begins to liquefy and Vata remains aggravated by lingering cold and wind. Ghee lubricates your GI tract without overheating Pitta. Cardamom (Ela) kindles Agni gently enough for Pitta types.',
      },
      {
        tradition: 'TCM',
        color: '#ed7523',
        label: 'Your Energy Today',
        content:
          'You opened the app during Stomach hour (7\u20139 AM), when your digestive energy peaks. The wind today is significant for your Wood element \u2014 Wind is Wood\u2019s climate, and it stirs Liver Qi that is already rising with spring. The heavy, grounding quality of oats and ghee counteracts the rising energy before it builds.',
      },
      {
        tradition: 'Naturopathy',
        color: '#6b8156',
        label: 'The Evidence',
        content:
          'Oat beta-glucan (3\u20134g per serving) moderates postprandial glucose response. Ghee contains butyrate, a short-chain fatty acid with demonstrated anti-inflammatory effects on intestinal epithelium. No controlled trials exist for constitution-specific oat recommendations \u2014 this guidance is traditional, not clinically validated.',
      },
    ],
  },
  {
    id: 'disagreement',
    title: 'Friday Morning',
    weather: 'You slept poorly. Woke with acid reflux.',
    suggestion: 'Coconut rice with fennel and coriander.',
    rationale:
      'Your reflux needs cooling. Avoid sour and spicy until it settles. Eat slowly.',
    convergenceLine:
      'Traditions split on one detail here. Ayurveda and Naturopathy align on cooling foods. TCM raises a different angle.',
    isDisagreement: true,
    panels: [
      {
        tradition: 'Ayurveda',
        color: '#22c55e',
        label: 'Your Constitution',
        content:
          'Acid reflux is Pitta aggravation \u2014 excess heat in the stomach (Amlapitta). Coconut is the premier Pitta-cooling food. Fennel and coriander are cooling digestives that reduce acid without suppressing Agni. Avoid sour tastes entirely \u2014 they increase Pitta.',
      },
      {
        tradition: 'TCM',
        color: '#ed7523',
        label: 'Your Energy Today',
        content:
          'TCM sees two possible patterns behind reflux. If this is Stomach Fire, the cooling approach is correct. But your feedback pattern \u2014 reflux worsening on stressful days \u2014 suggests Liver Qi stagnation invading the Stomach. If that is the root, small amounts of sour flavors may actually help regulate Liver Qi. This directly contradicts Ayurveda\u2019s \u201cavoid all sour\u201d guidance.',
      },
      {
        tradition: 'Naturopathy',
        color: '#6b8156',
        label: 'The Evidence',
        content:
          'Fennel has demonstrated carminative effects in multiple clinical trials. Coconut oil has preliminary evidence for gastric mucosal protection. Your symptom pattern (worse after spicy food, better with cooling foods) is more consistent with genuine hyperacidity. The cooling approach is well-supported.',
      },
    ],
  },
];
