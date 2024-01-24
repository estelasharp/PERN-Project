const express = require('express')
const router = express.Router()
const { getAllResorts, getResortById } = require('../dataBase/helperFunctions/resortshelper')
const { getMapByResort } = require('../dataBase/helperFunctions/mapshelper')

//GET - /api/resorts - get all resorts 
router.get('/', async (req, res, next) => {
    try {
        const resorts = await getAllResorts()
        res.send(resorts)
    } catch (error) {
        next(error)
    }
})

//GET - /api/resorts/:id - get a single resort by id
router.get('/:id', async (req, res, next) => {
    try {
        const resort = await getResortById(req.params.id)
        resort.maps = await getMapByResort(req.params.id)
        res.send(resort)
    } catch (error) {
        next(error)
    }
})




module.exports = router