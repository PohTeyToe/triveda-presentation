import { useScrollProgress } from './hooks/useScrollProgress';
import ProgressBar from './components/shared/ProgressBar';
import Navigation from './components/shared/Navigation';
import ChatFab from './components/shared/ChatFab';
import S01Hero from './components/sections/S01Hero';
import S02Problem from './components/sections/S02Problem';
import S03Insight from './components/sections/S03Insight';
import S04WhatIsTriveda from './components/sections/S04WhatIsTriveda';
import S05DailyExperience from './components/sections/S05DailyExperience';
import S06Contradictions from './components/sections/S06Contradictions';
import S07Architecture from './components/sections/S07Architecture';
import S08Comparison from './components/sections/S08Comparison';
import S09Audience from './components/sections/S09Audience';
import S10Approach from './components/sections/S10Approach';
import S11CTA from './components/sections/S11CTA';

export default function PresentationPage() {
  const { progress, activeSection } = useScrollProgress();

  return (
    <>
      <ProgressBar progress={progress} />
      <Navigation activeSection={activeSection} />
      <ChatFab visible={activeSection > 0} />
      <main>
        <S01Hero />
        <S02Problem />
        <S03Insight />
        <S04WhatIsTriveda />
        <S05DailyExperience />
        <S06Contradictions />
        <S07Architecture />
        <S08Comparison />
        <S09Audience />
        <S10Approach />
        <S11CTA />
      </main>
    </>
  );
}
