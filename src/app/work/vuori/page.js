import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { getCaseStudy } from '@/data/caseStudies';

export const metadata = {
  title: 'Ridgeline Outfitters — Work | The Elephant Production',
  description:
    'How The Elephant Production engineered a cinematic brand film that established Ridgeline Outfitters as gear for life in motion.',
};

export default function RidgelineOutfittersPage() {
  return <CaseStudy study={getCaseStudy('vuori')} />;
}
