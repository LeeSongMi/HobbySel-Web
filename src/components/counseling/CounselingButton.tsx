import Link, { LinkProps } from 'next/link';
import { FC, HTMLProps } from 'react';

const CounselingButton: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({ href, children }) => (
  <Link href={href}>
    <button className="button-text" type="button">
      {children}
    </button>
  </Link>
);
export default CounselingButton;
