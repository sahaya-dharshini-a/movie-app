const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
    userId: String,
    movieId: String,
    title: String,
    poster: String,
});

module.exports = mongoose.model("Watchlist", watchlistSchema);
