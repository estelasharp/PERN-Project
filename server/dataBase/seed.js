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
    console.log("Building Tables...")
    await client.query(`
    CREATE TABLE users (
        "userId" SERIAL PRIMARY KEY,
        "userName" varchar(40) NOT NULL,
        "firstName" varchar(40),
        "lastName" varchar(40),
        password varchar(40)
    );
    CREATE TABLE resorts (
        "resortId" SERIAL PRIMARY KEY,
        name varchar(100) NOT NULL,
        city varchar(100),
        state varchar(100)
    );
    CREATE TABLE favorites (
        "favoritesId" SERIAL PRIMARY KEY,
        "userId" INT,
        "resortId" INT
    );
    `)

    console.log("Tables Built!")
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
        await createTables()
    } catch (error) {
        console.error(error)
        //finally will always run whether the catch triggers or not
    } finally {
        //closer connection to local database
        client.end()
    }
}

buildDb()