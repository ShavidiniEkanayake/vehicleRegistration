const mongoose = require("mongoose");

const MONGO_URI  = process.env.MONGO_URI || 'mongodb+srv://Shavidini:Sde1234@vehicleregistration.sjbw5wr.mongodb.net/registration';

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};