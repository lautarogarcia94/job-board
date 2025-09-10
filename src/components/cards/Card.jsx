import clsx from 'clsx';

const Card = ({ children, className, bg = 'bg-white' }) => (
  <div className={clsx(bg, 'rounded-xl shadow-md', className)}>{children}</div>
);

export default Card;
