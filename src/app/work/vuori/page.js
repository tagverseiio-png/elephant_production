import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { getCaseStudy } from '@/data/caseStudies';

export const metadata = {
  title: 'Ridgeline Outfitters — Work | Elephant Media',
  description:
    'How Elephant Media engineered a cinematic brand film that established Ridgeline Outfitters as gear for life in motion.',
};

// Detail page driven by src/data/caseStudies.js — hero statement, impact
// narrative, services and media all render from the looked-up study.
export default function RidgelineOutfittersPage() {
  return <CaseStudy study={getCaseStudy('vuori')} />;
}
