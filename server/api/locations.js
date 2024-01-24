const express = require('express')
const router = express.Router()
const { getAllLocations, getLocationById } = require('../dataBase/helperFunctions/locationshelper')
const { getMapsByLocation } = require('../dataBase/helperFunctions/mapshelper')
const { getResortsByLocation } = require('../dataBase/helperFunctions/resortshelper')

//GET - /api/locations - get all locations 
router.get('/', async (req, res, next) => {
    try {
        const locations = await getAllLocations()
        res.send(locations)
    } catch (error) {
        next(error)
    }
})

//GET - /api/locations/:id - get a single location
router.get('/:id', async (req, res, next) => {
    try {
        const location = await getLocationById(req.params.id)
        location.maps = await getMapsByLocation(req.params.id)
        location.resorts = await getResortsByLocation(req.params.id)
        res.send(location)
    } catch (error) {
        next(error)
    }
})


module.exports = router