const Project = require("../models/Project");

const formatDocument = (doc) => {
  const obj = doc.toObject();
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  return obj;
};

exports.getAll = async (req, res) => {
  const items = await Project.find();

  res.json({
    success: true,
    message: "Projects list retrieved successfully.",
    data: items.map(formatDocument)
  });
};

exports.getById = async (req, res) => {
  const item = await Project.findById(req.params.id);

  res.json({
    success: true,
    message: "Project retrieved successfully.",
    data: formatDocument(item)
  });
};

exports.add = async (req, res) => {
  const item = await Project.create(req.body);

  res.status(201).json({
    success: true,
    message: "Project added successfully.",
    data: formatDocument(item)
  });
};

exports.update = async (req, res) => {
  await Project.findByIdAndUpdate(req.params.id, req.body);

  res.json({
    success: true,
    message: "Project updated successfully."
  });
};

exports.remove = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
    message: "Project deleted successfully."
  });
};