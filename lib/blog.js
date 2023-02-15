import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
// import readingTime from 'reading-time'

const postsDirectory = join(process.cwd(), "data")

export function getPostSlugs()
{
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = [])
{
    const realSlug = slug.replace(/\.mdx$/, "")
    const fullPath = join(postsDirectory, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)
    // const wordCount = content.split(/\s+/gu).length
    // const readingTime = readingTime(content)

    const items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) =>
    {
        if (field === "slug")
        {
            items[field] = realSlug
        }
        if (field === "content")
        {
            items[field] = content
        }

        if (data[field])
        {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllPosts(fields = [])
{
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}
