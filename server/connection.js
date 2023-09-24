const mongoose = require("mongoose");

const url =
  "mongodb+srv://neeraj:9963112399@cluster0.fttq3h0.mongodb.net/Job-Portal?retryWrites=true&w=majority";

const connection = async () => {
  try {
    const connect = mongoose.connect(url);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connection;
 