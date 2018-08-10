const axios = require('axios')

module.exports={

    getClothes: (req, res)=> {
        const db = req.app.get('db');
        db.all_clothes().then(response=>{
            res.status(200).json(response);
        })
    },

    getCrystals: (req, res)=> {
        const db = req.app.get('db');
        db.all_crystals().then(response=>{
            res.status(200).json(response);
        })
    },

    getIncense: (req, res)=> {
        const db = req.app.get('db');
        db.all_incense().then(response=>{
            res.status(200).json(response);
        })
    },

    getTarot: (req, res)=> {
        const db = req.app.get('db');
        db.all_tarot().then(response=>{
            res.status(200).json(response);
        })
    },

    getJewelry: (req, res)=> {
        const db = req.app.get('db');
        db.all_jewelry().then(response=>{
            res.status(200).json(response);
        })
    },

    getOther: (req, res)=> {
        const db = req.app.get('db');
        db.all_other().then(response=>{
            res.status(200).json(response);
        })
    },

}