const Service = require("../models/Service");

const formatDocument = (doc) => {
  const obj = doc.toObject();
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  return obj;
};

exports.getAll = async (req, res) => {
  const services = await Service.find();

  res.json({
    success: true,
    message: "Services list retrieved successfully.",
    data: services.map(formatDocument)
  });
};

exports.getById = async (req, res) => {
  const service = await Service.findById(req.params.id);

  res.json({
    success: true,
    message: "Service retrieved successfully.",
    data: formatDocument(service)
  });
};

exports.add = async (req, res) => {
  const service = await Service.create(req.body);

  res.status(201).json({
    success: true,
    message: "Service added successfully.",
    data: formatDocument(service)
  });
};

exports.update = async (req, res) => {
  await Service.findByIdAndUpdate(req.params.id, req.body);

  res.json({
    success: true,
    message: "Service updated successfully."
  });
};

exports.remove = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
    message: "Service deleted successfully."
  });
};