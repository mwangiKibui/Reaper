import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


export function getAllPosts()
{
    const postsDirectory = path.join(process.cwd(), 'posts')
    const filenames = fs.readdirSync(postsDirectory)

    return filenames.map(filename =>
    {
        const file = fs.readFileSync(path.join(process.cwd(), 'posts', filename), 'utf8')
        const { data } = matter(file)

        // get slug from filename
        const slug = filename.replace(/\.md$/, '')

        // return combined frontmatter and slug; build permalink
        return {
            ...data,
            slug,
            permalink: `/posts/${slug}`,
        }
    })
}
