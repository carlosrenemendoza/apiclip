'use strict';
const api = require('express').Router();
// const GetCountryController = require('../controllers/country');



module.exports = (()=>{
    api.get('/',(req,res)=>res.send({
        message : 'server run',
        code : 200
    }));
    /**
     * catalog country
     */
    // api.get('/all/country',
    // GetCountryController.getCountry,
    // GetCountryController.arrayget
    // )
    // api.get('/all/module',
    // GetCountryController.getModule,
    // GetCountryController.arraygetModule
    // )


    

    return api;
})();