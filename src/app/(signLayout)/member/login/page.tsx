'use client';
import Button from '@/app/_components/Button';
import { useRouter } from 'next/navigation';
import * as style from './login.css';
import Flex from '@/app/_components/Flex';
import DarkModeBtn from '@/app/_components/DarkModeBtn';
import Input from '@/app/_components/Input';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <p>
          TO<span>morrow</span>DO!
        </p>
      </div>
      <p className={style.loginMsg}>로그인하고, TODO를 완료하고, 함께 LEVEL UP해요! 😍</p>
      <div className={style.formWrap}>
        <form>
          <h2 className={style.hidden}>Login Page</h2>
          <Flex options={{ fd: 'column', gap: '10px', width: '100%' }}>
            <Input placeholder='아이디(이메일)을 입력해주세요.' />
            <Input type='password' placeholder='비밀번호를 입력해주세요.' />
            <Button type='submit' size='full'>
              로그인
            </Button>
          </Flex>
        </form>
      </div>
      <ul className={style.linkList}>
        <li className={style.linkItem}>
          <Link href='/member/findId'>아이디 찾기</Link>
        </li>
        <li className={style.linkItem}>
          <Link href='/member/findPw'>비밀번호 찾기</Link>
        </li>
        <li className={style.linkItem}>
          <Link href='/member/signup'>회원가입</Link>
        </li>
      </ul>
      <DarkModeBtn />
    </div>
  );
}
