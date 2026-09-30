import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { getCaseStudy } from '@/data/caseStudies';

export const metadata = {
  title: 'Cobalt Athletics — Work | Elephant Media',
  description:
    'How Elephant Media engineered a cinematic brand film that established Cobalt Athletics as built for the long run.',
};

// Detail page driven by src/data/caseStudies.js — hero statement, impact
// narrative, services and media all render from the looked-up study.
export default function CobaltAthleticsPage() {
  return <CaseStudy study={getCaseStudy('hoka')} />;
}
