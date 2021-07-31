'use strict';
const environment = require('../config/environment')
const { Client } = require('pg');

exports._query = (query)=>{
    return new Promise((resolve,rejected)=>{
        const client = new Client({
            host: environment.DB_HOST,
            port: environment.DB_PORT,
            user: environment.DB_USER,
            password: environment.DB_PASSWORD,
            database : environment.DB_NAME
        })
        // console.log("--->",environment.DB_HOST);
        
        client.connect()
        client.query(query,(err,resp)=>{
            client.end()
            if(err) rejected(err)
            else resolve(resp)
        })
    })
}