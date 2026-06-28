import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CarsAPI from '../services/CarsAPI'
import Modifications from '../services/Modifications.jsx'
import OptionModal from '../components/OptionModal.jsx'
import '../App.css'
import '../css/CarDetails.css'

const EditCar = () => {

    const {id} = useParams()
    const [car, setCar] = useState({id: 0, name: "", exterior: "", interior: "", roof: "", wheels: "", price: ""})
    const [activeOption, setActiveOption] = useState(null)

    useEffect(() => {
        const fetchCarById = async () => {  
            const response = await fetch(`/api/cars/${id}`)
            const data = await response.json()
            setCar(data)
        }
        fetchCarById()
    }, [id])
    
    
    return (
        <div>
            <article className = "car-full-details">
                <header>
                    <h2> {car.name} </h2>
                    <div className= "create-modify-options">
                        <div className= "modify-option">
                            <button onClick={() => setActiveOption('exterior')}>Exterior</button>
                            {activeOption === 'exterior' && (
                                <OptionModal
                                    options={Modifications.getExteriorModifications()}
                                    selectedOption={car.exterior}
                                    onSelect={(option) => setCar({ ...car, exterior: option })}
                                    onClose={() => setActiveOption(null)}
                                />
                            )}
                        </div>
                        <div className= "modify-option">
                            <button onClick={() => setActiveOption('interior')}>Interior</button>
                            {activeOption === 'interior' && (
                                <OptionModal
                                    options={Modifications.getInteriorModifications()}
                                    selectedOption={car.interior}
                                    onSelect={(option) => setCar({ ...car, interior: option })}
                                    onClose={() => setActiveOption(null)}
                                />
                            )}
                        </div>
                        <div className= "modify-option">
                            <button onClick={() => setActiveOption('roof')}>Roof</button>
                            {activeOption === 'roof' && (
                                <OptionModal
                                    options={Modifications.getRoofModifications()}
                                    selectedOption={car.roof}
                                    onSelect={(option) => setCar({ ...car, roof: option })}
                                    onClose={() => setActiveOption(null)}
                                />
                            )}
                        </div>
                        <div className= "modify-option">
                            <button onClick={() => setActiveOption('wheels')}>Wheels</button>
                            {activeOption === 'wheels' && (
                                <OptionModal
                                    options={Modifications.getWheelsModifications()}
                                    selectedOption={car.wheels}
                                    onSelect={(option) => setCar({ ...car, wheels: option })}
                                    onClose={() => setActiveOption(null)}
                                />
                            )}
                        </div>
                    </div>
                </header>
                <div className= "details-content">
                    <div className= "car-price">💰 ${car.price}</div>
                    <div className= "car-selection">Exterior: {car.exterior}</div>
                    <div className= "car-selection">Interior: {car.interior}</div>
                    <div className= "car-modify">
                        <input className='submitButton' type='submit' value='Submit' onClick={() => CarsAPI.updateCar(car)} />
                        <button className='deleteButton' onClick={() => CarsAPI.deleteCar(car.id)}>Delete</button>
                    </div>
                    <div className= "car-selection">Roof: {car.roof}</div>
                    <div className= "car-selection">Wheels: {car.wheels}</div>
                </div>
            </article>

        </div>
    )
}

export default EditCar