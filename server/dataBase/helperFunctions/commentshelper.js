const client = require('../dataBase/client')
const util = require('./util')


//get all comments from map
const getCommentsByMap = async() => {
    try {
        const { rows } = await client.query(
            `
            SELECT *
            FROM comments
            WHERE "mapId" = ${mapId};
            `)
            return rows 
    } catch (error) {
        throw error
    }
}

//create a comment
const createComment = async ({ title, body, date, mapId, resortId, locationId }) => {
    try {
        const {
            rows: [comment],
        } = await client.query(
            `
            INSERT INTO comments(title, body, date, "mapId", "resortId", "locationId")
            VALUES($1, $2, $3, $4, $5, $6)
            RETURNING *;
            `, [title, body, date, mapId, resortId, locationId]
        )
        return comment
    } catch (error) {
        throw error
    }
}

//update a comment
const updateComment = async(id, fields) => {
    try {
        const toUpdate = {}
        for (let column in fields) {
            if (fields[column] !== undefined) toUpdate[column] = fields[column]
        }
        let comment = {}

        if(util.dbFields(toUpdate).insert.length > 0) {
            const { rows } = await client.query(
                `
                UPDATE comments SET ${util.dbFields(toUpdate).insert}
                WHERE id =${id}
                RETURNING *;
                `, Object.values(toUpdate)
            )
            comment = rows[0]
        }
        return comment
    } catch(error) {
        throw error
    }

}


//delete a comment
const deleteComment = async (id) => {
    try {
        const {
            rows: [comment]
        } = await client.query(
            `
            DELETE FROM comments
            WHERE id = ${id}
            RETURNING *;
            `
        )
        return comment
    } catch (error) {
        throw error
    }

}





module.exports = { getCommentsByMap, createComment, updateComment, deleteComment }