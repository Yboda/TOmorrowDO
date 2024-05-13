'use client';

import Image from 'next/image';
import * as style from '../_styles/profile.css';
import { useSession } from 'next-auth/react';
import Button from '@/app/_components/Button';
import Link from 'next/link';

function Profile() {
  const { data: user } = useSession();

  return (
    <div className={style.container}>
      {user ? (
        <Link href='/member/login'>로그인 하러 가기 ＞ </Link>
      ) : (
        <div className={style.profile}>
          <figure className={style.figure}>
            <Image src='/img/ddubi' alt='badge' className={style.badge} width='30' height='30' />
          </figure>
          <div className={style.nicknameWrap}>
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
