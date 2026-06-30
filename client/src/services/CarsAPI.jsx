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
    return response.json()
    window.location.href = '/'
    if (!response.ok) {
        throw new Error('Failed to create car')
    }
}

const updateCar = async (id, carData) => {
    const response = await fetch(`/api/cars/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carData)
    })
    return response.json()
    if (!response.ok) {
        throw new Error('Failed to update car')
    } else {
        window.location.href = '/customcars'
    }
}

const deleteCar = async (id) => {
    const response = await fetch(`/api/cars/${id}`, {
        method: 'DELETE'
    })
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