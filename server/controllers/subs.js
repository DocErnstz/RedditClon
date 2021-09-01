import Sub from "../models/sub.js";
import mongoose from 'mongoose';
import express from 'express';

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

 export const getSubs = async (req, res) => {
    try{
        const sub = await Sub.find();
        res.status(200).json(sub);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}


export const deleteAllSubs = async (req,res) => {
    try{

    await Sub.deleteMany({});

    res.json({ message: "Subs deleted successfully." });

    } catch(error) {
        res.status(404).json({message: error.message});
    }
}
