import Layout from "../../sections/Layout";
import Link from "next/link"
// import { getSortedPostsData } from '../../lib/posts';
import Posts from "../posts/[id]"

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

                <div>
                    <Posts />
                </div>



            </Layout >
        </>
    )
}
