type InputType = 'text' | 'password' | 'radio' | 'select';

function Input({ type = 'text' }: { type?: InputType }) {
  return <input type={type} />;
}

export default Input;
