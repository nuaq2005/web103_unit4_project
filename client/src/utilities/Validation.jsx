
const CONVERTIBLE_ONLY_ROOFS = ['Transparent Roof', 'Dual Roof']
export const ValidateCar = (car) => {
    const errors = []
 
    // Check all fields are filled
    if (!car.name?.trim()) errors.push('Car name is required.')
    if (!car.exterior) errors.push('Please select an exterior color.')
    if (!car.interior) errors.push('Please select an interior.')
    if (!car.roof) errors.push('Please select a roof option.')
    if (!car.wheels) errors.push('Please select wheels.')
 
    // Check convertible-only roof options
    if (car.roof && CONVERTIBLE_ONLY_ROOFS.includes(car.roof)) {
        if (car.convertible !== 'True') {
            errors.push(`"${car.roof}" is only available for convertible models.`)
        }
    }
 
    return errors 
}

export const RenderErrors = (errors) => {
    if (!errors.length) return null
    return (
        <div className="error-messages">
            {errors.map((error, index) => (
                <p key={index}>{error}</p>
            ))}
        </div>
    )
}
 