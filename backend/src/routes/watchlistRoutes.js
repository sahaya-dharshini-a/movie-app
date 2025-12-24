const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.get("/watchlist", protect, (req, res) => {
    res.json({ message: "User watchlist route secured" });
});

module.exports = router;
