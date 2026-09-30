import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { getCaseStudy } from '@/data/caseStudies';

export const metadata = {
  title: 'Lumen Skincare — Work | The Elephant Production',
  description:
    'How The Elephant Production engineered a cinematic brand film that established Lumen Skincare as a ritual worth keeping.',
};

export default function LumenSkincarePage() {
  return <CaseStudy study={getCaseStudy('kosas')} />;
}
