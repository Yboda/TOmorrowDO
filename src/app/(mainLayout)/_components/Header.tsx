
import Flex from '@/app/_components/Flex';
import NavBar from './NavBar';
import Profile from './Profile';

function Header() {
  return (
    <Flex options={{fd:"column"}}>
      <Profile />
      <NavBar />
    </Flex>
  );
}

export default Header;
