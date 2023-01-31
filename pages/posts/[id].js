import Layout from '../../sections/Layout'
import Date from '../../sections/Date'
import { getAllPostIds, getPostData } from '../../lib/posts'


export default function Post({ postData })
{
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className='text-xl pt-4'></h1>
                <div>
                    {postData.image}
                </div>
                <div className='text-color-#999'>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths()
{
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params })
{
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
