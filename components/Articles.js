import Link from "next/link";


export default function Articles({ posts })
{
    return (
        <ul className="m-0 p-0" >
            {posts.map((post) => (
                <li key={post.slug}>
                    <div className="text-lg">
                        <Link href={`/posts/${post.slug}`}>
                            {post.title}
                        </Link>
                    </div>
                    <p>
                        {post.excerpt}
                    </p>
                    <p className="text-sm">
                        {posts.tags.map((tag) => (
                            <Link key={tag} href={`/tags/${tag}`}>
                                {tag}
                            </Link>
                        ))}
                    </p>
                </li>
            ))}
        </ul>
    )
}
