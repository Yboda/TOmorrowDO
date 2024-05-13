'use client';

import { signOut, useSession } from 'next-auth/react';
import Button from './Button';

function Logout() {
  const { data : user } = useSession();

  if(!user) return;
  
  return (
    <Button onClick={() => signOut} color='outline'>
      로그아웃
    </Button>
  );
}

export default Logout;
