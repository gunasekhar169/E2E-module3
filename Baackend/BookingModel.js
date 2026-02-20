const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  workerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker', required: true },
  customerId: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
