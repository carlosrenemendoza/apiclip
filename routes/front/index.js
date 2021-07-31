'use strict'
const api = require('express').Router()
/**
 * Send Header Details, PO LINES & Documents in One Request
 */
const ListCCustomerController = require('../../controllers/front/view/build/index.html')


// const CustomerForUserid = require('../../controllers/listCustomerForId')
const Schema = require('../../model')


module.exports = (()=>{
    api.get('/',(req,res)=>res.send({message : 'ADMIN_SERVICE_READY',status : 200, code : 200}))
    /**
     * POST_CREATE_PO
     * @param {req.body}
     * @method {POST}
     */



     app.get('/frontview', function(req, res){
      var options = {
          root: path.join(__dirname)
      };
        
      var fileName = ListCCustomerController;
      res.sendFile(fileName, options, function (err) {
          if (err) {
              next(err);
          } else {
              console.log('Sent:', fileName);
          }
      });
  });
   

    return api; 
})();