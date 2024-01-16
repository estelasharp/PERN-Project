//pullin in conection to local database
const client = require('./client')

//drop tables for data cleanliness
const dropTables = async () => {
    try {
        console.log("Starting to drop tables...")
        await client.query(`
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS resorts;
        DROP TABLE IF EXISTS favorites;
        `)
        console.log("Tables Dropped!")
    } catch (error) {
        console.log("Error dropping tables: ", error)
    }
}

//create tables - to give data a home

const createTables = async () => {
    try { 
    console.log("building tables...")
    await client.query(`
    CREATE TABLES users (
        "userId" SERIAL PRIMARY KEY
        name varchar(40)
    );
    CREATE TABLES resorts (
        "resortId"
    );
    CREATE TABLES favorites (
        "favoritesId"
    );
    `)

    console.log("tables builts!")
    } catch (error) {
        console.error(error)
    }
}    


//populate tables - to have data later

//call all my functions
const buildDb = async () => {
    try {
        //connect to local database
        client.connect()

        //run functions
        await dropTables()
    } catch (error) {
        console.error(error)
        //finally will always run whether the catch triggers or not
    } finally {
        //closer connection to local database
        client.end()
    }
}

buildDb()