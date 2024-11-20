import twc from 'tw-classnames';

import { IButtonProps } from './IButton';

const classNames = {
  primary: 'text-white bg-primary px-4 font-secondary',
  secondary: 'text-white bg-secondary py-4 px-6 font-bold text-lg tracking-wider shadow-primary',
  text: '',
  default: 'font-secondary px-12 py-3 text-secondary border border-secondary-light bg-white',
  rounded: 'rounded-full w-18 h-18 bg-gray-150 flex-centered',
};

function Button({ variant = 'primary', suffixElement, prefixElement, className, children, ...rest }: IButtonProps) {
  return (
    <button
      type='button'
      className={twc('inline-flex items-center gap-6 rounded-md', classNames[variant], className)}
      {...rest}
    >
      {prefixElement}
      {children}
      {suffixElement}
    </button>
  );
}

export default Button;
