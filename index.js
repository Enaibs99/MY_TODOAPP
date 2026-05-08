const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const live_url = process.env.LIVE_URL;
const local_url = process.env.LOCAL_URL;

mongoose
    .connect(live_url)
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