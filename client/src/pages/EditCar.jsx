import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CarsAPI from '../services/CarsAPI'
import Customize from '../components/Customize.jsx'
import { ValidateCar, RenderErrors } from '../utilities/Validation.jsx'
import convertibleImg from "../assets/convertible.png"
import carImg from "../assets/car.png"
import '../App.css'
import '../css/CarDetails.css'

const EditCar = () => {

    const {id} = useParams()
    const [car, setCar] = useState({id: 0, convertible: "", name: "", exterior: "", interior: "", roof: "", wheels: "", price: ""})
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const fetchCarById = async () => {  
            const response = await fetch(`/api/cars/${id}`)
            const data = await response.json()
            setCar(data)
        }
        fetchCarById()
    }, [id])

    const handleUpdate = () => {
        const validationErrors = ValidateCar(car)
        if (validationErrors.length > 0) {
            setErrors(validationErrors)
            return
        }
        setErrors([])
        CarsAPI.updateCar(id, car)
    }

    return (
        <div>
            <article className = "car-full-details">
                <header>
                    <img src={car.convertible === "True" ? convertibleImg : carImg} alt={car.name} />
                    <h2> {car.name} </h2>
                    <Customize car={car} setCar={setCar} />
                </header>
                <div className= "details-content">
                    <div className= "car-price">💰 ${car.price}</div>
                    <div className= "car-selection">Exterior: {car.exterior}</div>
                    <div className= "car-selection">Interior: {car.interior}</div>
                    <div className= "car-modify">
                        {RenderErrors(errors)}
                        <input className='submitButton' type='submit' value='Submit' onClick={handleUpdate} />
                        <button className='deleteButton' onClick={() => CarsAPI.deleteCar(id)}>Delete</button>
                    </div>
                    <div className= "car-selection">Roof: {car.roof}</div>
                    <div className= "car-selection">Wheels: {car.wheels}</div>
                </div>
            </article>

        </div>
    )
}

export default EditCar