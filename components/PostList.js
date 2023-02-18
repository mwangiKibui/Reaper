import PostPreview from "./PostPreview"

export default function PostList({ posts })
{
    return (
        <section>
            {/* <div className="display: flex flex-wrap: wrap gap-x-8 gap-y-8"> */}
                <div className="grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
                {posts.map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        slug={post.slug}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>
        </section>
    )
}
