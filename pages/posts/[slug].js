import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import { getPostBySlug, getAllPosts } from "../../lib/blog"
import markdownToHtml from "../../lib/markdownToHtml"
import ErrorPage from "../404"

export default function Post({ post, preview })
{
    const router = useRouter()
    if (!router.isFallback && !post?.slug)
    {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout preview={preview}>
            {router.isFallback ? (
                <PostTitle>Loading…</PostTitle>
            ) : (
                <>
                    <article className="mb-32">
                        <Head>
                            <title>{post.title} | Delba de Oliveira</title>
                            <meta property="og:image" content={post.ogImage.url} />
                        </Head>
                        <PostHeader
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                            author={post.author}
                        />
                        <PostBody content={post.content} />
                    </article>
                </>
            )}
        </Layout>
    )
}

export async function getStaticProps({ params })
{
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "author",
        "content",
        "ogImage",
        "coverImage",
    ])
    const content = await markdownToHtml(post.content || "")

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths()
{
    const posts = getAllPosts(["slug"])

    return {
        paths: posts.map((post) =>
        {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}
