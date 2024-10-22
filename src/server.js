require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/auth").router; // Import auth routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Example Route
app.get("/", (req, res) => {
  res.send("TaskMaster API is running");
});

// Use the auth routes
app.use("/api/auth", authRoutes);

// Use the project and task routes
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
