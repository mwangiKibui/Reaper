import Layout from '../sections/Layout'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { getSortedPostsData } from "../lib/posts";
import Image from 'next/image';



export async function getStaticProps()
{
  // try
  // {
  //   const res = await fetch("https://github.com/Robert-Wachira/Articles")
  //   const { articles } = await res.json()
  //   return {
  //     props: { articles },
  //   }
  // } catch (error)
  // {
  //   console.log(error)
  //   return {
  //     props: { articles: [] },
  //   }
  // }


  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData })
{
  return (
    <>
      <Layout pageMeta={{
        title: 'Raspel',
        description: 'Homepage'
      }}>

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
            {allPostsData.map(({ allPostsData }) => (
              <li className='margin-1' key={allPostsData.id}>
                <Link href={`/posts/${id}`}>
                  {allPostsData.title}
                  <br />
                  <Image
                    src={allPostsData.thumbnailUrl}
                    width='350'
                    height='350'
                  />
                  <small className='text-color-#999'>
                    <Date dateString={date} />
                  </small>
                </Link>

              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  )
}


