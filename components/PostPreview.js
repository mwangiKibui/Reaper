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
        < Link as={`/posts/${slug}`} href="/posts/[slug]" >
            {/* < div className="flex max-w-5xl mx-auto gap-8" > */}
            <div className="p-4 max-w-5xl grid gap-4 xs:grid-cols-2">
                <div className="mb-3">
                    <CoverImage
                        slug={slug}
                        title={title}
                        src={coverImage}
                        height={300}
                        width={240}
                    />
                </div>
                <h3 className="mb-3 text-xl leading-snug">
                    {title}
                </h3>
                <div className="mb-2 text-base">
                    <DateFormatter dateString={date} />
                </div>
                <p className="mb-2 text-sm leading-relaxed">{excerpt}</p>
            </div >
        </Link >
    )
}
