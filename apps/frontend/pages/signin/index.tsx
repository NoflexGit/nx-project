import { useState } from 'react';
import { Button, Checkbox, TextField, Typography } from '@common/components';
import { useAuth } from '@frontend/hooks';
import { useRouter } from 'next/router';

export function Signin() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = (value: string) => setUsername(value);
  const handleChangePassword = (value: string) => setPassword(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signIn({ username, password });
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex min-h-screen">
      <div className="basis-1/2 bg-[#fafafa]"></div>
      <div className="basis-1/2">
        <div className="mx-auto flex h-full w-[450px] flex-col justify-center">
          <div className="space-y-4">
            <Typography.Title size="2xl" weight="bold">
              Welcome Back to Sewo!
            </Typography.Title>
            <Typography.Text color="secondary">
              Sign in your account
            </Typography.Text>
          </div>
          <form className="mt-12" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <TextField
                onChange={handleChangeUsername}
                label="Your Email"
                placeholder="Enter E-mail"
              />
              <TextField
                onChange={handleChangePassword}
                label="Your Password"
                type="password"
                placeholder="Enter password"
              />
            </div>
            <div className="mt-4 mb-10">
              <Checkbox>Remember me</Checkbox>
            </div>
            <Button type="submit" fluid>
              Login
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Signin;
