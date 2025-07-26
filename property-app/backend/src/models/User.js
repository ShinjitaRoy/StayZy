const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
    // ...other fields
});

// Hash the password before saving the user
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Method to compare password for authentication
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

// Add this method:
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ id: this._id, username: this.username }, process.env.JWT_SECRET || 'secretkey', { expiresIn: '7d' });
};

const User = mongoose.model('User', userSchema);

module.exports = User;