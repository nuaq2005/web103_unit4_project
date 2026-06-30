import React from 'react'
import Customize from '../components/Customize.jsx'
import { useState } from 'react'
import CarsAPI from '../services/CarsAPI.jsx'
import '../App.css'
import '../css/CreateCar.css'

const CreateCar = () => {

    const [car, setCar] = React.useState({id: 0, name: "", exterior: "", interior: "", roof: "", wheels: "", price: "60000"})

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setCar({ ...car, [name]: value })
    }

    // const createCar = async () => {
    //     try {
    //         const response = await fetch('/api/cars', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(car),
    //         })
    //         if (response.ok) {
    //             const data = await response.json()
    //             console.log('Car created successfully:', data)
    //         } else {
    //             console.error('Failed to create car:', response.statusText)
    //         }
    //     } catch (error) {
    //         console.error('Error creating car:', error)
    //     }
    // }

    return (
        <div className="create-car-container">
            <Customize car={car} setCar={setCar} />
            <div className="create-car-price">
                <label>
                    Price: 💰$ {car.price}
                </label>
            </div>
            <div className="create-car-name">   
                <label>
                    Car Name:
                    <input type="text" id="name" name="name" placeholder = "My New Car" value={car.name} onChange={handleInputChange} />
                </label>
                <button onClick={() => CarsAPI.createCar(car)}>Create Car</button>
            </div>
        </div>
    )
}

export default CreateCar