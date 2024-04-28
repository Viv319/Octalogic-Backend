const Vehical = require('../models/Vehical.js')
var moment = require('moment');
moment().format(); 

const getAllVehicalsBooking = async (req, res) => {
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

const addNewVehicalForBooking = async (req, res) => {
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

const createVehicalBooking = async (req, res) => {
  try {
    const { id } = req.params
    const newData = req.body;
    const existingData = await Vehical.findById(id);

          // Parse the date strings into Moment.js objects
          const newDataStartDate = moment(newData.bookStartDate);
          const newDataEndDate = moment(newData.bookEndDate);

          const existingDataStartDate = moment(existingData.bookStartDate);    
          const existingDataEndDate = moment(existingData.bookEndDate);

          // 2024-04-26   2024-04-19
          // 2024-04-27    2024-04-20
          // "bookStartDate": "2024-04-21T00:00:00.000Z",
          // "bookEndDate": "2024-04-25T00:00:00.000Z",

     if (existingDataEndDate==null || (existingDataStartDate.isAfter(newDataEndDate) || existingDataEndDate.isBefore(newDataStartDate))) {

      console.log("inside if")
      const { firstName, lastName, numberOfWheels, typeOfVehical, model, bookStartDate, bookEndDate} = req.body
      console.log("after req.body")
      await Vehical.findByIdAndUpdate(id, { firstName, lastName, numberOfWheels, typeOfVehical, model, bookStartDate, bookEndDate })
      
      console.log("new booking is possible") 
      res.json({
      status: 'SUCCESS',
      message: 'Vehical booking successful'
    })
    
     }
    else {
      res.status(500).json({
        status: 'FAILED',
        message: 'Sorry we have booking in this date'
      })
      console.log("booking is not possible")
    }
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

module.exports = {
  getAllVehicalsBooking,
  addNewVehicalForBooking,
  getVehicalListByWheels,
  createVehicalBooking
}