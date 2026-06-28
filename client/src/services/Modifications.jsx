const getExteriorModifications = async () => {
  const response = await fetch('/api/exterior')
  console.log(response)
  return response.json()
}

const getInteriorModifications = async () => {
  const response = await fetch('/api/interior')
  console.log(response)
  return response.json()
}

const getRoofModifications = async () => {
  const response = await fetch('/api/roof')
  console.log(response)
  return response.json()
}

const getWheelsModifications = async () => {
  const response = await fetch('/api/wheels')
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