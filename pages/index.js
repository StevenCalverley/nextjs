import Head from 'next/head'
export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
      <Head>
        <title>Steven Calverley</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>

      <main className="h-full flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">Steven Calverley</h1>
        <p className='text-gray-700 text-2xl'>Coming Soon</p>
      </main>
    </div>
  )
}
