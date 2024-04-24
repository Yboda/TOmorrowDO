'use client';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginInfoSchema } from '@/validators/authValidation';
import { z } from 'zod';
import axios from 'axios';
import * as style from './login.css';
import Button from '@/app/_components/Button';
import Flex from '@/app/_components/Flex';
import Input from '@/app/_components/Input';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const router = useRouter();
  type User = z.infer<typeof LoginInfoSchema>;

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(LoginInfoSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitHandler: SubmitHandler<User> = async (data) => {
    try {
      // const res = await axios.post(`${process.env.NEXT_PUBLIC_DB_HOST}/auth/login/email`, data, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: `Basic ${btoa(`${data.email}:${data.password}`)}`,
      //   },
      // });

      // TODO: nextjs 로그인처리
      await signIn('credentials', {
        ...data,
        redirect: false,
      });
      router.replace('/');
    } catch (err) {
      alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
      console.log(err);
    }
  };

  return (
    <div className={style.container}>
      <h2 className={style.hidden}>로그인</h2>
      <div className={style.logo}>
        <p>
          TO<span>morrow</span>DO!
        </p>
      </div>
      <p className={style.loginMsg}>로그인하고, TODO를 완료하고, 함께 LEVEL UP해요! 😍</p>
      <div className={style.formWrap}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Flex options={{ fd: 'column', gap: '10px', width: '100%' }}>
            <label>
              <Input placeholder='아이디(이메일)을 입력해주세요.' {...register('email')} />
              {errors.email && <p>{errors.email.message}</p>}
            </label>
            <label>
              <Input
                type='password'
                placeholder='비밀번호를 입력해주세요.'
                {...register('password')}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </label>
            <Button type='submit' size='full'>
              로그인
            </Button>
          </Flex>
        </form>
      </div>
      <ul className={style.linkList}>
        <li className={style.linkItem}>
          <Link href='/users/findId'>아이디 찾기</Link>
        </li>
        <li className={style.linkItem}>
          <Link href='/users/findPw'>비밀번호 찾기</Link>
        </li>
        <li className={style.linkItem}>
          <Link href='/users/signup'>회원가입</Link>
        </li>
      </ul>
    </div>
  );
}
