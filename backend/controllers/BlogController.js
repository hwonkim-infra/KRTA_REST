import asyncHandler from "express-async-handler";
import Blog from "../models/BlogModel.js";

// @desc    Fetch all posts
// @route   GET /api/posts
// @access  Public
const getBlogs = asyncHandler(async (req, res) => {
  const posts = await Blog.find();

  if (posts) {
    res.status(200).json(posts);
    console.log("Fetched Blogs successfully");
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

// @desc    Fetch single post
// @route   GET /api/posts/:id
// @access  Public
const getBlogById = asyncHandler(async (req, res) => {
  const post = await Blog.findById(req.params.id);

  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

// @desc    Delete a post
// @route   DELETE /api/posts/:id
// @access  Private/Admin
const deleteBlog = asyncHandler(async (req, res) => {
  const post = await Blog.findById(req.params.id);

  if (post) {
    await post.remove();
    res.json({ message: "Blog removed" });
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

// @desc    Create a post
// @route   POST /api/posts
// @access  /Admin
const createBlog = asyncHandler(async (req, res) => {
  const { title, ...rest } = req.body;
  const post = new Blog({
    title,
    // _id: req.body.title + "_" + Date.now(),
    date: Date.now(),
    ...rest,
  });

  const createdBlog = await post.save();
  res.status(201).json(createdBlog);
});



// @desc    Update a post
// @route   PUT /api/posts/:id
// @access  Private/Admin

const updateBlog = asyncHandler(async (req, res) => {
  const { title, ...rest } = req.body;
  const postFields = {title, ...rest};


  try {
    

    const post = await Blog.findOneAndUpdate(
      { _id: req.params.id },
      { $set: postFields },
      { new: true, upsert: true, setDefaultOnInsert: true }
    );

    return res.json(post || null);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
});



export { getBlogs, getBlogById, deleteBlog, createBlog, updateBlog, };
