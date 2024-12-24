const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,  // Username is required
  
  },
  hashedPassword: {
    type: String,
    required: true,  // Password is required
  }

});
// models/user.js
// ... userSchema above
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
      delete returnedObject.hashedPassword;
  }
});

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;

