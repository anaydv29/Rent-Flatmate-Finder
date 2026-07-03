const TenantProfile = require("../models/TenantProfile");

// Create or Update Tenant Profile
exports.createProfile = async (req, res) => {
  try {
    const { preferredLocation, budgetMin, budgetMax, moveInDate } = req.body;

    let profile = await TenantProfile.findOne({ user: req.user.id });

    if (profile) {
      profile.preferredLocation = preferredLocation;
      profile.budgetMin = budgetMin;
      profile.budgetMax = budgetMax;
      profile.moveInDate = moveInDate;

      await profile.save();
    } else {
      profile = await TenantProfile.create({
        user: req.user.id,
        preferredLocation,
        budgetMin,
        budgetMax,
        moveInDate,
      });
    }

    res.status(200).json({
      success: true,
      message: "Profile Saved Successfully",
      profile,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Logged-in Tenant Profile
exports.getProfile = async (req, res) => {
  try {
    const profile = await TenantProfile.findOne({ user: req.user.id });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.json({
      success: true,
      profile,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};