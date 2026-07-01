import React from 'react'

const getAllCars = async () => {
  const response = await fetch('/api/cars')
  console.log(response)
  return response.json()
}

const getCar = async (id) => {
  const response = await fetch(`/api/cars/${id}`)
  console.log(response)
  return response.json()
}

const createCar = async (carData) => {
    const response = await fetch('/api/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carData)
    })

    if (!response.ok) {
        throw new Error('Failed to create car')
    }

    window.location.href = '/'
    return response.json()
}

const updateCar = async (id, carData) => {
    try{ 
        const response = await fetch(`/api/cars/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carData)
    })
    window.location.href = '/customcars'
    return response.json()
    } catch (error) {
        console.error('Error updating car:', error)
    }
}

const deleteCar = async (id) => {
    const response = await fetch(`/api/cars/${id}`, {
        method: 'DELETE'
    })
    console.log("Delete response:", response)
    window.location.href = '/customcars'
    return response.json()
}

const CarsAPI = {
  getAllCars,
  getCar,
  createCar,
  updateCar,
  deleteCar
}

export default CarsAPI