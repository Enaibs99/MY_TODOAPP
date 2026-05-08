require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require("./routes/todoRoutes");

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

mongoose
    .connect(MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('Connection error:', err));


const app = express();
app.use(cors());    
app.use(express.json());
app.use("/todos", router);

app.get("/", (req, res) => {
    res.send("Hello World!");
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});