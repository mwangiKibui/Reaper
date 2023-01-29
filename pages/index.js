import Layout from '../sections/Layout'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

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

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
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
