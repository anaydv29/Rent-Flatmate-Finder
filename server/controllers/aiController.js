const Listing = require("../models/Listing");
const TenantProfile = require("../models/TenantProfile");

exports.getCompatibility = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: "Listing not found",
      });
    }

    const profile = await TenantProfile.findOne({
      user: req.user.id,
    });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Create your tenant profile first",
      });
    }

    let score = 0;
    let reason = [];

    // Budget Match
    if (
      listing.rent >= profile.budgetMin &&
      listing.rent <= profile.budgetMax
    ) {
      score += 40;
      reason.push("Budget matched");
    }

    // Location Match
    if (
      listing.location
        .toLowerCase()
        .includes(profile.preferredLocation.toLowerCase())
    ) {
      score += 40;
      reason.push("Preferred location matched");
    }

    // Furnished Bonus
    if (listing.furnished) {
      score += 20;
      reason.push("Furnished room");
    }

    res.json({
      success: true,
      compatibility: {
        score,
        reasons: reason,
      },
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};