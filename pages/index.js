import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../sections/Layout'
import Link from 'next/link'
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
        <section className='container mx-auto md:px-20 py-10 '>
          <div className='grid grid-cols-2 p-10 gap-5 md:grid-cols-2 sm:grid-cols-1'>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps()
{
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) =>
  {
    // Create slug
    const slug = filename.replace('.mdx', '')

    // Get frontmatter
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
