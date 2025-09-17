import clsx from 'clsx';
import type { ReactNode } from 'react';

type CardProps = { children: ReactNode; className: string; bg?: string };

const Card = ({ children, className, bg = 'bg-white' }: CardProps) => (
  <div className={clsx(bg, 'rounded-xl shadow-md', className)}>{children}</div>
);

export default Card;
