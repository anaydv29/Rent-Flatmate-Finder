const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const listingRoutes = require("./routes/listingRoutes");
const tenantRoutes = require("./routes/tenantRoutes");
const aiRoutes = require("./routes/aiRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/tenant", tenantRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("Rent Flatmate Finder API Running");
});

module.exports = app;