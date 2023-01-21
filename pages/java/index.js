import Layout from "../../sections/Layout";
import Link from "next/link"

export default function Java()
{
    return (
        <>
            <Layout pageMeta={{
                title: 'Java Articles',
                description: 'Java Articles'
            }}>
                <div className="container mx-auto py-16 h-full flex flex-col justify-center items-center space-y-12">
                    <div className="text-center space-x-6">
                        <h1 className="text-3xl">Java Articles</h1>
                        <p className="text-xl">You are currently on the Java Articles Page</p>
                    </div>
                    <div className="container mx-auto py-16 h-full flex flex-col justify-center items-center space-y-12">
                        <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg
                                sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap">
                            Return Home
                        </Link>
                    </div>
                </div>
            </Layout>
        </>
    )
}
