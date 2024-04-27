const Vehical = require('../models/Vehical.js')

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

const getVehicalListByWheels = async (req,res)=>{
  try{
    const {numberOfWheels} = req.params
    const vehicles = await Vehical.find({numberOfWheels:numberOfWheels}).exec();
    res.json({
      status:'SUCCESS',
      data: vehicles
    })
  }catch(error){
    res.status(500).json({
      status: 'FAILED',
      message:'Something went wrong'
    })
  }
}

const updateVehicalBooking = async (req, res) => {
  try {
    const { id } = req.params
    
    // const newData = req.body;
    // const existingData = await Vehical.findById(id);

    // if (existingData.bookEndDate==null || ((newData.bookStartDate > existingData.bookEndDate)||(newData.bookEndDate < existingData.bookStartDate))) {
      // Proceed with the update
      console.log("new booking is possible")      

      const { firstName, lastName, numberOfWheels, typeOfVehical, model, bookStartDate, bookEndDate } = req.body
      await Vehical.findByIdAndUpdate(id, { firstName, lastName, numberOfWheels, typeOfVehical, model, bookStartDate, bookEndDate })
      res.json({
      status: 'SUCCESS',
      message: 'Vehical booking successful'
    })
    
    // }
    // else {
      // res.status(500).json({
      //   status: 'FAILED',
      //   message: 'Sorry we have booking in this date'
      // })
      // console.log("booking is not possible")
    // }
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

module.exports = {
  getVehicalsBooking,
  createVehicalBooking,
  updateVehicalBooking,
  deleteVehicalBooking,
  getVehicalBookingById,
  getVehicalListByWheels
}