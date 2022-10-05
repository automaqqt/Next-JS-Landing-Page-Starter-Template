import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Schach für alle"
    description="Unser Fokus liegt auf einem Design welches ALLE Menschen einschließt, so wird auf wichtige W3 Standards geachtet."
  >
    <VerticalFeatureRow
      title="Inklusiv"
      description="Innerhalb der App wird ein ganzheitlich inklusives Konzept umgesetzt. Alle Lerninhalte und Spielkomponenten sind mit einfacher Sprache verfasst. Unser Motto ist: Gemeinsam zum Erfolg!"
      image="/assets/images/feature3.svg"
      imageAlt="inclusive feature alt text"
    />
    <VerticalFeatureRow
      title="Kostenlos + Open Source"
      description="Einfach Schach ist kostenlos verfügbar und wird dies auch immer bleiben. Außerdem ist die gesamte Applikation Open Source und steht auf Github zur Verfügung."
      image="/assets/images/feature2.svg"
      imageAlt="free feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
