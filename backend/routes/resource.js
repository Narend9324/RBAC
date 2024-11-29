const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");
const router = express.Router();

// Admin-only resource
router.get("/admin", protect, allowRoles("Admin"), (req, res) => {
  res.json({ message: "Admin content" });
});

// Moderator and Admin resource
router.get(
  "/moderator",
  protect,
  allowRoles("Moderator", "Admin"),
  (req, res) => {
    res.json({ message: "Moderator content" });
  }
);

// User resource
router.get(
  "/user",
  protect,
  allowRoles("User", "Moderator", "Admin"),
  (req, res) => {
    res.json({ message: "User content" });
  }
);

module.exports = router;
