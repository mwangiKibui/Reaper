import Stack from "../../components/Stack"

export default function TechStack()
{
    return (
        <section className='container mx-auto md:px-20 py-16'>
            <h3 className="absolute top-24 tracking-[3px] text-xl">
                This is the list of the TechStack that I have in experience
            </h3>
            <div className="grid grid-cols-4 gap-5">
                <Stack />
                <Stack />
                <Stack />
                <Stack />
                <Stack />
                <Stack />
                <Stack />
                <Stack />
                <Stack />
                <Stack />
            </div>
        </section>
    )
}
