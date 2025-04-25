const mongoose = require('mongoose');

/**
 * @typedef {Object} Rent
 * @property {string} carId - ID of the rented car
 * @property {string} renterId - ID of the person renting the car
 * @property {Date} startDate - Start date of the rental
 * @property {Date} endDate - End date of the rental
 * @property {number} totalCost - Total cost of the rental
 * @property {string} status - Current status of the rental (pending, active, completed, cancelled)
 * @property {Object} pickupLocation - Location where the car was picked up
 * @property {number} pickupLocation.lat - Latitude
 * @property {number} pickupLocation.lng - Longitude
 * @property {string} paymentId - ID of the payment transaction
 */

const rentSchema = new mongoose.Schema({
  carId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RentalCar',
    required: true
  },
  renterId: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  totalCost: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'completed', 'cancelled'],
    default: 'pending'
  },
  pickupLocation: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  paymentId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Rent', rentSchema); 