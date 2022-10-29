import { useRouter } from 'next/router';

export function Home() {
  const router = useRouter();

  return <div className="flex flex-auto"></div>;
}

export default Home;
