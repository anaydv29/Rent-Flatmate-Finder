const Chat = require("../models/Chat");

// Save Message
exports.sendMessage = async (req, res) => {
  try {
    const { receiver, message, listing } = req.body;

    const chat = await Chat.create({
      sender: req.user.id,
      receiver,
      message,
      listing,
    });

    res.status(201).json({
      success: true,
      chat,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Conversation
exports.getConversation = async (req, res) => {
  try {
    const chats = await Chat.find({
      $or: [
        {
          sender: req.user.id,
          receiver: req.params.userId,
        },
        {
          sender: req.params.userId,
          receiver: req.user.id,
        },
      ],
    })
      .sort({ createdAt: 1 })
      .populate("sender", "name")
      .populate("receiver", "name");

    res.json({
      success: true,
      chats,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};