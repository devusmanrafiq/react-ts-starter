import twc from 'tw-classnames';

import { ICardProps } from './ICard';

function Card({ className, heading = '', children, headingClassName, ...rest }: ICardProps) {
  return (
    <div className={twc('bg-gray-100 w-max text-secondary rounded-md', className)} {...rest}>
      {heading && <h2 className={twc('px-6 py-6 text-xl', headingClassName)}>{heading}</h2>}
      {children}
    </div>
  );
}

export default Card;
