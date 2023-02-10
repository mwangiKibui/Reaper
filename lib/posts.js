import fs from "fs"
import path from "path";
import matter from "gray-matter";
import { sync } from "glob"
import { getStaticProps } from "../pages/posts/[slug]";

const postsDirectory = path.join(process.cwd(), "posts");

export const getSlugs = () =>
{
    const paths = sync(`${postsDirectory}/*.md`)
    return paths.map((path) =>
    {
        const parts = path.split("/");
        const fileName = parts[parts.length - 1];
        const [slug, _ext] = fileName.split(".");
        return slug;
    });
}


export const getAllPosts = () =>
{
    const posts = getSlugs()
        .map((slug) => getPostFromSlug(slug))
        .sort((a, b) =>
        {
            if (a.meta.date > b.meta.date)
                return 1;
            if (a.meta.date < b.meta.date)
                return -1;
            return 0;
        })
        .reverse();
    return posts;
}

export const PostMeta = {
    excerpt: String,
    slug: String,
    title: String,
    // tags: String,
    date: String,
}

const Post = {
    content: String,
    meta: PostMeta
}



export const getPostFromSlug = (slug) =>
{
    var _a, _b, _c, _d;
    const postPath = path.join(postsDirectory, `${slug}.md`);
    const source = fs.readFileSync(postPath);
    const { content, data } = matter(source);
    return {
        content,
        meta: {
            slug,
            excerpt: (_a = data.excerpt) !== null && _a !== void 0 ? _a : "",
            title: (_b = data.title) !== null && _b !== void 0 ? _b : slug,
            // tags: ((_c = data.tags) !== null && _c !== void 0 ? _c : []).sort(),
            date: ((_d = data.date) !== null && _d !== void 0 ? _d : new Date()).toString(),
        },
    };
}






// const postsDirectory = path.join(process.cwd(), "posts");

// export function getSortedPostsData()
// {
//     // Get file names under /posts
//     const fileNames = fs.readdirSync(postsDirectory);
//     const allPostsData = fileNames.map((fileName) =>
//     {
//         // Remove ".md" from file name to get id
//         const id = fileName.replace(/\.md$/, "");

//         // Read markdown file as string
//         const fullPath = path.join(postsDirectory, fileName);
//         const fileContents = fs.readFileSync(fullPath, "utf8");

//         // Use gray-matter to parse the post metadata section
//         const matterResult = matter(fileContents);

//         // Combine the data with the id
//         return {
//             id,
//             ...matterResult.data,
//         };
//     });
//     // Sort posts by date
//     return allPostsData.sort((a, b) =>
//     {
//         if (a.date < b.date)
//         {
//             return 1;
//         } else
//         {
//             return -1;
//         }
//     });
// }

// export function getAllPostIds()
// {
//     const fileNames = fs.readdirSync(postsDirectory);


//     return fileNames.map((fileName) =>
//     {
//         return {
//             params: {
//                 id: fileName.replace(/\.md$/, ""),
//             },
//         };
//     });
// }

// export async function getPostData(id)
// {
//     const fullPath = path.join(postsDirectory, `${id}.md`);
//     const fileContents = fs.readFileSync(fullPath, "utf8");

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     // Use remark to convert markdown into HTML string
//     const processedContent = await remark()
//         .use(html)
//         .process(matterResult.content);
//     const contentHtml = processedContent.toString();

//     // Combine the data with the id and contentHtml
//     return {
//         id,
//         contentHtml,
//         ...matterResult.data,
//     };
// }
