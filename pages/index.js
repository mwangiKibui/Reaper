import Layout from '../sections/Layout'
import Link from 'next/link'
import { getAllPosts } from '../lib/blog'
import PostList from '../components/PostList'


export default function Home({ allPosts })
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
            {allPosts.length > 0 && <PostList posts={allPosts} />}
          </ul>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps()
{
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ])

  return {
    props: { allPosts },
  }
}
