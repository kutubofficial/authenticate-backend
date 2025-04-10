const express = require("express");
const app = express();
const connectDB = require("./config/database");
const cors = require("cors");
const authRoutes = require("./routes/auth");
require("dotenv").config();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Backend is live and running!");
  });
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
