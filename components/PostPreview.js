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
        <div>
            <div className="mb-5">
                <CoverImage
                    slug={slug}
                    title={title}
                    src={coverImage}
                    height={250}
                    width={300}
                />
            </div>
            <h3 className="mb-3 text-3xl leading-snug">
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <href className="hover:underline">{title}</href>
                </Link>
            </h3>
            <div className="mb-4 text-base">
                <DateFormatter dateString={date} />
            </div>
            <p className="mb-4 text-base leading-relaxed">{excerpt}</p>
        </div>
    )
}
