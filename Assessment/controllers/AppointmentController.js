const { Appointment} = require('../models')

// http://localhost:3001/appointments
const GetAppointments = async (req, res) => {
   try {
    const appointments = await Appointment.findAll()
        res.send(appointments)
   } catch (error) {
    throw (error)
   }
}

// http://localhost:3001/appointments/1
const GetAppointment = async (req, res) =>{
    try {
       const appointment = await Appointment.findByPk(req.params.id) 
       res.send(appointment)
    } catch (error) {
        throw (error)
       
    }
}

// http://localhost:3001/appointments
//  What I input in JSON: {
// 		"id": 6,
// 		"guest": "michelle flores",
// 		"phone": "9153552768",
// 		"email": "michele.flo@mail.io",
// 		"pet": "Nimbus",
// 		"apptDateTime": "2022-08-24 19:07:56.096 +00:00"
// 	}
const PostAppointment = async (req, res) =>{
    try {
        console.log(req.body)
        const newAppointment = await Appointment.create(req.body)
        await newAppointment.save()
        res.send(newAppointment)
    } catch (error) {
        
    }
}

const UpdateAppointment = async (req, res) => {
    try {
       let appointmentId = parseInt(req.params.id)
       let updateAppt = await Appointment.update(req.body, {
            where: {id: appointmentId},
            returning: true
        })
        res.send({message: `Appointment ${appointmentId} has been updated.`})
        console.log(UpdateAppointment)
    } catch (error) {
        throw(error)
    }
}

// http://localhost:3001/appointments/1
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
    PostAppointment,
    UpdateAppointment,
    DeleteAppointment
}