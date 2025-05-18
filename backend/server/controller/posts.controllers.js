import { request } from "express";
import Post from "../models/Post.js";

//get posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//create post
export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newPost = new Post({ title, description });

    await newPost.save();
    return res.json(newPost);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

//update post
export const updatePost = async (req, res) => {
  try {
    // const post = await Post.updateOne({ _id: req.params.id }, req.body, {
    //   new: true,
    // });
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(post);
    return res.send("received");
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

//delete post
export const deletePost = async (req, res) => {
  try {
    const postRemove = await Post.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });

    if (!postRemove) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

//get post by id
export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.sendStatus(404);
    return res.json(post);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
