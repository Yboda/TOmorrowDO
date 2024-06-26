import { auth } from './auth';
import { NextResponse } from 'next/server';

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect(`http://localhost:3001/member/login`);
  }
}

export const config = {
  matcher: ['/mypage/:path*'],
};
