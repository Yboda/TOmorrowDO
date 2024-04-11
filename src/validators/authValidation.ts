import { z } from 'zod';

export const UserSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: '이메일을 입력해주세요.' })
      .email({ message: '이메일 형식에 맞지 않습니다' }),
    name: z.string().min(1, { message: '이름을 입력해주세요.' }),
    nickname: z.string().optional(),
    password: z.string().min(8, { message: '최소 8자 이상으로 입력해주세요.' }),
    passwordCheck: z.string().min(1, { message: '위 비밀번호와 동일하게 입력해주세요.' }),
  })
  .superRefine(({ password, passwordCheck }, context) => {
    if (password !== passwordCheck) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치하지 않습니다.',
        path: ['passwordCheck'],
      });
    }
  });

export const LoginInfoSchema = z.object({
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요.' })
    .email({ message: '이메일 형식에 맞지 않습니다' }),
  password: z.string().min(8, { message: '최소 8자 이상으로 입력해주세요.' }),
});
