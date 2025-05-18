import { request } from "express";
import Post from "../models/Post.js";

//get posts
export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.send([posts]);
};

//create post
export const createPost = async (req, res) => {
  const { title, description } = req.body;
  const newPost = new Post({ title, description });

  await newPost.save();
  return res.json(newPost);
};

//update post
export const updatePost = async (req, res) => {
  // const post = await Post.updateOne({ _id: req.params.id }, req.body, {
  //   new: true,
  // });
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  console.log(post);
  return res.send("received");
};

//delete post
export const deletePost = async (req, res) => {
  const postRemove = await Post.findByIdAndDelete(req.params.id, req.body, {
    new: true,
  });

  if (!postRemove) return res.sendStatus(404);
  return res.sendStatus(204);
};

//get post by id
export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.sendStatus(404);
  return res.json(post);
};
