import Image from 'next/image';

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="relative hidden bg-[#fafafa] md:block">
        <Image
          src="https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=100"
          alt="Auth Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="mx-auto flex h-full max-w-[500px] flex-col justify-center px-6 md:px-10">
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;
