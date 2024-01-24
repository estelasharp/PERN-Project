const client = require('../client')

// GET - all locations
const getAllLocations = async() => {
    try {
        const { rows } = await client.query(
            `
            SELECT * FROM locations;
            `
            )
            return rows
    } catch (error) {
        throw error
    }
}

 // GET - a single resort by id
const getLocationById = async(id) => {
    try {
        const {
            row: [location],
        } = await client.query(
        `
        SELECT * FROM locations
        WHERE locations.id = '${id}';
        `)
        return location
    } catch (error) {
        throw error
    }

}


module.exports = { getAllLocations, getLocationById }