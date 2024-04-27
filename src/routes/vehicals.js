const express = require('express')

const { 
    getVehicalsBooking,
    createVehicalBooking,
    updateVehicalBooking,
    deleteVehicalBooking,
    getVehicalBookingById
} = require('../controllers/vehicals.js')

const router = express.Router()

router.get('/vehicals', getVehicalsBooking)

router.post('/vehicals/createBooking', createVehicalBooking)

router.patch('/vehicals/update/:id', updateVehicalBooking)

router.delete('/vehicals/delete/:id', deleteVehicalBooking)

router.get('/vehicals/:id',getVehicalBookingById)

module.exports = router