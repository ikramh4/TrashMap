const mongoose = require('mongoose');

const trashBinSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  binType: {
    type: String,
    enum: ['general', 'recycle', 'organic'],
    default: 'general'
  },
  capacity: {
    type: String,
    enum: ['small', 'medium', 'large'],
    default: 'medium'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('TrashBin', trashBinSchema); 