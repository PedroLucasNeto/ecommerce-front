import { Poppins } from 'next/font/google';

const inter = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return <main className={`p-8 ${inter.className}`}></main>;
}
