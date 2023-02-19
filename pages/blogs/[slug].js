import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from "../../sections/Layout"
import ErrorPage from "../404"

export default function PostPage({
    frontmatter: { title, date, cover_image },
    slug,
    content, })
{
    // const router = useRouter()

    // if (!router.isFallback && !post?.slug)
    // {
    //     return <ErrorPage />
    // }
    return (
        <Layout>
            <div className='px-3.5 shadow-md rounded-lg py-3.5'>
                <h1 className='p-2.5'>{title}</h1>
                <div className='bg-grey-200 mb-6 pl-1 pr-2'>{date}</div>
                <img src={cover_image} alt='' />
                <div className='text-5xl font-bold ml-2.5 mr-0'>
                    <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                </div>
                <div>{slug}</div>
            </div>
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
