// src/createAdmin.js

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const MONGO_URI = process.env.MONGO_URI;

const createAdminUser = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');

    const email = 'admin@example.com'; // Replace with your desired admin email
    const password = 'adminpassword'; // Replace with a secure password
    const role = 'Admin'; // Ensure this is set to 'Admin'

    // Check if the admin user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('Admin user already exists:', existingUser);
      return;
    }

    // Create the new admin user
    const adminUser = new User({ email, password, role });
    await adminUser.save();

    console.log('Admin user created:', adminUser);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.disconnect();
  }
};

createAdminUser();
