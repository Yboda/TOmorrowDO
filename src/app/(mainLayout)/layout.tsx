import Header from './_components/Header';
import NavBar from './_components/NavBar';
import * as style from './_styles/layout.css'
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.main}>{children}</div>
    </div>
  );
}
