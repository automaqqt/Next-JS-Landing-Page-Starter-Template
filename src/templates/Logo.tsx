import Image from 'next/image';

import Log from '../../public/assets/images/logo.png';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <Image src={Log} height={128} width={128} />
    </span>
  );
};

export { Logo };
