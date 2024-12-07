const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // References User by integer ID
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true }, // References Movie by integer ID
    showtime: { type: Date, required: true },
    seats: [{ type: String, required: true }], // E.g., ['A1', 'A2']
    payment: {
      transactionId: { type: String, required: true },
      amount: { type: Number, required: true },
      status: { type: String, enum: ['success', 'failed', 'pending'], required: true }
    },
    status: { type: String, enum: ['confirmed', 'cancelled'], default: 'confirmed' },
    printed: { type: Boolean, default: false }, // Indicates if a ticket was printed
    handledBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Employee who managed the booking
  }, { timestamps: true });
  
  module.exports = mongoose.model('Booking', bookingSchema);