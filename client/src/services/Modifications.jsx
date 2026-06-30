const getExteriorModifications = async () => {
  const response = await fetch('/api/cars/exterior')
  console.log(response)
  return response.json()
}

const getInteriorModifications = async () => {
  const response = await fetch('/api/cars/interior')
  console.log(response)
  return response.json()
}

const getRoofModifications = async () => {
  const response = await fetch('/api/cars/roof')
  console.log(response)
  return response.json()
}

const getWheelsModifications = async () => {
  const response = await fetch('/api/cars/wheels')
  console.log(response)
  return response.json()
}

const ModificationsAPI = {
  getExteriorModifications,
  getInteriorModifications,
  getRoofModifications,
  getWheelsModifications
}

export default ModificationsAPI