import Layout from '../../sections/Layout'
import Link from 'next/link'
import Intro from './Intro'
import About from './About'
import Contact from './Contact'

export default function Portfolio()
{
    return (
        <>
            <Layout pageMeta={{
                title: 'Portfolio',
                description: 'This is a Portfolio for Robert Wachira'
            }}>
                <section className='container mx-auto md:px-20 py-10'>
                    <div className="flex flex-col  sm:mt-24 ">
                        <div className="space-y-4 max-w-4xl mx-auto">
                            <Intro />

                            {/* <div className="container mx-auto py-16 h-full flex flex-col items-center space-y-12">
                            <Link href='../../public/Robert Wachira CV.pdf' download className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg
                                sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                                Download CV
                            </Link>
                        </div> */}
                        </div>
                        {/* <About /> */}
                    </div>
                </section>
            </Layout>
        </>
    )
}
