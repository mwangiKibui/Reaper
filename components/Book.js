import { BookOpen, BookClosed } from "react-icons/hi"

export default function Book()
{
    return (
        <>
            <BookOpen
                className="w-var(--size) h-var(--size) position:absolute display:block"
            />
            <BookClosed
                className="w-7 h-7"
            />
        </>
    )
}
