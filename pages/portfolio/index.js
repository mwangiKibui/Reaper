import Layout from "../../sections/Layout"
import Link from "next/link"
import Intro from './Intro'
import Contact from "./Contact"
import About from './About'
import TechStack from "./TechStack"

export default function Portfolio()
{

    return (
        <>
            <Layout pageMeta={{
                title: 'Portfolio',
                description: 'This is a portfolio for Robert Wachira'
            }}>
                <section className='container mx-auto md:px-20 py-10'>
                    <div className="container mx-auto py-16 h-full flex flex-col space-y-12">
                        <div className="text-center">
                            <Intro />
                        </div>
                        <div>
                            <About />
                        </div>
                        <div>
                            <TechStack />
                        </div>
                        <div>
                            <Contact />
                        </div>
                    </div>
                </section>
            </Layout >
        </>
    )
}
