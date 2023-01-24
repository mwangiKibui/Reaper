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

                <div class="pt-20">
                    <h1 class="text-center text-2xl font-bold text-gray-800">Node.js Articles</h1>
                </div>



            </Layout >
        </>
    )
}
