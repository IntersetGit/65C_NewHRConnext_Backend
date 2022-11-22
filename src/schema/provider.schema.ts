import { date, object, string, TypeOf } from 'zod';

export const loginproviderSchema = object({
  body: object({
    email: string({ required_error: 'email is required' }).email(
      'email is not valid',
    ),
    password: string({ required_error: 'password is required' }).min(
      6,
      'password must be at least 6 characters',
    ),
  }),
});

export type loginproviderInput = TypeOf<typeof loginproviderSchema>["body"];
