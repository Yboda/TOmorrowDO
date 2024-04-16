import * as style from '../_styles/input.css'

type InputType = 'text' | 'password' | 'radio' | 'select';
type Props = {
  type?: InputType;
  placeholder?: string;
};

function Input({ type = 'text', placeholder }: Props) {
  return <input type={type} placeholder={placeholder} className={style.Input} />;
}

export default Input;
