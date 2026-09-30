import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { getCaseStudy } from '@/data/caseStudies';

export const metadata = {
  title: 'Harbour & Vale — Work | Elephant Media',
  description:
    'How Elephant Media engineered a cinematic brand film that established Harbour & Vale as a table worth gathering around.',
};

export default function HarbourValePage() {
  return <CaseStudy study={getCaseStudy('pressed')} />;
}
