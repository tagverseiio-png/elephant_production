import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { getCaseStudy } from '@/data/caseStudies';

export const metadata = {
  title: 'Harbour & Vale — Work | Elephant Media',
  description:
    'How Elephant Media engineered a cinematic brand film that established Harbour & Vale as a table worth gathering around.',
};

// Detail page driven by src/data/caseStudies.js — hero statement, impact
// narrative, services and media all render from the looked-up study.
export default function HarbourValePage() {
  return <CaseStudy study={getCaseStudy('pressed')} />;
}
