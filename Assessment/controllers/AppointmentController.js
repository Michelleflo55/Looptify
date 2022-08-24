const { Appointment} = require('../models')

//http://localhost:3001/appointments
const GetAppointments = async (req, res) => {
   try {
    const appointments = await Appointment.findAll()
        res.send(appointments)
   } catch (error) {
    throw (error)
   }
}

//http://localhost:3001/appointments/1
const GetAppointment = async (req, res) =>{
    try {
       const appointment = await Appointment.findByPk(req.params.id) 
       res.send(appointment)
    } catch (error) {
        throw (error)
       
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
        const appointmentId = parseInt(req.params.id)
        const update = await Appointment.update(req.body, {
            where: {id: appointmentId},
            returning: true
        })
        res.send(update)
        console.log(UpdateAppointment)
    } catch (error) {
        
    }
}

//http://localhost:3001/appointments/1
const DeleteAppointment = async (req, res) =>{
    try {
        let appointmentId = parseInt(req.params.id)
        await Appointment.destroy({where: { id: appointmentId }})
        res.send({message: `Appointment ${appointmentId} has been deleted.`})
    } catch (error) {
        throw(error)
    }
}




module.exports = {
    GetAppointments,
    GetAppointment,
    // PostAppointment
    UpdateAppointment,
    DeleteAppointment
}