import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'
import Layout from '../../sections/Layout'

export default function Posts({ posts })
{
    return (
        <Layout>
            <div className="posts">
                <h1>Posts</h1>

                {posts.map(post =>
                {
                    const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
                        month: 'short',
                        day: '2-digit',
                        year: 'numeric',
                    })

                    return (
                        <article key={post.slug}>
                            <h2>
                                <Link href={post.permalink}>
                                    {post.title}
                                </Link>
                            </h2>

                            <time dateTime={post.createdAt}>{prettyDate}</time>

                            <p>{post.excerpt}</p>

                            <Link href={post.permalink}>
                                Read more →
                            </Link>
                        </article>
                    )
                })}
            </div>
        </Layout>
    )
}


export function getStaticProps()
{
    return {
        props: {
            posts: getAllPosts(),
        }
    }
}
