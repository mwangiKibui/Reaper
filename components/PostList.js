import PostPreview from "./PostPreview"

export default function PostList({ posts })
{
    return (
        <section>
            <div className="grid grid-cols-1 md:gap-y-5 md:gap-x-5 mb-10 md:grid-cols-2 lg:gap-x-10 gap-y-10 rounded-sm">
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
