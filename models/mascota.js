const { default: mongoose } = require('mongoose')

const conexionMongoose = require('../config/conectionMongoose')


const SchemaMascota = new mongoose.Schema({
    _id: {
        type:Number,
        require: true,
        unique: true,
        min: 0,
        max:1000,
    },
    nombre:{
        type:String,
        required:true,
        default:'Sin nombre'
    },
    raza:{
        type:String,
        required:true
    },
    edad:{
        type:String,
        required:true
    }
});

const mascota = mongoose.model('Mascota', SchemaMascota);

module.exports=mascota;