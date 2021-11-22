import Head from 'next/head'
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <footer className="flex items-center justify-center w-full h-24 border-t">
        All Right Reserved by
        <span className="cursor-pointer ml-1 font-bold">AMINUL</span>
      </footer>
    </div>
  );
}
