import PostMessage from "../models/postMessage.js";
import mongoose from 'mongoose';
import express from 'express';
//return posts
export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}
//save post in PostMessage
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

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}