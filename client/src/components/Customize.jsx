import react from 'react'
import { useState, useEffect } from 'react'
import Modifications from '../services/Modifications.jsx'
import OptionModal from '../components/OptionModal.jsx'
import calcPrice from '../utilities/calcprice.jsx'
import '../App.css'

const Customize = ({car, setCar}) => {

    const [exteriorOptions, setExteriorOptions] = useState([])
    const [interiorOptions, setInteriorOptions] = useState([])
    const [roofOptions, setRoofOptions] = useState([])
    const [wheelsOptions, setWheelsOptions] = useState([])
    const [activeOption, setActiveOption] = useState(null)

    useEffect(() => {
        const fetchModifications = async () => {
            const [exterior, interior, roof, wheels] = await Promise.all([
                Modifications.getExteriorModifications(),
                Modifications.getInteriorModifications(),
                Modifications.getRoofModifications(),
                Modifications.getWheelsModifications(),
            ])
            setExteriorOptions(exterior)
            setInteriorOptions(interior)
            setRoofOptions(roof)
            setWheelsOptions(wheels)
        }
        fetchModifications()
    }, [])

    return (
        <div>
            <div className= "create-modify-options">
                <div className= "modify-option">
                    <button onClick={() => setActiveOption('exterior')}>Exterior</button>
                    {activeOption === 'exterior' && (
                        <OptionModal
                            options={exteriorOptions}             // ✅ array from state
                            selectedOption={car.exterior}
                            onSelect={(option) => setCar({ ...car, exterior: option.name, price: calcPrice(car, exteriorOptions, interiorOptions, roofOptions, wheelsOptions) })}
                            onClose={() => setActiveOption(null)}
                        />
                    )}
                </div>
                <div className= "modify-option">
                    <button onClick={() => setActiveOption('interior')}>Interior</button>
                    {activeOption === 'interior' && (
                        <OptionModal
                            options={interiorOptions}             // ✅ array from state
                            selectedOption={car.interior}
                            onSelect={(option) => setCar({ ...car, interior: option.name, price: calcPrice(car, exteriorOptions, interiorOptions, roofOptions, wheelsOptions) })}
                            onClose={() => setActiveOption(null)}
                        />
                    )}
                </div>
                <div className= "modify-option">
                    <button onClick={() => setActiveOption('roof')}>Roof</button>
                    {activeOption === 'roof' && (
                        <OptionModal
                            options={roofOptions}             // ✅ array from state
                            selectedOption={car.roof}
                            onSelect={(option) => setCar({ ...car, roof: option.name, price: calcPrice(car, exteriorOptions, interiorOptions, roofOptions, wheelsOptions) })}
                            onClose={() => setActiveOption(null)}
                        />
                    )}
                </div>
                <div className= "modify-option">
                    <button onClick={() => setActiveOption('wheels')}>Wheels</button>
                    {activeOption === 'wheels' && (
                        <OptionModal
                            options={wheelsOptions}             // ✅ array from state
                            selectedOption={car.wheels}
                            onSelect={(option) => setCar({ ...car, wheels: option.name, price: calcPrice(car, exteriorOptions, interiorOptions, roofOptions, wheelsOptions) })}
                            onClose={() => setActiveOption(null)}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Customize