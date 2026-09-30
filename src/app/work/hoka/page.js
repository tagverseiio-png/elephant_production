import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { getCaseStudy } from '@/data/caseStudies';

export const metadata = {
  title: 'Cobalt Athletics — Work | The Elephant Production',
  description:
    'How The Elephant Production engineered a cinematic brand film that established Cobalt Athletics as built for the long run.',
};

export default function CobaltAthleticsPage() {
  return <CaseStudy study={getCaseStudy('hoka')} />;
}
