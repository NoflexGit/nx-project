import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@frontend/hooks';

export function Index() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard');
    } else {
      router.push('/signin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn]);
  return <div className="flex flex-auto"></div>;
}

export default Index;
