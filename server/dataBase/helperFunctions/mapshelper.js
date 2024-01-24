const client = require('../client')

// GET - all maps
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

// GET - a single map by id
const getMapById = async (id) => {
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

// GET - map by resort
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

// GET - maps by location
const getMapsByLocation = async (locationId) => {
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



module.exports = { getAllMaps, getMapById, getMapByResort, getMapsByLocation }