import axios from 'axios';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: '/member/login',
    newUser: '/member/signup',
  },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // logic to verify if user exists
        try {
          const authResponse = await axios.post(
            `${process.env.NEXT_PUBLIC_DB_HOST}/auth/login/email`,
            credentials,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(`${credentials.email}:${credentials.password}`)}`,
              },
            }
          );

          // // token decode
          // interface decodedJWT {
          //   email: string;
          //   exp: number;
          //   iat: number;
          //   nickname: string;
          //   sub: number;
          //   type: string;
          // }
          // const accessPayload = authResponse.data.accessToken.split('.')[1];
          // const urlSafeBase64 = accessPayload.replace(/-/g, '+').replace(/_/g, '/');
          // const decodedJWT: decodedJWT = JSON.parse(
          //   decodeURIComponent(
          //     atob(urlSafeBase64)
          //       .split('')
          //       .map(function (c) {
          //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          //       })
          //       .join('')
          //   )
          // );
          // return user object with the their profile data
          // const user = {
          //   email: decodedJWT.email,
          //   name: decodedJWT.nickname,
          //   accessToken: authResponse.data.accessToken,
          //   refreshToken: authResponse.data.refreshToken,
          // }
          return {
            ...authResponse.data,
          };
        } catch (err) {
          throw new Error('User not found.');
        }
      },
    }),
  ],
  callbacks: {
    // token decode
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
});
