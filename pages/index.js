import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../sections/Layout'
import Post from '../components/Post'
import { sortByDate } from '../utils'


export default function Home({ posts })
{
  return (
    <>
      <Layout pageMeta={{
        title: 'Raspel',
        description: 'Homepage'
      }}>
        <section className='container mx-auto md:px-5 py-10' >
          <div>
            <h1 className='text-center font-bold justify-between text-4xl'>
              Welcome
            </h1>
            <p className='text-2xl text-center items-center justify-between mt-6'>
              Immerse yourself in deep knowledge ranging from coding skills to new IT topics
            </p>
            <p className='text-2xl text-center items-center justify-center'>
              and find out more on the emerging technolgies present and be able to embrace it, here at Raspel.
            </p>
          </div>
          <div className='grid grid-cols-2 p-28 gap-16 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 -mt-24'>
            {posts.map((post, index) =>
            {
              return <Post key={index} post={post} />
            })}
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps()
{

  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) =>
  {
    const slug = filename.replace('.mdx', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
