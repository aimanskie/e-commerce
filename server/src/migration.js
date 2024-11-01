const mongoose = require('mongoose');
const User = require('./models/user.model');
const config = require('./config/config');

const userData = {
  role: 'admin',
  isEmailVerified: true,
  email: 'admin@thebigtac.com',
  password: 'admin1234',
  name: 'Admin User',
};

// Connect to MongoDB
mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    console.log('Connected to MongoDB');
    return User.findOne({ email: userData.email });
  })
  .then((existingUser) => {
    if (existingUser) {
      console.log('User already exists, skipping creation.');
      return mongoose.disconnect();
    }
    // Create new user
    return User.create(userData).then(() => {
      console.log('User created successfully');
      return mongoose.disconnect();
    });
  })
  .then(() => {
    console.log('Disconnected from MongoDB');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error occurred:', err.message);
    mongoose.disconnect().then(() => process.exit(1));
  });
