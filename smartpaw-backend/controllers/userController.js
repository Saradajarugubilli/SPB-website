const User = require('../models/User');

// Register a new user
const registerUser = async (req, res) => {
  try {
    const {
      guardian,
      email,               // ✅ include email
      phone,
      location,
      dog_name,
      breed,
      age,
      vaccination,
      health
    } = req.body;

    const user = new User({
      guardian,
      email,
      phone,
      location,
      dog_name,
      breed,
      age,
      vaccination,
      health
    });

    await user.save();
    res.status(201).json({ user });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Get user profile by ID
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error('Profile fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
};

// Update user profile
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        guardian: req.body.guardian,
        email: req.body.email,           // ✅ update email
        phone: req.body.phone,
        location: req.body.location,
        dog_name: req.body.dog_name,
        breed: req.body.breed,
        age: req.body.age,
        vaccination: req.body.vaccination,
        health: req.body.health
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(updatedUser);
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ error: 'Update failed' });
  }
};

// Delete user profile
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: 'User not found' });

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ error: 'Deletion failed' });
  }
};

// Export all controllers
module.exports = {
  registerUser,
  getUserProfile,
  updateUser,
  deleteUser
};
