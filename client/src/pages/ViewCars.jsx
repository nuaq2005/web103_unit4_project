import React from 'react'
import Car from '../components/Car.jsx'
import { useState, useEffect } from 'react'
import CarsAPI from '../services/CarsAPI'
import '../App.css'
const ViewCars = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        const fetchCars = async () => {
            const cars = await CarsAPI.getAllCars()
            setCars(cars)
        }
        fetchCars()
    }, [])

    return (
        <div className='view-cars'>
            {cars.length > 0 ? (
                cars.map((car) => (
                    <Car 
                    key={car.id} 
                    id={car.id}
                    name={car.name}
                    convertible={car.convertible}
                    exterior={car.exterior}
                    interior={car.interior}
                    wheels={car.wheels}
                    roof={car.roof}
                    price={car.price}
                />
            ))
        ) : (
            <p>No cars available</p>
        )}
        </div>
    )
}

export default ViewCars