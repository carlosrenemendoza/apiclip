'use strict'
const api = require('express').Router()
const path = require('path');
/**
 * Send Header Details, PO LINES & Documents in One Request
 */
const ListCCustomerController = '../../build/index.html';


// const CustomerForUserid = require('../../controllers/listCustomerForId')
const Schema = require('../../model')


module.exports = (()=>{
    api.get('/',(req,res)=>res.send({message : 'ADMIN_SERVICE_READY',status : 200, code : 200}))
    /**
     * POST_CREATE_PO
     * @param {req.body}
     * @method {POST}
     */



     api.get('/frontview', function(req, res){
      res.sendFile(path.join(__dirname, ListCCustomerController));
  });
   

    return api; 
})();