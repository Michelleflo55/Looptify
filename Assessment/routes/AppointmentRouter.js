const Router = require('express').Router()
const controller = require('../controllers/AppointmentController')

Router.get('/', controller.GetAppointments)
Router.get('/:id', controller.GetAppointment)
Router.post('/', controller.PostAppointment)
Router.put('/:id', controller.UpdateAppointment)
Router.delete('/:id', controller.DeleteAppointment)

module.exports = Router