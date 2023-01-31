import Layout from '../sections/Layout'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { getSortedPostsData } from "../lib/posts";
import Image from 'next/image'

export default function Home({ allPostsData })
{
  return (
    <>
      <Layout pageMeta={{
        title: 'Raspel',
        description: 'Homepage'
      }}>
        {/* <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
          {/* <div className="space-y-4 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-7xl font-bold capitalize">
              <span className="block">Welcome to Raspel</span>
            </h1>
            <h2 className="text-xl sm:text-2xl">
              Raspel is a broad website.
            </h2>
          </div> */}

        {/* <div className='absolute left-0 top-55 h-16 w-70'>
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

      </section> */}

        <section className='text-xl pt-4'>
          <h2 className='text-2xl m-0'>Blog</h2>
          <ul className='m-1'>
            {allPostsData.map(({ id, date, title }) => (
              <li className='margin-1' key={id}>
                <Link href={`/posts/${id}`}>
                  {title}
                </Link>
                <br />
                <Image
                  src="https://images.unsplash.com/photo-1675119713402-e4e295197e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  width='350'
                  height='350'
                />
                <small className='text-color-#999'>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps()
{
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
