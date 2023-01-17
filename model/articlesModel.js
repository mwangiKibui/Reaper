import { Schema, model, models } from 'mongoose'

const articlesSchema = new Schema({
    title: String,
    description: {
        type: String,
        required: true,
        unique: true,
    }
})

const Article = models.Article || model('Article', articlesSchema)

export default Article;
