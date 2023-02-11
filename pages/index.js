import Layout from '../sections/Layout'
import Link from 'next/link'
import Blog from "../lib/blog";


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

