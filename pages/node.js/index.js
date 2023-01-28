import Layout from "../../sections/Layout";
import Link from "next/link"
// import { getSortedPostsData } from '../../lib/posts';

export default function Node()
{

    return (
        <>
            <Layout pageMeta={{
                title: 'Node.js Articles',
                description: 'Node.js Articles'
            }}>

                <div className="pt-20">
                    <h1 className="text-center text-2xl font-bold">Node.js Articles</h1>
                </div>



            </Layout >
        </>
    )
}
