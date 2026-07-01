import React from 'react'
import Customize from '../components/Customize.jsx'
import { useState } from 'react'
import CarsAPI from '../services/CarsAPI.jsx'
import { ValidateCar, RenderErrors } from '../utilities/Validation.jsx'
import '../App.css'
import '../css/CreateCar.css'

const CreateCar = () => {

    const [car, setCar] = React.useState({id: 0, convertible: "", name: "", exterior: "", interior: "", roof: "", wheels: "", price: "60000"})
    const [errors, setErrors] = useState([])

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setCar({ ...car, [name]: value })
    }

    const handleCreate = () => {
        const validationErrors = ValidateCar(car)
        if (validationErrors.length > 0) {
            setErrors(validationErrors)
            return
        }
        setErrors([])
        CarsAPI.createCar(car)
    }

    return (
        <div className="create-car-container">
            <div className="create-car-header">
            <label htmlFor="convertible">
                 <input type="checkbox" id="convertible" name="convertible" onChange={(e) => setCar({ ...car, convertible: e.target.checked ? "True" : "False" })}/>
            Convertible 
            </label>
            <Customize car={car} setCar={setCar} />
             <div className="create-car-name">   
                <label>
                    Car Name:
                    <input type="text" id="name" name="name" placeholder = "My New Car" value={car.name} onChange={handleInputChange} />
                </label>
                <button onClick={handleCreate}>Create Car</button>
                {RenderErrors(errors)}
            </div>
            </div>
            <div className="create-car-price">
                <label>
                   💰
                </label>
                <span>${car.price}</span>
            </div>
        </div>
    )
}

export default CreateCar