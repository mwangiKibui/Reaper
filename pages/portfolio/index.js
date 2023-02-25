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
                    <div className="flex flex-col sm:mt-24 container mx-auto h-full ">
                        <div className="max-w-4xl mx-auto">
                            <Intro />

                        </div>
                        {/* <About /> */}
                    </div>
                    {/* <div className='mt-30'>
                        <Contact />
                    </div> */}
                </section>
            </Layout>
        </>
    )
}
