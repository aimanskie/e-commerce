const httpStatus = require('http-status');

const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { parkingUserService } = require('../services');

const getUsers = catchAsync(async (req, res) => {
  const result = await parkingUserService.queryUsers();
  res.send(result);
});

const getUser = catchAsync(async (req, res) => {
  const user = await parkingUserService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

module.exports = {
  getUsers,
  getUser,
};
