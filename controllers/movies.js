const getMovies = (req, res) => {
  res.json({
    movies: [
      "Toy Story",
      "Harry Potter",
      "The Call",
      "Avatar",
      "Black Adam",
      "Shazam",
      "The Nightcrawler",
      "Avatar 2",
    ],
  });
};

module.exports = { getMovies };
