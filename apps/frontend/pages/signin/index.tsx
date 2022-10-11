import {
  Button,
  Checkbox,
  TextField,
  Typography,
} from '@nx-project/components';

export function Signin() {
  return (
    <main className="flex min-h-screen">
      <div className="basis-1/2 bg-[#fafafa]"></div>
      <div className="basis-1/2">
        <div className="flex flex-col justify-center h-full mx-auto w-[450px]">
          <div className="space-y-4">
            <Typography.Title size="2xl" weight="bold">
              Welcome Back to Sewo!
            </Typography.Title>
            <Typography.Text color="secondary">
              Sign in your account
            </Typography.Text>
          </div>
          <form className="mt-12">
            <div className="space-y-6">
              <TextField
                onChange={() => {
                  console.log(1);
                }}
                label="Your Email"
                placeholder="Enter E-mail"
              />
              <TextField
                onChange={() => {
                  console.log(1);
                }}
                label="Your Password"
                type="password"
                placeholder="Enter password"
              />
            </div>
            <div className="mt-4 mb-10">
              <Checkbox>Remember me</Checkbox>
            </div>
            <Button fluid>Login</Button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Signin;
