import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { getCaseStudy } from '@/data/caseStudies';

export const metadata = {
  title: 'Atelier Verdant — Work | Elephant Media',
  description:
    'How Elephant Media engineered a cinematic brand film that established Atelier Verdant as a sanctuary for slow living.',
};

// Detail page driven by src/data/caseStudies.js — hero statement, impact
// narrative, services and media all render from the looked-up study.
export default function AtelierVerdantPage() {
  return <CaseStudy study={getCaseStudy('sakara-life')} />;
}
