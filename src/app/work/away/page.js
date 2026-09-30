import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { getCaseStudy } from '@/data/caseStudies';

export const metadata = {
  title: 'Northbound Films — Work | Elephant Media',
  description:
    'How Elephant Media engineered a cinematic brand film that established Northbound Films as the companion for every journey.',
};

// Detail page driven by src/data/caseStudies.js — hero statement, impact
// narrative, services and media all render from the looked-up study.
export default function NorthboundFilmsPage() {
  return <CaseStudy study={getCaseStudy('away')} />;
}
