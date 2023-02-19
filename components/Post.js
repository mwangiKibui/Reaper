import Link from 'next/link'

export default function Post({ post })
{
    return (
        <div className='px-3.5 shadow-md rounded-lg py-3.5 text-#7f7f7f hover:text-gray-600 gap-8'>
            <Link href={`/blog/${post.slug}`}>
                <img src={post.frontmatter.coverImage} alt='' className='object-contain h-48 w-96' />
                <div className='font-bold text-xl'>{post.frontmatter.title}</div>
                <div className='mb-2 p-0 text-sm'>{post.frontmatter.date}</div>
                <p>{post.frontmatter.excerpt}</p>
            </Link>
        </div>
    )
}
