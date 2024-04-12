const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {

  const { userName, password, email } = req.body;

  const user = await User.create({
    name: userName,
    email,
    password,
  });
  sendToken(user, 201, res);
});

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, loginpassword } = req.body;

  // checking if user has given password and email both

  if (!email || !loginpassword) {
    return res.status(400).json("Please Enter Email & Password")
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json("Invalid email or password")
  }

  const isPasswordMatched = await user.comparePassword(loginpassword);

  if (!isPasswordMatched) {
    return res.status(401).json("Invalid email or password")
  }

  sendToken(user, 200, res);
});

// Logout User
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
});



