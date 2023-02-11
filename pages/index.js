import Layout from '../sections/Layout'
import Link from 'next/link'
import Blog, { getAllPosts, posts } from "../lib/blog";
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
          <ul>
            <Blog posts={posts} />
          </ul>
        </section>
      </Layout>
    </>
  )
}

