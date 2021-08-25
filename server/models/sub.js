import mongoose from "mongoose";
const Schema = mongoose.Schema;
const subSchema = mongoose.Schema({
    title: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const Sub = mongoose.model("sub", subSchema);

export default Sub;