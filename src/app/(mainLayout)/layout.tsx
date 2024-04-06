import Header from './_component/Header';
import NavBar from './_component/NavBar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
