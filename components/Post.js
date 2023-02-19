import Link from 'next/link'

export default function Post({ post })
{
    return (
        <div className='shadow-md rounded-lg py-3.5 text-#7f7f7f hover:text-gray-600'>
            <Link href={`/blog/${post.slug}`}>
                <img src={post.frontmatter.coverImage} alt='' className='object-contain h-48 w-96' />
                <div className='font-bold text-xl'>{post.frontmatter.title}</div>
                <div className='mb-2 p-0 text-sm'>{post.frontmatter.date}</div>
                <p className='mb-2 text-xm'>{post.frontmatter.excerpt}</p>
            </Link>
        </div>
    )
}
