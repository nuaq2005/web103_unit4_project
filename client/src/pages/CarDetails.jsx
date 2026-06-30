import { useParams } from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import CarsAPI from '../services/CarsAPI'
import '../App.css'
import '../css/CarDetails.css'


const CarDetails = ({data}) => {

    const {id} = useParams()
    const [car, setCar] = useState({id: 0, name: "", exterior: "", interior: "", roof: "", wheels: "", price: ""})

    useEffect(() => {
        const fetchCarbyId = async () => {
            try {
                const response = await fetch(`/api/cars/${id}`)
                const data = await response.json()
                setCar(data)
            } catch (error) {
                console.error('Error fetching car details:', error)
            }
        }

        fetchCarbyId()
    }, [id])

    return (
        <div>
            <article className = "car-full-details">
                <header>
                    <h2> {car.name} </h2>
                </header>
                <div className= "details-content">
                    <div className= "car-price">💰 ${car.price}</div>
                    <div className= "car-selection">
                        <div className= "car-selection-overlay">
                            Exterior: {car.exterior}
                        </div>
                    </div>
                    <div className= "car-selection">
                        <div className= "car-selection-overlay">
                            Interior: {car.interior}
                        </div>
                    </div>
                    <div className= "car-modify">
                        <a href={`/edit/${id}`} role="button">Edit</a>
                        <a href={`/`} role="button">Delete</a>
                    </div>
                    <div className= "car-selection">
                        <div className= "car-selection-overlay">
                            Roof: {car.roof}
                        </div>
                    </div>
                    <div className= "car-selection">
                        <div className= "car-selection-overlay">
                            Wheels: {car.wheels}
                        </div>
                    </div>
                </div>
            </article>

        </div>
    )
}

export default CarDetails