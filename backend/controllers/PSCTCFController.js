import asyncHandler from "express-async-handler";
import TCF from "../models/TCFModel.js";
import PSC from "../models/PSCModel.js";

/* PSC Controller */
// @desc    Fetch all posts
// @route   GET /api/posts
// @access  Public
const getPSCs = asyncHandler(async (req, res) => {
  const posts = await PSC.find().sort({date: -1});

  if (posts) {
    res.status(200).json(posts);
    console.log("Fetched PSCs successfully");
  } else {
    res.status(404);
    throw new Error("PSC not found");
  }
});

// @desc    Fetch single post
// @route   GET /api/posts/:id
// @access  Public
const getPSCById = asyncHandler(async (req, res) => {
  const post = await PSC.findById(req.params.id);

  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error("PSC not found");
  }
});

// @desc    Delete a post
// @route   DELETE /api/posts/:id
// @access  Private/Admin
const deletePSC = asyncHandler(async (req, res) => {
  const post = await PSC.findById(req.params.id);

  if (post) {
    await post.remove();
    res.json({ message: "PSC removed" });
  } else {
    res.status(404);
    throw new Error("PSC not found");
  }
});

// @desc    Create a post
// @route   POST /api/posts
// @access  /Admin
const createPSC = asyncHandler(async (req, res) => {
  const { title, ...rest } = req.body;
//   tags.toString().replace(/\s/g,'').split(',').map(function(tag){return { "name": tag}});
  const post = new PSC({
    title,
    // _id: req.body.title + "_" + Date.now(),
    date: Date.now(),
    ...rest,
  });

  const createdPSC = await post.save();
  res.status(201).json(createdPSC);
});



// @desc    Update a post
// @route   PUT /api/posts/:id
// @access  Private/Admin
const updatePSC = asyncHandler(async (req, res) => {
  let { title, ...rest } = req.body;
  const postFields = {title, ...rest};

  try {

    const post = await PSC.findOneAndUpdate(
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



/* TCF Controller */
// @desc    Fetch all posts
// @route   GET /api/posts
// @access  Public
const getTCFs = asyncHandler(async (req, res) => {
  const posts = await TCF.find().sort({date: -1});

  if (posts) {
    res.status(200).json(posts);
    console.log("Fetched TCFs successfully");
  } else {
    res.status(404);
    throw new Error("TCF not found");
  }
});

// @desc    Fetch single post
// @route   GET /api/posts/:id
// @access  Public
const getTCFById = asyncHandler(async (req, res) => {
  const post = await TCF.findById(req.params.id);

  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error("TCF not found");
  }
});

// @desc    Delete a post
// @route   DELETE /api/posts/:id
// @access  Private/Admin
const deleteTCF = asyncHandler(async (req, res) => {
  const post = await TCF.findById(req.params.id);

  if (post) {
    await post.remove();
    res.json({ message: "TCF removed" });
  } else {
    res.status(404);
    throw new Error("TCF not found");
  }
});

// @desc    Create a post
// @route   POST /api/posts
// @access  /Admin
const createTCF = asyncHandler(async (req, res) => {
  const { title, ...rest } = req.body;
//   tags.toString().replace(/\s/g,'').split(',').map(function(tag){return { "name": tag}});
  const post = new TCF({
    title,
    // _id: req.body.title + "_" + Date.now(),
    date: Date.now(),
    ...rest,
  });

  const createdTCF = await post.save();
  res.status(201).json(createdTCF);
});



// @desc    Update a post
// @route   PUT /api/posts/:id
// @access  Private/Admin
const updateTCF = asyncHandler(async (req, res) => {
  let { title, ...rest } = req.body;
  const postFields = {title, ...rest};

  try {

    const post = await TCF.findOneAndUpdate(
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



export { getPSCs, getPSCById, deletePSC, createPSC, updatePSC, };
export { getTCFs, getTCFById, deleteTCF, createTCF, updateTCF, };
