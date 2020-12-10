import Head from 'next/head'
import Layout from '../../layout/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Steven Calverley</title>
      </Head>

      <main className="h-full flex flex-col items-center justify-center">
        <p className='text-gray-700 text-2xl'>About Coming Soon</p>
      </main>
    </Layout>
  )
}
