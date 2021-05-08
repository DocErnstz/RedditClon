import PostMessage from "../models/postMessage.js";
import Sub from "../models/sub.js";
import mongoose from 'mongoose';
import express from 'express';
//import Posts from "../../client/src/components/Posts/Posts.js";
//return posts
export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getSubs = async (req, res) => {
    try{
        const sub = await Sub.find();
        res.status(200).json(sub);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}



//save post in PostMessage

//returns updatePost and change post in PostMessage
export const updatePost = async (req, res) => {
    const { id } = req.params;
    
    const { title, message, creator, selectedFile, tags } = req.body;
    
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    console.log("this is working");

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    
    res.json(updatedPost);
}
//remove post from PostMessage
export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}


export const likePost = async (req, res) => {
    const { id } = req.params;
    console.log(req.userId);
    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const index = post.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
    res.status(200).json(updatedPost);
}

export const AddComment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    PostMessage.findOne({ _id: id })
    .then(post => {
      const newComment = {
        creator: req.body.creator,
        content: req.body.content,
        responseTo: req.body.responseTo,
        postId: req.body.postId
      }

      post.comments.unshift(newComment)

      post.save().then(comment => res.json(comment))
    })
    
}

export const ClearComment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    PostMessage.findOne({ _id: id })
    .then(post => {
      post.comments = []

      post.save().then(post => res.json(post))
    })
    
}


export const getComment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    PostMessage.findOne({ _id: id })
    .then(post => {

      post.save().then(post => res.json(post.comments))
    })
    
}
export const createSub = async (req, res) => {
    const sub = req.body;
    const newSub = new Sub(sub);
    try{
        await newSub.save();
        res.status(201).json(newSub);
    } catch(error){
        res.status(409).json({message: error.message});
    }
 }

 export const createPost = async (req, res) => {
    
    const post = req.body;
    const newPost = new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    } catch(error){
        res.status(409).json({message: error.message});
    }
    
}