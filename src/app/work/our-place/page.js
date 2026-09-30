import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { getCaseStudy } from '@/data/caseStudies';

export const metadata = {
  title: 'Solace Home — Work | Elephant Media',
  description:
    'How Elephant Media engineered a cinematic brand film that established Solace Home as the heart of every household.',
};

// Detail page driven by src/data/caseStudies.js — hero statement, impact
// narrative, services and media all render from the looked-up study.
export default function SolaceHomePage() {
  return <CaseStudy study={getCaseStudy('our-place')} />;
}
