const Reference = require("../models/Reference");

const formatDocument = (doc) => {
  const obj = doc.toObject();
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  return obj;
};

exports.getAll = async (req, res) => {
  const items = await Reference.find();

  res.json({
    success: true,
    message: "References list retrieved successfully.",
    data: items.map(formatDocument)
  });
};

exports.getById = async (req, res) => {
  const item = await Reference.findById(req.params.id);

  res.json({
    success: true,
    message: "Reference retrieved successfully.",
    data: formatDocument(item)
  });
};

exports.add = async (req, res) => {
  const item = await Reference.create(req.body);

  res.status(201).json({
    success: true,
    message: "Reference added successfully.",
    data: formatDocument(item)
  });
};

exports.update = async (req, res) => {
  await Reference.findByIdAndUpdate(req.params.id, req.body);

  res.json({
    success: true,
    message: "Reference updated successfully."
  });
};

exports.remove = async (req, res) => {
  await Reference.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
    message: "Reference deleted successfully."
  });
};