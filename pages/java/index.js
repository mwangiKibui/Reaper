import Layout from "../../sections/Layout";
import Link from "next/link"

export default function Java()
{
    return (
        <>
            <Layout pageMeta={{
                title: 'Java',
                description: 'Java Articles'
            }}>
                <div className="container mx-auto py-16 h-full flex flex-col justify-center items-center space-y-12">
                    <div className="text-center space-x-6">
                        <h1 className="text-3xl">Java Articles</h1>
                        <p className="text-xl">You are currently on the Java Articles Page</p>
                    </div>
                    <div className="container mx-auto py-16 h-full flex flex-col justify-center items-center space-y-12">
                        List of Articles
                    </div>
                </div>
            </Layout>
        </>
    )
}
