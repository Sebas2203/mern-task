import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, // Remove whitespace from both ends
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  Image: {
    url: String,
    public_id: String,
  },
});

export default mongoose.model("Post", postSchema);
