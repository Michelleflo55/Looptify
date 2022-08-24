const { Appointment} = require('../models')

//http://localhost:3001/appointments
const GetAppointments = async (req, res) => {
   try {
    const appointments = await Appointment.findAll()
        res.send(appointments)
   } catch (error) {
    throw error
   }
}

//http://localhost:3001/appointments/1
const GetAppointment = async (req, res) =>{
    try {
       const appointment = await Appointment.findByPk(req.params.id) 
       res.send(appointment)
    } catch (error) {
        throw error
       
    }
}

// const PostAppointment = async (req, res) =>{
//     try {
//         const newAppointment = await Appointment.create(req.body)
//         await newAppointment.save()
//         res.send(newAppointment)
//     } catch (error) {
        
//     }
// }
const UpdateAppointment = async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
}

const DeleteAppointment = async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
}




module.exports = {
    GetAppointments,
    GetAppointment,
    // PostAppointment
}