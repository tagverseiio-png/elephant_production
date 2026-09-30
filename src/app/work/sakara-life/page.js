import CaseStudy from '@/components/CaseStudy/CaseStudy';
import { getCaseStudy } from '@/data/caseStudies';

export const metadata = {
  title: 'Atelier Verdant — Work | The Elephant Production',
  description:
    'How The Elephant Production engineered a cinematic brand film that established Atelier Verdant as a sanctuary for slow living.',
};

export default function AtelierVerdantPage() {
  return <CaseStudy study={getCaseStudy('sakara-life')} />;
}
