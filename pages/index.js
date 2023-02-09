import Layout from '../sections/Layout'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { getAllPosts, posts } from "../lib/posts";
import Image from 'next/image';


export default function Home({ posts })
{
  return (
    <>
      <Layout pageMeta={{
        title: 'Raspel',
        description: 'Homepage'
      }}>

        <section className='text-xl pt-4'>
          <h2 className='text-2xl m-0'>Blog</h2>
          <Articles posts={posts} />
        </section>
      </Layout>
    </>
  )
}


export async function getStaticProps()
{
  const posts = getAllPosts()
    .map((post) => post.meta)
  return {
    props: {
      posts,
    },
  };
}
