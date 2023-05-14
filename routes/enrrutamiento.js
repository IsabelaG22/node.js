
const rutasCRUD = require ('../controller/mascotas')
const express = require ('express')
const router = express.Router()

router.get('/mascotas',rutasCRUD .listaMascota);
router.get('/formulario',rutasCRUD .formNuevaMascota);
router.post('/registrar',rutasCRUD .nuevaMascota);
router.get("/eliminarM/:id",rutasCRUD.eliminarMascota);
router.post('/editar',rutasCRUD.actualizarMascota)


module.exports=router