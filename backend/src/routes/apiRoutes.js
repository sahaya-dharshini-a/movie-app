const express = require("express");
const router = express.Router();

router.get("/status", (req, res) => {
    res.json({ status: "Backend API running" });
});

module.exports = router;
