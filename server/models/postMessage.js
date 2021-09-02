import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    selectedFile: String,
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date()
    },
    subreddit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subreddit',
      },
    subRedditName: String,
    comments: [
        {
            creator: {
                type: String,
            },
            postId: {
                type: Schema.Types.ObjectId,
            },

            likes: {type: [String], default: []},
            content: {
                type: String
            },
            responseTo:  { type: Schema.Types.ObjectId },
        }
    ]
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;