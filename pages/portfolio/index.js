import Layout from "../../sections/Layout";
import Link from "next/link"
import Intro from './Intro'

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
                            <p className="text-3xl leading-7 mt-5">
                                Hello. I am Robert Wachira
                            </p>
                            <Intro />

                        </div>
                        <div className="container mx-auto py-16 h-full flex flex-col justify-center items-center space-y-12">

                        </div>
                    </div>
                </section>
            </Layout >
        </>
    )
}
