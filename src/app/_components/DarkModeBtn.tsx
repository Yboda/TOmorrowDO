'use client';

import DarkModeSun from '@/../public/svg/darkmode_sun.svg';
import DarkModeMoon from '@/../public/svg/darkmode_moon.svg';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

function DarkModeBtn() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const changeThemeHandler = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button type='button' className='' onClick={changeThemeHandler}>
      {!mounted ? null : resolvedTheme === 'light' ? <DarkModeSun /> : <DarkModeMoon />}

      <span style={{ display: 'none' }}>DarkModeBtn</span>
    </button>
  );
}

export default DarkModeBtn;
