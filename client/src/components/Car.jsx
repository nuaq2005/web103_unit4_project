import '../css/Car.css'
import convertibleImg from "../assets/convertible.png"
import carImg from "../assets/car.png"
import React from 'react'
import {Link} from 'react-router-dom'

const Car = ({ id, name, convertible, exterior, interior, wheels, roof, price }) => {
    return (
        <article>
            <header>
                <img src={convertible === "True" ? convertibleImg : carImg} alt={name} />
                <h3>{name}</h3>
            </header>

            <div className="car-card">
                <div className="car-summary">
                <p>
                    <strong>Exterior:</strong> {exterior}
                </p>
                <p>
                    <strong>Roof:</strong> {roof}
                </p>
                </div>

                <div className="car-summary">
                <p>
                    <strong>Wheels:</strong> {wheels}
                </p>
                <p>
                    <strong>Interior:</strong> {interior}
                </p>
                </div>

                <div className="car-price">
                <p>💰 ${price.toLocaleString()}</p>
                <a href={`/customcars/${id}`} role='button'>View Cars</a>
                </div>
            </div> 
        </article>
    )
}

export default Car