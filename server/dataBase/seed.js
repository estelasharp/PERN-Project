//bring in connections to local database
//comments are based on maps
const client = require('./client')

const { locations, resorts, maps } = require('./seedData.js')

//drop tables for data cleanliness
const dropTables = async () => {
    try {
        console.log("dropping tables...")
        await client.query(`
        DROP TABLE IF EXISTS comments;
        DROP TABLE IF EXISTS maps;
        DROP TABLE IF EXISTS resorts;
        DROP TABLE IF EXISTS locations;
        `)
        console.log("tables DROPPED!")
    } catch (error) {
        console.log("Error dropping tables: ", error)
    }
}

//create tables - to give data a home

const createTables = async () => {
    try { 
    console.log("building tables...")
    await client.query(
        `
    CREATE TABLE locations (
        id SERIAL PRIMARY KEY,
        location varchar(150) UNIQUE NOT NULL
    );
    CREATE TABLE resorts (
        id SERIAL PRIMARY KEY,
        name varchar(150) NOT NULL,
        city varchar(150) NOT NULL,
        "locationId" INTEGER REFERENCES locations("id")
    );
    CREATE TABLE maps (
        id SERIAL PRIMARY KEY,
        title varchar(150),
        "resortId" INTEGER REFERENCES resorts("id"),
        "locationId" INTEGER REFERENCES locations("id"),
        image TEXT NOT NULL
    );
    CREATE TABLE comments (
        id SERIAL PRIMARY KEY,
        title varchar(50),
        body TEXT,
        date TIMESTAMP NOT NULL,
        "mapId" INTEGER REFERENCES maps("id"),
        "resortId" INTEGER REFERENCES resorts("id"),
        "locationId" INTEGER REFERENCES locations("id")
    );
    `)

    console.log("Tables Built!")
    } catch (error) {
        console.error(error)
    }
}    


//populate tables - to have data later

const createInitialLocations = async () => {
    try {
        for (const location of locations) {
            console.log(location)
            const {
                rows: [locationName]
        } = await client.query(
            `
             INSERT INTO locations(location)
             VALUES($1)
             RETURNING *;
            `, [location]
        )
        console.log("locations CREATED!")
        }
    } catch (error) {
        throw error
    }
}

const createInitialResorts = async () => {
    try {
        for (const resort of resorts) {
            console.log(resort)
            const {
                rows: [resortName]
            } = await client.query(
                `
                INSERT INTO resorts(name, city, "locationId")
                VALUES($1, $2, $3)
                RETURNING *;
                `, [resort.name, resort.city, resort.locationId]
            )
            console.log("resorts CREATED!")
        }
    } catch(error) {
        throw error
    }
}

const createInitialMaps = async () => {
    try {
        for (const map of maps) {
            console.log(map)
            const {
                rows: [mapTitle]
            } = await client.query(
                `
                INSERT INTO maps(title, "resortId", "locationId", image)
                VALUES($1, $2, $3, $4)
                RETURNING *;
                `, [map.title, map.resortId, map.locationId, map.image]
            )
            console.log("maps CREATED!")
        }
    } catch(error) {
        throw error
    }
}

//call all my functions
const buildDb = async () => {
    try {
        //connect to local database
        client.connect()

        //run functions
        await dropTables()
        await createTables()

        await createInitialLocations()
        await createInitialResorts()
        await createInitialMaps()

    } catch (error) {
        console.error(error)
        //finally will always run whether the catch triggers or not
    } finally {
        //closer connection to local database
        client.end()
    }
}

buildDb()