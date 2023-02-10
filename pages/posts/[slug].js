import Layout from '../../sections/Layout'
import md from 'markdown-it'
import Head from 'next/head'


export default function Post({ frontmatter, content })
{

    const { title, author, category, date, bannerImage, tags } = frontmatter

    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <h1 className='text-xl pt-4'>{title}</h1>
            <h2>{author} || {date}</h2>
            <h3>{category} || {tags.join()}</h3>
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </Layout>
    )
}

export async function getStaticPaths()
{
    const files = fs.readdirSync("posts");
    // Generate a path for each one
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace(".md", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } })
{
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);

    return {
        props: {
            post: {
                frontmatter,
                content
            }
        }
    }
}


