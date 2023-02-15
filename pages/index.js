import Layout from '../sections/Layout'
import Link from 'next/link'


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
    "author",
    "coverImage",
    "excerpt",
  ])

  return {
    props: { allPosts },
  }
}
