import Link from "next/link";
import Layout from "../sections/Layout";

export default function NotFound()
{
    return (
        <>
            <Layout pageMeta={{
                title: '404 - Page Missing',
                description: 'You stumbled upon a missing page'
            }}>
                <div className="container mx-auto py-16 h-full flex flex-col justify-center items-center space-y-12">
                    <div className="text-center space-x-6">
                        <h1 className="text-3xl pt-5">Page Not Found</h1>
                        <p className="text-xl pt-5">You have stumbled upon a missing page</p>
                    </div>
                </div>
            </Layout>
        </>
    )

}
