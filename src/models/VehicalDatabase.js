const mongoose = require('mongoose');

const VehicalDatabase = mongoose.model('VehicalDatabase', {
  firstName: String,
  lastName: String,
  numberOfWheels: String,
  typeOfVehical: String,
  model: String,
  bookStartDate: Date,
  bookEndDate: Date
})

module.exports = VehicalDatabase