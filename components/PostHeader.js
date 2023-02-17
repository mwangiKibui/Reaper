import DateFormatter from "./DateFormatter"
import CoverImage from "./CoverImage"
import PostTitle from "./PostTitle"

export default function PostHeader({ title, coverImage, date, author })
{
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="mb-8 md:mb-16 sm:mx-0">
                <CoverImage title={title} src={coverImage} height={300} width={240} />
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="mb-6 text-base">
                    <DateFormatter dateString={date} />
                </div>
            </div>
        </>
    )
}
