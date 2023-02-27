import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Layout from "../../sections/Layout"

export default function PostPage({ post,
    frontmatter: { title, date, coverImage },
    slug,
    content })
{
    return (
        <Layout>
            <section className='px-3.5 shadow-md rounded-lg py-3.5 text-gray-800 hover:text-gray-600'>
                <h1 className='font-bold text-xl '>{title}</h1>
                <div className='mb-6 pl-1 pr-2'>
                    {date}
                </div>
                <img src={coverImage} alt='' />
                <div className='text-5xl font-bold ml-2.5 mr-0'>
                    <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                </div>
                <div>{slug}</div>
            </section>
        </Layout>
    )
}

export async function getStaticPaths()
{
    const postsDirectory = path.join(process.cwd(), 'posts')
    const filenames = fs.readdirSync(postsDirectory)

    const slugs = filenames.map((filename) =>
    {
        const filePath = path.join(postsDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf-8')
        const { data } = matter(fileContents)

        return data.slug
    })

    const paths = slugs.map((slug) => ({ params: { slug } }))

    // const paths = posts.map((post) => ({ params: { slug: post.slug } }))

    // const paths = files.map((fileName) => ({
    //     slug: fileName.replace('.mdx', ''),
    // }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params })
{

    const postsDirectory = path.join(process.cwd(), 'posts')
    const filePath = path.join(postsDirectory, `${params.slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return { props: { post: { ...data, content } } }


    // const { slug } = params

    // const markdownWithMeta = fs.readFileSync(
    //     path.join('posts', `${slug}` + '.mdx'),
    //     'utf-8')

    // const { data: frontmatter, content } = matter(markdownWithMeta)

    // return {
    //     props: {
    //         frontmatter,
    //         slug,
    //         data,
    //         content,
    //     },
    // }
}


