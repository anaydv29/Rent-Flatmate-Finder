const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createProfile,
  getProfile,
} = require("../controllers/tenantController");

router.post("/profile", authMiddleware, createProfile);

router.get("/profile", authMiddleware, getProfile);

module.exports = router;