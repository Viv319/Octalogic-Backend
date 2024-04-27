const Vehical = require('../models/VehicalDatabase.js')

const getVehicalsBooking = async (req, res) => {
  try {
    const vehicals = await Vehical.find()
    res.json({
      status: 'SUCCESS',
      data: vehicals
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

const createVehicalBooking = async (req, res) => {
  try {
    const { firstName, lastName, numberOfWheels, typeOfVehical, model, bookStartDate, bookEndDate } = req.body

    await Vehical.create({ firstName, lastName, numberOfWheels, typeOfVehical, model, bookStartDate, bookEndDate })
    res.json({
      status: 'SUCCESS',
      message: 'Vehical booked successfully'
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

const updateVehicalBooking = async (req, res) => {
  try {
    const { id } = req.params
    const { modelName, ownerName, purchaseYear, purchaseCost } = req.body
    await Vehical.findByIdAndUpdate(id, { modelName, ownerName, purchaseYear, purchaseCost })
    res.json({
      status: 'SUCCESS',
      message: 'Vehical details updated successfully'
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

const deleteVehicalBooking = async (req, res) => {
  try {
    const { id } = req.params
    await Vehical.findByIdAndDelete(id)
    res.json({
      status: 'SUCCESS',
      message: 'Vehical details deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

const getVehicalBookingById = async (req,res) =>{
  try{
    const {id} = req.params
    const vehical = await Vehical.findById(id)
    res.json({
      status: 'SUCCESS',
      data: vehical
    })
  } catch(error){
    res.status(500).json({
      status: 'FAILED',
      message:'Something went wrong'
    })
  }
}


module.exports = {
  getVehicalsBooking,
  createVehicalBooking,
  updateVehicalBooking,
  deleteVehicalBooking,
  getVehicalBookingById
}