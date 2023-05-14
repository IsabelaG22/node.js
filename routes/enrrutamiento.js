
const rutasCRUD = require ('../controller/mascotas')
const express = require ('express')
const router = express.Router()

router.get('/mascotas',rutasCRUD .listaMascota);
router.get('/formulario',rutasCRUD .formNuevaMascota);
router.post('/registrar',rutasCRUD .nuevaMascota);
router.get("/eliminarM/:id",rutasCRUD.eliminarMascota);


module.exports=router