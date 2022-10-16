import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push('/signin');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className="flex flex-auto"></div>;
}

export default Index;
