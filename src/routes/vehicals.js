const express = require('express')

const { 
    getVehicalsBooking,
    createVehicalBooking,
    updateVehicalBooking,
    getVehicalListByWheels
} = require('../controllers/vehicals.js')

const router = express.Router()

router.get('/vehicals', getVehicalsBooking)

router.post('/vehicals/createBooking', createVehicalBooking)

router.patch('/vehicals/update/:id', updateVehicalBooking)

router.get('/vehicals/getByWheels/:numberOfWheels',getVehicalListByWheels)

module.exports = router