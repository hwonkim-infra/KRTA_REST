import asyncHandler from "express-async-handler";
import WEX from "../models/WEXModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getWEXs = asyncHandler(async (req, res) => {
  const products = await WEX.find();

  if (products) {
    res.status(200).json(products);
    console.log("Fetched WEXs successfully");
  } else {
    res.status(404);
    throw new Error("WEX not found");
  }
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getWEXById = asyncHandler(async (req, res) => {
  const product = await WEX.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("WEX not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteWEX = asyncHandler(async (req, res) => {
  const product = await WEX.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "WEX removed" });
  } else {
    res.status(404);
    throw new Error("WEX not found");
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  /Admin
const createWEX = asyncHandler(async (req, res) => {
  const { model_name,  ...rest } = req.body;
  const product = new WEX({
    model_name,
    _id: req.body.model_name + "_" + Date.now(),
    ...rest,
  });

  const createdWEX = await product.save();
  res.status(201).json(createdWEX);
});

// @desc    Create a changeProduct
// @route   POST /api/products
// @access  /Admin
const createWEXChange = asyncHandler(async (req, res) => {
  const originProdId = req.params.originId;
  
  await WEX.findById(originProdId).then((product) => {
    const { model_name,  ...rest } = req.body;
    
    try {
      // console.log("🚀 ~ file: WEXController.js ~ line 73 ~ awaitWEX.findById ~ product", product)
      const WEXChange = new WEX({
        ChangeModel: true,
        origin: originProdId,
        model_name,
        _id: model_name + "_" + Date.now(),
        ...rest,
      });
  
      const createdWEXChange = WEXChange.save();
      return res.status(201).json(createdWEXChange);
    } catch (err) {
      console.log(err.message);
      return res.status(500).send("Server Error");
    }

    
  });
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin

const updateWEX = asyncHandler(async (req, res) => {
  const { model_name,  ...rest } = req.body;
  const productFields = {model_name, ...rest};


  try {
    

    const product = await WEX.findOneAndUpdate(
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

const updateWEXdrawing = asyncHandler(async (req, res) => {
  try {
    const product = await WEX.findOne({ user: req.user.id });

    product.drawings.unshift(req.body);

    await product.save();

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export { getWEXs, getWEXById, deleteWEX, createWEX, updateWEX, createWEXChange, updateWEXdrawing };
