import { Button, Checkbox, TextField, Typography } from '@common/components';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Cookies from 'js-cookie';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthLayout } from '@frontend/layouts';
import { useLazyQuery, useMutation } from '@apollo/client';
import { LOGIN_USER_MUTATION } from '@frontend/grapql/auth';
import { useEffect } from 'react';

export function Signin() {
  const router = useRouter();

  const [login] = useMutation(LOGIN_USER_MUTATION);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        email: yup
          .string()
          .email('Incorrect e-mail')
          .required('Required field'),
        password: yup.string().required('Required field'),
      })
    ),
  });

  const onSubmit = async ({ email, password }) => {
    try {
      const { data } = await login({
        variables: {
          email,
          password,
        },
      });

      localStorage.setItem('jwt_token', data.login.access_token);
      router.push('/dashboard');
    } catch (error) {}
  };

  return (
    <>
      <div className="space-y-4">
        <Typography.Title size="2xl" weight="bold">
          Welcome Back to Estaty!
        </Typography.Title>
        <Typography.Text color="secondary">
          Sign in your account
        </Typography.Text>
      </div>
      <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Your Email"
                placeholder="Enter E-mail"
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Your Password"
                type="password"
                placeholder="Enter password"
                error={errors.password?.message}
              />
            )}
          />
        </div>
        <div className="mt-4 mb-10">
          <Checkbox>Remember me</Checkbox>
        </div>
        <Button type="submit" view="primary" fluid>
          Login
        </Button>
      </form>
      <div className="mt-6 flex justify-center">
        <Typography.Text color="secondary">
          Don't have an account?
          <Link href="/signup">
            <a className="text-primary-500 ml-1 hover:underline">Sign Up</a>
          </Link>
        </Typography.Text>
      </div>
    </>
  );
}

Signin.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Signin;
