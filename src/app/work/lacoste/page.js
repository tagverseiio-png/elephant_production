import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { getCaseStudy } from '@/data/caseStudies';

export const metadata = {
  title: 'Maison Solstice — Work | Elephant Media',
  description:
    'How Elephant Media engineered a cinematic brand film that established Maison Solstice as a voice of modern couture.',
};

export default function MaisonSolsticePage() {
  return <CaseStudy study={getCaseStudy('lacoste')} />;
}
