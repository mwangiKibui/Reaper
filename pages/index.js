import Layout from '../sections/Layout'
import Link from 'next/link'

export default function Home()
{
  return (
    <>
      <Layout pageMeta={{
        title: 'Raspel',
        description: 'Homepage'
      }}>
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

        </section>
      </Layout>
    </>
  )
}
