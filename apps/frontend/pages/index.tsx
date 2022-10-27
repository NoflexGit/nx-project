import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function Index() {
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className="flex flex-auto"></div>;
}

export default Index;
