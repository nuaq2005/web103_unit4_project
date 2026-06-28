import {pool} from '../config/database.js'

const getCars = async (req, res) => {
    try{
        const result = await pool.query(
      'SELECT * FROM cars ORDER BY id'
    )
    res.status(200).json(result.rows)
    } catch (err){
        res.status(500).json(err)
    }
}

const getCarById = async (req, res) => {
    try {
        const selectQuery = `
        SELECT name, exterior, interior, roof, wheels, price
        FROM cars
        WHERE id=$1
        `
        const carId = req.params.carId
        const results = await pool.query(selectQuery, [carId])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json( { error: error.message} )
    }
}

const createCar = async (req, res) => {
    const {name, exterior, interior, roof, wheels, price} = req.body
    try{
        const results = await pool.query(`
            INSERT INTO cars (name, exterior, interior, roof, wheels, price)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *`,
        [name,exterior, interior, roof, wheels, price])
        res.status(201).json(results.rows[0])
    } catch (err){
        res.status(409).json({error: error.message});
    }
}


const modifyCar = async (req, res) => {
    try{
        const id = parseInt(req.params.id)
        const {name, exterior, interior, roof, wheels, price} = req.body
        const results = await pool.query(`
            UPDATE cars SET name = $1, exterior = $2, interior = $3, roof = $4, wheels = $5, price = $6  WHERE id = $7`,
            [name, exterior, interior, roof, wheels, price, id]
        )
        res.status(200).json(results.rows[0])
    } catch (err){
        res.status(409).json( { error: error.message } )
    }
}

const deleteCar = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query('DELETE FROM cars WHERE id = $1', [id])
        res.status(200).json(results.rows[0])
    } catch (err){
        res.status(409).json( { error: error.message } )
    }
} 

export default{
    getCars,
    getCarById,
    createCar,
    modifyCar,
    deleteCar
}