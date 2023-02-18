import DateFormatter from "./DateFormatter"
import CoverImage from "./CoverImage"
import Link from "next/link"

export default function PostPreview({
    title,
    coverImage,
    date,
    excerpt,
    slug,
})
{
    return (
        //  <div className="flex max-w-5xl mx-auto gap-8 group">
        <div className="p-4 max-w-5xl grid gap-4 xs:grid-cols-2">
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <div className="mb-5">
                    <CoverImage
                    slug={slug}
                    title={title}
                    src={coverImage}
                    height={300}
                    width={240}
                    />
                </div>
                <h3 className="mb-3 text-2xl leading-snug">
                    {title}
                </h3>
                <div className="mb-4 text-base">
                    <DateFormatter dateString={date} />
                </div>
                <p className="mb-4 text-sm leading-relaxed">{excerpt}</p>
                </Link>
            </div>
    )
}
