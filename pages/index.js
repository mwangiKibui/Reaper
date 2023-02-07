import Layout from '../sections/Layout'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { getAllPosts, posts } from "../lib/posts";
import Image from 'next/image';


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
            {allPostsData.map(({ post, id, title, image, date }) => (
              <li className='margin-1' key={id}>
                <Link href={`/posts/${id}`}>
                  {title}
                  <br />
                  <Image
                    src={image}
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


export async function getStaticProps()
{
  const posts = getAllPosts();
  return {
    props: {
      allPostsData,
    },
  };
}
