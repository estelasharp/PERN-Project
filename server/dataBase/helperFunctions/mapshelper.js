const client = require('../client')

//get all maps
const getAllMaps = async () => {
    try {
        const { rows } = await client.query(
            `
            SELECT *
            FROM maps;
            `
        )
        return rows
    } catch (error) {
        throw error
    }
}

//get map by id
const getMapsById = async (id) => {
    try {
        const {
            row: [map],
        } = await client.query(
        `
        SELECT * FROM maps
        WHERE maps.id = '${id}';
        `)
        return map
    } catch (error) {
        throw error
    }

}

//get map by resort
const getMapByResort = async (resortId) => {
    try {
        const {
            rows
        } = await client.query(
            `
            SELECT * FROM maps
            WHERE "resortId" =${resortId};
            `
        )
        return rows
    } catch (error) {
        throw error
    }
}

//get map by location
const getMapByLocation = async (locationId) => {
    try {
        const {
            rows
        } = await client.query(
            `
            SELECT * FROM maps
            WHERE "locationId" =${locationId};
            `
        )
        return rows
    } catch (error) {
        throw error
    }
}



module.exports = { getAllMaps, getMapsById, getMapByResort, getMapByLocation }