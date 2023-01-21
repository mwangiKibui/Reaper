import Layout from "../../sections/Layout";
import Link from "next/link"
import { getSortedPostsData } from '../../lib/posts';

export default function Node({ posts })
{
    return (
        <>
            <Layout pageMeta={{
                title: 'Node.js Articles',
                description: 'Node.js Articles'
            }}>
                <div className="container mx-auto py-16 h-full flex flex-col justify-center items-center space-y-12">
                    <div className="text-center space-x-6">
                        <h1 className="text-3xl">Node.js Articles</h1>
                        <p className="text-xl">You are currently on the Node.js Articles Page</p>
                    </div>

                </div>

                {/* {posts.map(post =>
                {
                    const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
                        month: 'short',
                        day: '2-digit',
                        year: 'numeric',
                    })

                    return (
                        <article key={post.slug} >
                            <h2>
                                <Link href={post.permalink} >
                                    <a>{post.title}</a>
                                </Link>
                            </h2 >

                            <time dateTime={post.createdAt}> {prettyDate}</time >

                            <p>{post.excerpt}</p >
                            <Link href={post.permalink}>
                                <a>Read more →</a >
                            </Link >
                        </article >
                    )
                })} */}

            </Layout >
        </>
    )
}

export async function getStaticProps()
{
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
