import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Genug gelesen? Jetzt ist es an der Zeit endlich zu spielen."
      subtitle="Spiele Schach, einfach!"
      button={
        <Link href="https://play.einfachschach.de">
          <a>
            <Button>Jetzt Spielen</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
