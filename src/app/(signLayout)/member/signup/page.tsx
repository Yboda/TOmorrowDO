'use client';
import Input from '@/app/_components/Input';
import * as style from './signup.css';
import Button from '@/app/_components/Button';
import { UserSchema } from '@/validators/authValidation';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { signIn } from 'next-auth/react';

export default function SignupPage() {
  const router = useRouter();
  type User = z.infer<typeof UserSchema>;

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(UserSchema),
    // mode: 'onSubmit',
    // reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      passwordCheck: '',
    },
  });

  interface ErrorData {
    error: string,
    message: string,
    statusCode: number,
  }

  const onSubmitHandler: SubmitHandler<User> = async ({ email, nickname, password }) => {
    try {
      // 가입처리
      await axios.post(`${process.env.NEXT_PUBLIC_DB_HOST}/auth/register/email`, {
        email,
        password,
        nickname,
      });

      // 로그인처리
      await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      router.replace('/');
    } catch (err) {
      if (axios.isAxiosError<ErrorData>(err)) alert(err.response?.data.message);
    }
  };

  return (
    <div className={style.container}>
      <header className={style.header}>
        <h2 className={style.title}>회원가입</h2>
      </header>
      <div className={style.formContainer}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <label className={style.label}>
            <span className={style.required}>이메일</span>
            <Input placeholder='이메일을 입력해주세요.' {...register('email')} />
            {errors.email && <p>{errors.email.message}</p>}
          </label>
          <label className={style.label}>
            <span className={style.required}>닉네임</span>
            <Input placeholder='닉네임을 입력해주세요.' {...register('nickname')} />
            {errors.nickname && <p>{errors.nickname.message}</p>}
          </label>
          <label className={style.label}>
            <span className={style.required}>비밀번호</span>
            <Input
              type='password'
              placeholder='비밀번호를 입력해주세요.'
              {...register('password')}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </label>
          <label className={style.label}>
            <span className={style.required}>비밀번호 확인</span>
            <Input
              type='password'
              placeholder='비밀번호를 다시 한 번 입력해주세요.'
              {...register('passwordCheck')}
            />
            {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>}
          </label>
          <Button type='submit' size='full'>
            회원가입 완료하기
          </Button>
        </form>
      </div>
    </div>
  );
}
