import fs from "fs"
import path from "path";
import matter from "gray-matter"
import Link from 'next/link'
import readingTime from 'reading-time'
import posts from '../posts'


export default function Blog({ posts })
{
    return <main>
        {posts.map(post =>
        {
            //extract slug and frontmatter
            const { slug, frontmatter } = post
            //extract frontmatter properties
            const { title, author, category, date, bannerImage, tags, readingTime } = frontmatter

            //JSX for individual blog listing
            return <article key={title}>
                <Link href={`/posts/${slug}`}>
                    <h1>{title}</h1>
                </Link>
                <h3>{author}</h3>
                <h3>{date}</h3>
                <h4>{readingTime}</h4>
            </article>
        })}
    </main>
}


//Generating the Static Props for the Blog Page
export async function getStaticProps()
{
    // get list of files from the posts folder
    const files = fs.readdirSync('posts');

    // get frontmatter & slug from each post
    const posts = files.map((fileName) =>
    {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);

        return {
            slug,
            frontmatter,
        };
    });

    // Return the pages static props
    return {
        props: {
            posts,
        },
    };
}












// const postsDirectory = path.join(process.cwd(), "posts");

// export const getSlugs = () =>
// {
//     const paths = sync(`${postsDirectory}/*.md`)
//     return paths.map((path) =>
//     {
//         const parts = path.split("/");
//         const fileName = parts[parts.length - 1];
//         const [slug, _ext] = fileName.split(".");
//         return slug;
//     });
// }


// export const getAllPosts = () =>
// {
//     const posts = getSlugs()
//         .map((slug) => getPostFromSlug(slug))
//         .sort((a, b) =>
//         {
//             if (a.meta.date > b.meta.date)
//                 return 1;
//             if (a.meta.date < b.meta.date)
//                 return -1;
//             return 0;
//         })
//         .reverse();
//     return posts;
// }

// export const PostMeta = {
//     excerpt: String,
//     slug: String,
//     title: String,
//     // tags: String,
//     date: String,
// }

// const Post = {
//     content: String,
//     meta: PostMeta
// }



// export const getPostFromSlug = (slug) =>
// {
//     var _a, _b, _c, _d;
//     const postPath = path.join(postsDirectory, `${slug}.md`);
//     const source = fs.readFileSync(postPath);
//     const { content, data } = matter(source);
//     return {
//         content,
//         meta: {
//             slug,
//             excerpt: (_a = data.excerpt) !== null && _a !== void 0 ? _a : "",
//             title: (_b = data.title) !== null && _b !== void 0 ? _b : slug,
//             // tags: ((_c = data.tags) !== null && _c !== void 0 ? _c : []).sort(),
//             date: ((_d = data.date) !== null && _d !== void 0 ? _d : new Date()).toString(),
//         },
//     };
// }

