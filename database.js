const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect("mongodb+srv://annoia09:viKvL6aVm3RA891v@cluster0.p7xvb.mongodb.net/");
    console.log(`mongo connected: ${conn.connection.host}`);
  };

  module.exports = connectDB;