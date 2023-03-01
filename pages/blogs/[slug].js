import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Layout from "../../sections/Layout"

export default function PostPage({
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
            </section>
        </Layout>
    )
}

export async function getStaticPaths()
{
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.mdx', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } })
{
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.mdx'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}
