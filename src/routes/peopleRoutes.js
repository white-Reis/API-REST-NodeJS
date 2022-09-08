import express from 'express'
import peopleController from '../controllers/peoplesControl.js'

const router = express.Router()

router
  .get('/api/v1/users', peopleController.listPeoples)
  .get('/api/v1/users/search/:name', peopleController.listPeopleForName)
  .get('/api/v1/users/:id', peopleController.listPeopleForId)
  .post('/api/v1/users', peopleController.createPeople)
  .put('/api/v1/users/:id', peopleController.attPeople)
  .delete('/api/v1/users/:id', peopleController.deletePeople)

export default router
