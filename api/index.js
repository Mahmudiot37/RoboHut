const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./data/db");

dotenv.config();
const app = express();

connectDB();

app.use(morgan("dev"));

app.get("/products", (req, res) => {
    res.send("Hello world");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
