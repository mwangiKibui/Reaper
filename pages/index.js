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
              Raspel is a broad website.
            </h2>
          </div>

          <div className='absolute left-0 top-55 h-16 w-70'>
                <Typewriter
                    onInit={(typewriter) =>
                    {
                        typewriter.typeString('Raspel has been created.')
                            .pauseFor(100)
                            .deleteChars(8)
                            .typeString(' built using Next.js')
                            .pauseFor(100)
                            .deleteAll()
                            .typeString('This is a live project.')
                            .pauseFor(100)
                            .deleteAll()
                            .start();
                    }}
                    options={{
                        loop: true
                    }}
                />
            </div>

        </section>
      </Layout>
    </>
  )
}
