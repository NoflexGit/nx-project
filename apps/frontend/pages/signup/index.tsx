import { Button, TextField, Typography } from '@common/components';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import * as yup from 'yup';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';

import { AuthLayout } from '@frontend/layouts';
import { REGISTER_USER_MUTATION } from '@frontend/grapql/auth';

export function Signup() {
  const [register, { loading, error, data }] = useMutation(
    REGISTER_USER_MUTATION
  );

  console.log(error);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required('Required field'),
        email: yup
          .string()
          .email('Incorrect e-mail')
          .required('Required field'),
        password: yup.string().required('Required field'),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password'), null], 'Passwords must match'),
      })
    ),
  });

  const onSubmit = async ({ name, email, password }) => {
    try {
      await register({
        variables: {
          name,
          email,
          password,
        },
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="space-y-4">
        <Typography.Title size="2xl" weight="bold">
          Create your Free Account
        </Typography.Title>
        <Typography.Text color="secondary">
          Sumbit your data for register
        </Typography.Text>
      </div>
      <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-10 space-y-6">
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Full name"
                placeholder="Enter full name"
                onChange={onChange}
                value={value}
                error={errors.name?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Email"
                placeholder="Enter email"
                onChange={onChange}
                value={value}
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Password"
                placeholder="Enter password"
                onChange={onChange}
                value={value}
                error={errors.password?.message}
                type="password"
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Repeat password"
                placeholder="Repeat password"
                onChange={onChange}
                value={value}
                error={errors.confirmPassword?.message}
                type="password"
              />
            )}
          />
        </div>
        <Button type="submit" fluid>
          Register
        </Button>
      </form>
      <div className="mt-6 flex justify-center">
        <Typography.Text color="secondary">
          Have an account?
          <Link href="/signin">
            <a className="text-primary-500 ml-1 hover:underline">Sign In</a>
          </Link>
        </Typography.Text>
      </div>
    </>
  );
}

Signup.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Signup;
