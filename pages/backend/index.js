import Layout from "../../sections/Layout";
import Link from "next/link"

export default function Node()
{

    return (
        <>
            <Layout pageMeta={{
                title: 'BackEnd',
                description: 'BackEnd Articles'
            }}>
                <section className='container mx-auto md:px-20 py-10'>
                    <div className="container mx-auto py-16 h-full flex flex-col space-y-12">
                        <div className="text-center">
                            <h1 className="text-4xl leading-10 font-bold tracking-tight">Welcome to the BackEnd Section</h1>
                            <p className="text-xl leading-7 mt-5">This section outlines various articles that will guide you in implementing various front-end resources that you will be implementing along your path.</p>
                        </div>
                        <div className="container mx-auto py-16 h-full flex flex-col justify-center items-center space-y-12">

                        </div>
                    </div>
                </section>
            </Layout >
        </>
    )
}
