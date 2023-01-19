import Layout from '../../sections/Layout'
import Link from 'next/link'

export default function Contact()
{
    return (
        <>
            <Layout pageMeta={{
                title: 'Contact',
                description: 'Contact'
            }}>
                <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
                    <div className="space-y-4 max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-7xl font-bold capitalize">
                            <span className="block">Welcome to </span>
                            <span className="block">Raspel</span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl">
                            Contact us at:
                            <div>
                                {/* <input className='email'>email</input> */}
                                {/* <textarea className='email' className="bg-white text-color-red">

                                </textarea> */}
                            </div>
                        </h2>
                        <div className="container mx-auto py-16 h-full flex flex-col justify-center items-center space-y-12">
                            <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg
                                sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap">
                                Return Home
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
