import asyncHandler from "express-async-handler";
import HEX from "../models/HEXModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getHEXs = asyncHandler(async (req, res) => {
  const products = await HEX.find();

  if (products) {
    res.status(200).json(products);
    console.log("Fetched HEXs successfully");
  } else {
    res.status(404);
    throw new Error("HEX not found");
  }
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getHEXById = asyncHandler(async (req, res) => {
  const product = await HEX.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("HEX not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteHEX = asyncHandler(async (req, res) => {
  const product = await HEX.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "HEX removed" });
  } else {
    res.status(404);
    throw new Error("HEX not found");
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  /Admin
const createHEX = asyncHandler(async (req, res) => {
  const { model_name, ...rest } = req.body;
  const product = new HEX({
    model_name,
    _id: req.body.model_name + "_" + Date.now(),
    ...rest,
  });

  const createdHEX = await product.save();
  res.status(201).json(createdHEX);
});

// @desc    Create a changeProduct
// @route   POST /api/products
// @access  /Admin
const createHEXChange = asyncHandler(async (req, res) => {
  const originProdId = req.params.originId;
  
  await HEX.findById(originProdId).then((product) => {
    const { model_name,  ...rest } = req.body;
    
    try {
      console.log("🚀 ~ file: HEXController.js ~ line 73 ~ awaitHEX.findById ~ product", product)
      const HEXChange = new HEX({
        ChangeModel: true,
        origin: originProdId,
        model_name,
        _id: model_name + "_" + Date.now(),
        ...rest,
      });
  
      const createdHEXChange = HEXChange.save();
      return res.status(201).json(createdHEXChange);
    } catch (err) {
      console.log(err.message);
      return res.status(500).send("Server Error");
    }

    
  });
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin

const updateHEX = asyncHandler(async (req, res) => {
  const { model_name,  ...rest } = req.body;
  const productFields = {model_name, ...rest};


  try {
    

    const product = await HEX.findOneAndUpdate(
      { _id: req.params.id },
      { $set: productFields },
      { new: true, upsert: true, setDefaultOnInsert: true }
    );

    return res.json(product || null);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
});

// @route    PUT api/product/drawings
// @desc     Add product drawings
// @access   Admin

const updateHEXdrawing = asyncHandler(async (req, res) => {
  try {
    const product = await HEX.findOne({ user: req.user.id });

    product.drawings.unshift(req.body);

    await product.save();

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export { getHEXs, getHEXById, deleteHEX, createHEX, updateHEX, createHEXChange, updateHEXdrawing };
