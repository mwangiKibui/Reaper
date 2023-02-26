export default function Contact()
{
    return (
        <>
            <section className="bottom-0 body-font relative">
                <div className="container px-5 py-16 mx-auto md:px-20">
                    <div className="flex flex-col text-center w-full mb-1">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">Contact Us</h1>
                    </div>
                    <form className="mx-auto"
                    // onSubmit={handleSubmit(onsubmit)}
                    >
                        <div className="flex flex-wrap -m-2 pl-52">
                            <div className="p-2 w-2/5">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-2/5">
                                <div className="relative">
                                    <label for="email" className="leading-7 text-sm">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-4/5">
                                <div className="relative">
                                    <label for="message" className="leading-7 text-sm ">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-1/2 pl-72">
                                <button className="flex mx-auto text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
