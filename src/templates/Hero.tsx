import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/MTI-Schach-App/Einfach-Schach">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="https://play.einfachschach.de">
            <a>Spielen</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Die einfache und inklusive\n'}
            <span className="text-primary-500">Schach App</span>
          </>
        }
        description="Schach lernen für wirklich jeden."
        button={
          <Link href="https://play.einfachschach.de">
            <a>
              <Button xl>Jetzt Spielen</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
