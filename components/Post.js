import Link from 'next/link'

export default function Post({ post })
{
    return (
        <div className='px-2 shadow-md rounded-lg bg-gray-500 gap-8'>
            <Link href={`/blog/${post.slug}`}>
                <img src={post.frontmatter.coverImage} alt='' className='object-contain h-48 w-96' />
                <h3>{post.frontmatter.title}</h3>
                <div className='mb-2 p-0 text-sm'>{post.frontmatter.date}</div>
                <p>{post.frontmatter.excerpt}</p>
            </Link>
        </div>
    )
}
