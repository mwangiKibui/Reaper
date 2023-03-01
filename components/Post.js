import Link from 'next/link'
import PostPage from '../pages/blogs/[slug]'

export default function Post({ post })
{
    return (
        <div className='flex flex-col mt-12 shadow-md rounded-md py-12  text-#7f7f7f hover:text-gray-600 overflow-hidden'>
            <Link href={`/blog/${post.slug}`}>
                <img src={post.frontmatter.coverImage} alt='' className='h-64 w-full object-cover rounded-md' />
                <div className='px-6 py-4 flex flex-col justify-between'>
                    <div className='h-10 flex-1'>
                        <div className='mt-2 px-0 font-bold text-2xl leading-7'>{post.frontmatter.title}</div>
                        <div className='mb-2 p-0 text-sm'>{post.frontmatter.date}</div>
                        <p className='mb-3 text-base leading-6'>{post.frontmatter.excerpt}</p>
                        <p className='mb-3 text-base leading-6'>{post.frontmatter.content}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
