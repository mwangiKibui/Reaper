import Head from 'next/head'
import Layout from '../sections/Layout'
import Link from 'next/link'

export default function Home()
{
  return (
    <>
      <Head>
        <title>Raspel</title>
        <meta name="description" content="Built by Raspel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="raspel2.ico" />
      </Head>

      <Layout>
        <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
          <div className="space-y-4 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-7xl font-bold capitalize">
              <span className="block">Welcome to </span>
              <span className="block">Raspel</span>
            </h1>
            <h2 className="text-xl sm:text-2xl">
              Raspel has been created by Robert Wachira
            </h2>
          </div>
          <button type="button" onClick={null} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg
          sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap"><Link href='/articles'>Articles</Link></button>
          <button type="button" onClick={null} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg
          sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap"><Link href='/portfolio'>Portfolio</Link></button>
          <button type="button" onClick={null} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg
          sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap"><Link href='/contact'>Contact</Link></button>
        </section>
      </Layout>
    </>
  )
}
