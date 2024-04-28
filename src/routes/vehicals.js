const express = require('express')

const { 
    getAllVehicalsBooking,
    addNewVehicalForBooking,
    getVehicalListByWheels,
    createVehicalBooking
} = require('../controllers/vehicals.js')

const router = express.Router()

router.get('/vehicals', getAllVehicalsBooking)

router.post('/vehicals/addNewVehicalInfo', addNewVehicalForBooking)

router.get('/vehicals/getByWheels/:numberOfWheels',getVehicalListByWheels)

router.patch('/vehicals/booking/:id', createVehicalBooking)


module.exports = router