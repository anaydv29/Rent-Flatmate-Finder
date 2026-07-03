const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createListing,
  getAllListings,
  getSingleListing,
  deleteListing,
  getMyListings,
} = require("../controllers/listingController");

router.post("/", authMiddleware, createListing);

router.get("/", getAllListings);
router.get("/my-listings", authMiddleware, getMyListings);

router.get("/:id", getSingleListing);

router.delete("/:id", authMiddleware, deleteListing);

module.exports = router;