import * as style from '../_styles/input.css';
import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type, placeholder, ...props }, ref) => {
  return (
    <input className={style.Input} type={type} placeholder={placeholder} ref={ref} {...props} />
  );
});

Input.displayName = 'Input';

export default Input;
