import Link from 'next/link'

export default function Post({ post })
{
    return (
        <div className='px-3.5 shadow-md rounded-lg'>
            <Link href={`/blog/${post.slug}`}>
                <img src={post.frontmatter.coverImage} alt='' layout='fill' object-fill='' />
                <h3>{post.frontmatter.title}</h3>
                {/* <div className='post-date'>Posted on {post.frontmatter.date}</div> */}
                <p>{post.frontmatter.excerpt}</p>
            </Link>
        </div>
    )
}
