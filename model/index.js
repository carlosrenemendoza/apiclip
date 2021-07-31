const Joi = require('joi');


const schemaImportaciones = {
    doDta: Joi.number().required(),
    pedido: Joi.string().required().allow(null).allow(""),
    observacionesNombreProyecto: Joi.string().required().allow(null).allow(""),
    tercero: Joi.string().required().allow(null).allow(""),
    // razonSocial: Joi.string().required().allow(null).allow(""),
    // aduanaDeclaracion: Joi.string().required().allow(null).allow(""),
    // aduanaDeclaracionCodigo: Joi.string().required().allow(null).allow(""),
    // LugarIngresoMcia: Joi.string().required().allow(null).allow(""),
    // documentoTransporte: Joi.string().required().allow(null).allow(""),
    // aerolineaNaviera: Joi.string().required().allow(null).allow(""),
    // tipoCarga: Joi.string().required().allow(null).allow(""),
    // viaNombre: Joi.string().required().allow(null).allow(""),
    // dosId: Joi.string().required().allow(null).allow(""),
    // fechaInstrucionCliente: Joi.string().required().allow(null).allow(""),
    // fechaGreenLight: Joi.string().required().allow(null).allow(""),
    // fechaEstimadaArribo: Joi.string().required().allow(null).allow(""),
    // manifiestoCargaFecha: Joi.string().required().allow(null).allow(""),
    // fechaLiberacionDocTransporte: Joi.string().required().allow(null).allow(""),
    // fechaUbicacionDeposito: Joi.string().required().allow(null).allow(""),
    // fechaInicioReconocimiento: Joi.string().required().allow(null).allow(""),
    // fechaFinalizacionReconocimiento: Joi.string().required().allow(null).allow(""),
    // fechaEntregaTransportador: Joi.string().required().allow(null).allow(""),
    // fechaDespacho: Joi.string().required().allow(null).allow(""),
    // fechaFacturacion: Joi.string().required().allow(null).allow(""),
    // fechaAceptacionSolicitudDta: Joi.string().required().allow(null).allow(""),
    // numeroAutorizacionInspeccionDta: Joi.string().required().allow(null).allow(""),
    // fechaAutorizacionInspeccionDta: Joi.string().required().allow(null).allow(""),
    // fechaSalidaDta: Joi.string().required().allow(null).allow(""),
    // fechaFinalizacionDta: Joi.string().required().allow(null).allow(""),
    // observaciones_generales: Joi.string().required().allow(null).allow(""),
    // tiposCargaAlfabetico: Joi.string().optional().allow(null).allow(""),
    // NúmeroDeItems: Joi.string().optional().allow(null).allow(""),
    // fechaClienteRequiereOrden: Joi.string().optional().allow(null).allow(""),
    // fechaAceptación: Joi.string().optional().allow(null).allow(""),
    // fechaRadicaciónFactura: Joi.string().optional().allow(null).allow(""),
    // fechaEntregaMercancia: Joi.string().optional().allow(null).allow(""),
    // fechaDevoluciónVacio: Joi.string().optional().allow(null).allow(""),
    // PuertoEmbarque: Joi.string().optional().allow(null).allow(""),
    // PuertoLlegada:Joi.string().optional().allow(null).allow(""),
    // declaracion: Joi.object().required().allow(null).allow(""),
    // remision: Joi.object().required().allow(null).allow("")
}


const schemaUser = Joi
   .object()
   .keys({
     data: Joi
       .object()
       .keys({
        Name: Joi.string().required().allow(null).allow(""),
        LastName: Joi.string().required().allow(null).allow(""),
        Email: Joi.string().required().allow(null).allow(""),
        Password: Joi.string().required().allow(null).allow(""),
        RoleId: Joi.number().required().allow(null).allow(""),
        Position: Joi.string().optional().allow(null).allow(""),
        Telephone: Joi.string().optional().allow(null).allow(""),
       })
       .required(),
       items: Joi
       .array().allow(null).allow("")
       .required(),
       report: Joi.object().optional().allow(null).allow(""),
       documents: Joi.array().optional().allow(null).allow(""),
   })

   const schemaCustomer = {
    CustomerId: Joi.number().optional(),
    CustomerName: Joi.string().required(),
    Telephone: Joi.string().optional().allow(null).allow(""),
    NIT: Joi.string().required(),
    Country: Joi.string().optional().allow(null).allow(""),
    // CustomerCode: Joi.string().allow(null).allow(""),
    Avatar: Joi.string().optional().allow(null).allow(""),
    CountryName: Joi.string().optional().allow(null).allow(""),
    userIds:Joi.string().optional().allow(null).allow(""),
   }
   const schemaCorreo = {
    correo: Joi.string().required(),
   }

   let objeto = Joi.object().keys({
    Nombre: Joi.string().required(),
    Apellido: Joi.string().required(),
    Posicion: Joi.string().optional().allow(null).allow(""),
    Telefono: Joi.number().optional().allow(null).allow(""),
    Email: Joi.string().required(),
   })

   const schemaContact = Joi
   .object()
   .keys({
    CustomerId:Joi.number().required(),
    contact:Joi.array().items(objeto).required(),
   })

   const schemaUserupdate = Joi
   .object()
   .keys({
    dataUser: Joi
       .object()
       .keys({
        Name: Joi.string().required(),
        LastName: Joi.string().required(),
        Email: Joi.string().required(),
        Password: Joi.string().optional().allow(null).allow(""),
        RoleId: Joi.number().required(),
        Rol: Joi.string().optional().allow(null).allow(""),
        UserId: Joi.number().required(),
        Position: Joi.string().optional().allow(null).allow(""),
        Telephone: Joi.string().optional().allow(null).allow(""),
       })
       .required(),
       itemsCUstomer: Joi
       .array().allow(null).allow("")
       .required(),
       report: Joi.object().optional().allow(null).allow(""),
       document: Joi.array().optional().allow(null).allow(""),
   })


exports.validateUser = (req,res,next)=>{
    const {body} = req
    Joi.validate(body, schemaUser,  (err, value) =>{
        if(err){
            console.log(err.message);
            return res.status(404).send({
                data:{
                    success : false,
                    message : err.message,
                    code : 404
                }
            })
        } 
        next();
    });
}

exports.validateCustomer = (req,res,next)=>{
    const {body} = req
    console.log(".....-->",body);
    Joi.validate(body, schemaCustomer,  (err, value) =>{
        if(err){
            console.log(err.message);
            return res.status(404).send({
                data:{
                    success : false,
                    message : err.message,
                    code : 404
                }
            })
        } 
        next();
    });
}
exports.validateCorreo = (req,res,next)=>{
    const {body} = req
    console.log(".....-->",body);
    Joi.validate(body, schemaCorreo,  (err, value) =>{
        if(err){
            console.log(err.message);
            return res.status(404).send({
                data:{
                    success : false,
                    message : err.message,
                    code : 404
                }
            })
        } 
        next();
    });
}

exports.validateContact = (req,res,next)=>{
    const {body} = req
    console.log(".....-->",body);
    Joi.validate(body, schemaContact,  (err, value) =>{
        if(err){
            console.log(err.message);
            return res.status(404).send({
                data:{
                    success : false,
                    message : err.message,
                    code : 404
                }
            })
        } 
        next();
    });
}

exports.validateputCustomer = (req,res,next)=>{
    const {body} = req
    console.log(".....-->",body);
    Joi.validate(body, schemaUserupdate,  (err, value) =>{
        if(err){
            console.log(err.message);
            return res.status(404).send({
                data:{
                    success : false,
                    message : err.message,
                    code : 404
                }
            })
        } 
        next();
    });
}

