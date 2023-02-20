import Link from 'next/link'

export default function Post({ post })
{
    return (
        <div className='mt-12 shadow-md rounded-lg py-3.5 text-#7f7f7f hover:text-gray-600 overflow-hidden'>
            <Link href={`/blog/${post.slug}`}>
                <img src={post.frontmatter.coverImage} alt='' className='h-48 object-cover' />
                <div className='font-bold text-xl'>{post.frontmatter.title}</div>
                <div className='mb-2 p-0 text-sm'>{post.frontmatter.date}</div>
                <p className='mb-2 text-xm'>{post.frontmatter.excerpt}</p>
            </Link>
        </div>
    )
}
