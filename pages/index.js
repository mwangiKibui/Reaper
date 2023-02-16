import Layout from '../sections/Layout'
import Link from 'next/link'
import { getAllPosts } from '../lib/blog'
import PostList from '../components/PostList'
import Images from 'next/legacy/Image'


export default function Home({ allPosts })
{
  return (
    <>
      <Layout pageMeta={{
        title: 'Raspel',
        description: 'Homepage'
      }}>

        <section className='text-xl pt-4'>
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
