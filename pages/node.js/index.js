import Layout from "../../sections/Layout";
import Link from "next/link"

export default function Node()
{

    return (
        <>
            <Layout pageMeta={{
                title: 'Node.js',
                description: 'Node.js Articles'
            }}>

                <div className="pt-20">
                    <h1 className="text-center text-2xl font-bold">Node.js Articles</h1>
                </div>
                <div className="flex max-w-5xl mx-auto gap-8 group">
                    <div className="group-hover:blur-sm rounded-xl">
                        <img src="../public/Sample Photos/sample1" />
                        <p>kfakm</p>
                    </div>
                </div>

            </Layout >
        </>
    )
}
