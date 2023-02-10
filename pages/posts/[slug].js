import Layout from '../../sections/Layout'
import { getPostFromSlug, getSlugs,  meta } from '../../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'


export default function Post({ post })
{
    return (
        <Layout>
            <Head>
                <title>{post.meta.title}</title>
            </Head>
            <h1 className='text-xl pt-4'>{post.meta.title}</h1>
            {/* <div>
                    {post.meta.image}
                </div> */}
        </Layout>
    )
}

export async function getStaticProps({ params })
{
    const { slug } = params({ slug: String })
    const { content, meta } = getPostFromSlug(slug)

    return {
        props: {
            post: {
                content,
                meta
            }
        }
    }
}

export async function getStaticPaths()
{
    const paths = getSlugs().map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}
