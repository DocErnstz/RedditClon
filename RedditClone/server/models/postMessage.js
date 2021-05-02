import mongoose from "mongoose";
const Schema = mongoose.Schema;
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    subreddit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subreddit',
      },
    comments: [
        {
            creator: {
                type: Schema.Types.ObjectId,
            },
            postId: {
                type: Schema.Types.ObjectId,
            },

            content: {
                type: String
            },
            responseTo:  { type: Schema.Types.ObjectId },
        }
    ]
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;