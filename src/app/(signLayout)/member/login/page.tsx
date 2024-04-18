'use client';
import Button from '@/app/_components/Button';
import { useRouter } from 'next/navigation';
import * as style from './login.css';
import Flex from '@/app/_components/Flex';
import Input from '@/app/_components/Input';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginInfoSchema } from '@/validators/authValidation';
import { z } from 'zod';

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
    // 로그인 처리
    console.log(data)
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
          <Link href='/member/findId'>아이디 찾기</Link>
        </li>
        <li className={style.linkItem}>
          <Link href='/member/findPw'>비밀번호 찾기</Link>
        </li>
        <li className={style.linkItem}>
          <Link href='/member/signup'>회원가입</Link>
        </li>
      </ul>
    </div>
  );
}
