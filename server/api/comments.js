const express = require('express')
const router = express.Router()
const { getCommentsByMap, createComment, updateComment, deleteComment } = require('../dataBase/helperFunctions/commentshelper')

//GET - /api/maps/:mapId - get comments by map 
router.get('/:mapId', async (req, res, next) => {
    try {
        const comments = await getCommentsByMap(req.params.mapId)
        res.send(comments)
    } catch (error) {
        next(error)
    }
})

//POST - /api/comments - create new comment
router.post('/', async (req, res, next) => {
    try {
        // include title, body (text), date, mapid, resortid, in req.body 
        const { title, body, date, mapId, resortId, locationId } = req.body

        const comment = await createComment({ title, body, date, mapId, resortId, locationId })
        res.send(comment)
    } catch (error) {
        next(error)
    }
})


//PUT - /api/comments/:id
router.put('/:id', async (req, res, next) => {
    try {
        const comment = await updateComment(req.params.id, req.body)
        res.send(comment)
    } catch (error) {
        next(error)
    }
})


//DELETE - /api/comments/:id - 
router.delete('/:id', async (req, res, next) => {
    try {
        const comment = await deleteComment(req.params.id)
        res.send(comment)
    } catch (error) {
        next(error)
    }
})

module.exports = router