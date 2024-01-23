"use server"


import { createPostParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import Post from "../database/models/post.model";
import User from "../database/models/user.model";
import Category from "../database/models/category.model";

const populatePost = async(query : any) => {
    return query
    //field in the doc we want to populate with data from the other model
    .populate({path : 'creator', model : User, select : '_id firstName lastName'})
    .populate({path : 'category', model : Category, select : '_id name'})
}

export const createPost = async({post, userId, path} : createPostParams) => {
    try {
        await connectToDatabase();
        
        const creator = await User.findById(userId);

        if(!creator){
            throw new Error("Creator not found!");
        }

        const newPost = await Post.create({
            //... -> spread / rest operator
            //it copies all the key value pairs from post onj to the new obj
            //it is usefull when we want to include all the props of the post and also want to override / add some specific props.
            ...post, 
            category : post.categoryId, 
            creator : userId, 
            createdAt : new Date()});

        return JSON.parse(JSON.stringify(newPost));
    } catch (error) {
        handleError(error);
    }
}

export const getPostById = async (postId : string) => {
    try {
        await connectToDatabase();

        const post = await populatePost(Post.findById(postId));

        if(!post)
        {
            throw new Error("Post not found!");
        }

        return JSON.parse(JSON.stringify(post));
    } catch (error) {
        handleError(error);
    }
}