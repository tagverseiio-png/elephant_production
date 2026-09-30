import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { getCaseStudy } from '@/data/caseStudies';

export const metadata = {
  title: 'Northbound Films — Work | The Elephant Production',
  description:
    'How The Elephant Production engineered a cinematic brand film that established Northbound Films as the companion for every journey.',
};

export default function NorthboundFilmsPage() {
  return <CaseStudy study={getCaseStudy('away')} />;
}
