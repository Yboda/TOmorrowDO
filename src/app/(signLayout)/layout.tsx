import * as style from './_styles/layout.css';

export default function SignLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.container}>
      {children}
    </div>
  );
}
