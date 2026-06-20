const User = require("../models/User");

const formatDocument = (doc) => {
  const obj = doc.toObject();
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  return obj;
};

exports.getAll = async (req, res) => {
  const items = await User.find();

  res.json({
    success: true,
    message: "Users list retrieved successfully.",
    data: items.map(formatDocument)
  });
};

exports.getById = async (req, res) => {
  const item = await User.findById(req.params.id);

  res.json({
    success: true,
    message: "User retrieved successfully.",
    data: formatDocument(item)
  });
};

exports.add = async (req, res) => {
  const item = await User.create(req.body);

  res.status(201).json({
    success: true,
    message: "User added successfully.",
    data: formatDocument(item)
  });
};

exports.update = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);

  res.json({
    success: true,
    message: "User updated successfully."
  });
};

exports.remove = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
    message: "User deleted successfully."
  });
};