import DarkModeBtn from '@/app/_components/DarkModeBtn';
import NavBar from './NavBar';
import Profile from './Profile';

function Header() {
  return (
    <div>
      <DarkModeBtn />
      <Profile />
      <NavBar />
    </div>
  );
}

export default Header;
