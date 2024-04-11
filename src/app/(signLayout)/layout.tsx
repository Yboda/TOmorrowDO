import * as style from './_styles/layout.css';

export default function SignLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.container}>
      <div className={style.leftSection}>
        <span className={style.logo}>
          TO<span>morrow</span> DO!
        </span>
      </div>
      <div className={style.rightSection}>{children}</div>
    </div>
  );
}
