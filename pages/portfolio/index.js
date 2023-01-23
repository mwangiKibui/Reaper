import Layout from '../../sections/Layout'
import Link from 'next/link'
import Intro from './Intro'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

export default function Portfolio()
{
    return (
        <>
            <Layout pageMeta={{
                title: 'Portfolio',
                description: 'This is a Portfolio for Robert Wachira'
            }}>
                <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
                    <div className="space-y-4 max-w-4xl mx-auto text-center">
                        <Intro />

                        <div className="container mx-auto py-16 h-full flex flex-col justify-center items-center space-y-12">
                            <Link href='../../public/Robert Wachira CV.pdf' download className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg
                                sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                                Download CV
                            </Link>
                        </div>
                        <div>
                            <Projects />
                        </div>

                        <div className="container mx-auto py-16 top-80 h-14 w-17 space-y-12">
                            <Contact />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
