import express from 'express'
import CarsController from '../controllers/cars.js'

const router = express.Router()

router.get('/', CarsController.getCars)

router.get('/exterior', CarsController.getExteriorModifications)

router.get('/interior', CarsController.getInteriorModifications)

router.get('/roof', CarsController.getRoofModifications)

router.get('/wheels', CarsController.getWheelsModifications)

router.get('/:carId', CarsController.getCarById)

router.post('/', CarsController.createCar)

router.patch('/:id', CarsController.modifyCar)

router.delete('/:id', CarsController.deleteCar)

export default router
