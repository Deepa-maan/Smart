if (process.env.NODE_ENV === "production") {
  module.exports = { mongoURI: "" }; // Add your remote db connection string here
} else {
  module.exports = { mongoURI: "mongodb://localhost:27017/chatting" }; // Add your local db connection string here
}
