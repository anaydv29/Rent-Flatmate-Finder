const Listing = require("../models/Listing");

// Create Listing
exports.createListing = async (req, res) => {
  try {
    const {
      title,
      location,
      rent,
      availableFrom,
      roomType,
      furnished,
    } = req.body;

    const listing = await Listing.create({
      owner: req.user.id,
      title,
      location,
      rent,
      availableFrom,
      roomType,
      furnished,
      photos: [],
    });

    res.status(201).json({
      success: true,
      message: "Listing Created Successfully",
      listing,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get All Listings
exports.getAllListings = async (req, res) => {

  try {

    const listings = await Listing.find({ isFilled: false })
      .populate("owner", "name email phone");

    res.json({
      success: true,
      count: listings.length,
      listings,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// Get Single Listing
exports.getSingleListing = async (req, res) => {

  try {

    const listing = await Listing.findById(req.params.id)
      .populate("owner", "name email phone");

    if (!listing) {

      return res.status(404).json({
        success: false,
        message: "Listing Not Found",
      });

    }

    res.json({
      success: true,
      listing,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// Delete Listing
exports.deleteListing = async (req, res) => {

  try {

    const listing = await Listing.findById(req.params.id);

    if (!listing) {

      return res.status(404).json({
        success: false,
        message: "Listing Not Found",
      });

    }

    await listing.deleteOne();

    res.json({
      success: true,
      message: "Listing Deleted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
// Get Logged-in Owner Listings
exports.getMyListings = async (req, res) => {
  try {
    const listings = await Listing.find({
      owner: req.user.id,
    });

    res.json({
      success: true,
      listings,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};