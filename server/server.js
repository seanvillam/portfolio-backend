require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const createError = require("http-errors");

const connectDB = require("./config/db.js");
const errorHandler = require("./helpers/errorHandler");

const referencesRoutes = require("./routes/referencesRoutes.js");
const projectRoutes = require("./routes/projectRoutes.js");
const serviceRoutes = require("./routes/serviceRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const app = express();

connectDB();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/references", referencesRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  next(createError(404, "Route Not Found"));
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});