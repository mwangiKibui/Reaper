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
      posts,
    },
  };
}
