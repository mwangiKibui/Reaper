import Layout from '../sections/Layout'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import Blog, { getAllPosts, posts } from "../lib/blog";
import Image from 'next/image';
// import Articles from '../components/Articles'


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
          <ul>
            <Blog posts={posts} />
          </ul>
        </section>
      </Layout>
    </>
  )
}

