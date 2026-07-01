import './dotenv.js'
import { pool } from './database.js'

const createCarsTable = async () => {
    try{
        await pool.query(`
            DROP TABLE IF EXISTS cars;
            DROP TABLE IF EXISTS exteriors;
            DROP TABLE IF EXISTS interiors;
            DROP TABLE IF EXISTS wheels;
            DROP TABLE IF EXISTS roofs;

            CREATE TABLE exteriors (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                price INTEGER NOT NULL
            );

            CREATE TABLE interiors (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                price INTEGER NOT NULL
            );

            CREATE TABLE wheels (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                price INTEGER NOT NULL
            );

            CREATE TABLE roofs (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                price INTEGER NOT NULL
            );
  
            CREATE TABLE cars(
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                convertible VARCHAR(10) NOT NULL,
                exterior TEXT NOT NULL,
                interior VARCHAR(255) NOT NULL,
                roof VARCHAR(100) NOT NULL,
                wheels VARCHAR(50) NOT NULL,
                price VARCHAR(20) NOT NULL
                );
            `)
            console.log("Tables created!")
    } catch (err){
        console.log(err)
    }
}
    
const seedCars = async () => {
    await createCarsTable()

    try {

    await pool.query(`
        INSERT INTO exteriors (name, price)
        VALUES
        ('Silver Flare Metallic', 500),
        ('Arctic White', 500),
        ('Red Mist Metallic Tintcoat', 2000),
        ('Hypersonic Gray', 500),
        ('Amplify Orange Tint', 2000),
        ('Caffeine Metallic', 750),
        ('Black', 500),
        ('Torch Red', 500),
        ('Accelerate Yellow', 2000),
        ('Elkhart Lake Blue Metallic', 1000);
        `)
    await pool.query (`
       INSERT INTO interiors (name, price)
        VALUES
        ('Adrenaline Red', 1000),
        ('Habanero', 2000),
        ('Adrenaline Red Dipped', 1000),
        ('Artemis', 1000),
        ('Jet Black with Gray Seats', 2500),
        ('Jet Black with Red Stitching', 1500),
        ('Jet Black', 1000),
        ('Natural Dipped', 1000),
        ('Natural', 2000),
        ('Sky Cool Gray', 1000),
        ('Two Tone Blue', 1200),
        ('Two Tone Red and Black', 2000); 
        `)
    await pool.query (`
        INSERT INTO wheels (name, price)
        VALUES
        ('Bronze Forged', 1200),
        ('Carbon Flash', 500),
        ('Carbon Flash with Accelerate Yellow Caliper', 1150),
        ('Edge Blue', 600),
        ('Satin Graphite with Red Stripe', 750),
        ('Sterling Silver', 500),
        ('Visible Carbon', 600);
        `)
     await pool.query(`
        INSERT INTO roofs (name, price)
        VALUES
        ('Body Color', 500),
        ('Carbon Flash Nacelles', 1000),
        ('Visible Carbon Fiber', 1000),
        ('Dual Roof', 2000),
        ('Transparent Roof', 1500);
        `)
    await pool.query(`
        INSERT INTO cars
        (name, convertible, exterior, interior, roof, wheels, price)
        VALUES
        (
        'Sport Edition',
        'False',
        'Red',
        'Black Leather',
        'Panoramic Glass',
        '19-inch Alloy',
        42000
        ),
        (
        'Luxury Cruiser',
        'True',
        'Black',
        'Tan Leather',
        'Sunroof',
        '20-inch Chrome',
        51000
        ),
        (
        'Eco Drive',
        'False',
        'White',
        'Gray Fabric',
        'Standard',
        '17-inch Aero',
        33000
        );
    `)

    console.log("Table seeded!")
    }catch (err){
        console.log(err)
    } finally {
        await pool.end()
    }
}

seedCars()
