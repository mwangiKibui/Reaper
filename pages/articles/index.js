import Layout from "../../sections/Layout";
import Link from "next/link"

const Articles = () =>
{
    <Layout pageMeta={{
        title: 'Articles Page'
    }}>
        <div className="container mx-auto py-16 h-full flex flex-col justify-center items-center space-y-12">
            <div className="text-center space-x-6">
                <h1 className="text-3xl">Articles</h1>
                <p className="text-xl">You are currently on the Articles Page</p>
            </div>
            <Link href="/">
                <a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg
                    sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap">Return Home</a>
            </Link>
        </div>
    </Layout>
}

export default Articles;
