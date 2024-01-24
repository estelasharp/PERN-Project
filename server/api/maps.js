const express = require('express')
const router = express.Router()
const { getAllMaps, getMapById, getMapByResort, getMapsByLocation } = require('../dataBase/helperFunctions/mapshelper')
const { getCommentsByMap } = require('../dataBase/helperFunctions/commentshelper')

//GET - /api/maps - get all maps 
router.get('/', async (req, res, next) => {
    try {
        const maps = await getAllMaps()
        res.send(maps)
    } catch (error) {
        next(error)
    }
})

//GET - /api/maps/:id - get a single map by id, get comments by map
router.get('/:id', async (req, res, next) => {
    try {
        const map = await getMapById(req.params.id)
        map.comments = await getCommentsByMap(req.params.id)
        res.send(map)
    } catch (error) {
        next(error)
    }
})


//GET - /api/maps/resorts/:id - get map by resort
router.get('/resort/:id', async (req, res, next) => {
    try {
        const map = await getMapByResort(req.params.id)
        res.send(map)
    } catch (error) {
        next(error)
    }
})

//GET  - /api/maps/locations/:id - get map by location
router.get('/location/:id', async (req, res, next) => {
    try {
        const map = await getMapsByLocation(req.params.id)
        res.send(map)
    } catch (error) {
        next(error)
    }
})


module.exports = router