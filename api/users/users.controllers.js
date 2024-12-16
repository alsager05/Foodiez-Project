const User = require("../models/Users");

exports.usersGet = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.userCreate = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.userUpdate = async (req, res) => {
  const { userId } = req.params;
  try {
    const foundUser = await User.findById(userId);
    await foundUser.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.userDelete = async (req, res) => {
  const { userId } = req.params;
  try {
    const foundUser = await User.findById(userId);
    await foundUser.deleteOne();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
