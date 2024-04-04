type BtnType = 'button' | 'submit';

function Button({ children, type = 'button' }: { children: React.ReactNode; type?: BtnType }) {
  return <button type={type}>{children}</button>;
}

export default Button;
