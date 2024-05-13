"use client"

import DarkModeBtn from '@/app/_components/DarkModeBtn';
import Logout from '@/app/_components/Logout';
import * as style from '../_styles/navbar.css';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { assignInlineVars } from '@vanilla-extract/dynamic';

function NavBar() {
  const pathname = usePathname();
  const navList = [
    ['/', '메인페이지'],
    ['/posts', '게시판'],
    ['/todos', '나의 TODO'],
    ['/mypage', '마이페이지'],
  ];

  return (
    <div className={style.container}>
      <ul className={style.navList}>
        {navList.map((item, i)=> {
          return (
            <li key={i} className={style.navItem + ` ${pathname === item[0] && style.navItemActive}`}>
              <Link href={item[0]}>{item[1]}</Link>
            </li>
          );
        })}
      </ul>
      <div className={style.navBottom}>
        <DarkModeBtn />
        <Logout />
      </div>
    </div>
  );
}

export default NavBar;
