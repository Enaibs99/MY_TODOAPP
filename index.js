require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL is missing in .env");
}
const router = require("./routes/todoRoutes.js");


mongoose
    .connect(process.env.MONGO_URL)  
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('Connection error:', err));


app.use(cors());
app.use(express.json());
app.use("/todos", router);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});