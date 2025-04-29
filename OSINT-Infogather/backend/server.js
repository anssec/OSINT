const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connectDB } = require("./config/database");
const PORT = process.env.PORT || 7000;
const Response = require("./utils/Response.js");
const allSSLScans = require("./routes/allSSlScans.js");
const app = express();
app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
app.use(express.json());
app.use(cookieParser());
connectDB();
app.use(
  cors({
    origin: process.env.FRONTENDURL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: "Content-Type,Authorization",
  })
);

//routes import
app.get("/", (req, res) => {
  Response(res, true, "Api is Working", 200);
  
  return;
});
app.use("/api/scans", allSSLScans);

module.exports = app;
