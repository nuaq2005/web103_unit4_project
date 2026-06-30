import React from 'react'

const calcPrice = (car, exteriorOptions, interiorOptions, roofOptions, wheelsOptions) => {
    const BASE_PRICE = 60000
    const find = (list, name) => list.find(o => o.name === name)?.price || 0

    return BASE_PRICE
        + find(exteriorOptions, car.exterior)
        + find(interiorOptions, car.interior)
        + find(roofOptions, car.roof)
        + find(wheelsOptions, car.wheels)
}

export default calcPrice