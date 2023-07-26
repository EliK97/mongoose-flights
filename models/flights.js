const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['ATL', 'JFK', 'LGA', 'LAX', 'KIN'],
  },
  arrival: Date,
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United', 'Delta'],
  },
  airport: {
    type: String,
    enum: ['ATL', 'JFK', 'LGA', 'LAX', 'KIN'],
    default: 'JFK',
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function () {
      return new Date().setFullYear(new Date().getFullYear() + 1);
    },
  },
  destinations: [destinationSchema],
});

module.exports = mongoose.model('Flight', flightSchema);