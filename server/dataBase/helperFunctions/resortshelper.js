const client = require('../client')

// GET - all resorts
const getAllResorts = async() => {
    try {
        const { rows } = await client.query(
            `
            SELECT * FROM resorts;
            `
            )
            return rows
    } catch (error) {
        throw error
    }
}

 // GET - a single resort by id
const getResortById = async (id) => {
    try {
        const {
            row: [resort],
        } = await client.query(
        `
        SELECT * FROM resorts
        WHERE resorts.id = '${id}';
        `)
        return resort
    } catch (error) {
        throw error
    }

}

// GET - a resort by location
const getResortsByLocation = async (locationId) => {
    try {
        const {
            rows
        } = await client.query(
            `
            SELECT * FROM resorts
            WHERE "resortId" =${locationId};
            `
        )
        return rows
    } catch (error) {
        throw error
    }
}

module.exports = { getAllResorts, getResortById, getResortsByLocation }