'use client';
import Button from '@/app/_components/Button';
import { useRouter } from 'next/navigation';
import * as style from './login.css';
import Flex from '@/app/_components/Flex';
import DarkModeBtn from '@/app/_components/DarkModeBtn';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className={style.container}>
      <form>
        <h2 className={style.hidden}>Login Page</h2>
        <Flex options={{ fd: 'column', gap: '10px', width: '100%' }}>
          <Button type='submit' size='full'>
            로그인
          </Button>
          <Button onClick={() => router.replace('/signup')} size='full' color='outline'>
            회원가입
          </Button>
        </Flex>
        <DarkModeBtn />
      </form>
    </div>
  );
}
