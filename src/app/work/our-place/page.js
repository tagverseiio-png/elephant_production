import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { getCaseStudy } from '@/data/caseStudies';

export const metadata = {
  title: 'Solace Home — Work | The Elephant Production',
  description:
    'How The Elephant Production engineered a cinematic brand film that established Solace Home as the heart of every household.',
};

export default function SolaceHomePage() {
  return <CaseStudy study={getCaseStudy('our-place')} />;
}
