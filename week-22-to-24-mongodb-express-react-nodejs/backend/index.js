const express = require("express");
require("dotenv/config");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect( `mongodb://localhost:27017`,
//`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.d0tfqfl.mongodb.net/?retryWrites=true&w=majority`,
    () => console.log("db connected")
);

app.use(express.json());

app.use("/api/user/", userRoutes);

app.get("/", (req, res) => { });

app.listen(PORT, () => console.log(`API server is running at : ${PORT}`));
