const express = require("express");
const cors = require("cors");
const compression = require("compression");

const treeRouter = require("./routes/treeRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

// cross origin resources sharing
app.use(cors());

// body parser, reading data from body into req.body
app.use(express.json({ limit: "500kb" }));

// compress
app.use(compression());

app.use("/api/v1/trees", treeRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// global error handler
app.use(globalErrorHandler);

module.exports = app;
