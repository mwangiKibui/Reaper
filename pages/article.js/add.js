import connectMongo from "../../utils/connect";
import Article from "../../model/articlesModel";

export default async function addArticle(req, res)
{

    console.log('Connecting');
    await connectMongo();
    console.log('Connecting')

    const article = await Article.create(req.body)

    res.json({ article })
}
