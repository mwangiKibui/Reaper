import Layout from '../../sections/Layout'
import { getPostFromSlug, getSlugs, PostMeta } from '../../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { serialize } from 'v8'


const Postp = {
    meta: PostMeta
}


export default function Post({ post, post: Postp })
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
            <Postp {...post.source} />
        </Layout>
    )
}

export async function getStaticProps({ params })
{
    const { slug } = params({ slug: String })
    const { content, meta } = getPostFromSlug(slug)

    const postsSource = serialize(content)

    return {
        props: {
            post: {
                postsSource,
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
