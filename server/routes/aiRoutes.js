const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getCompatibility,
} = require("../controllers/aiController");

router.get(
  "/compatibility/:id",
  authMiddleware,
  getCompatibility
);

module.exports = router;