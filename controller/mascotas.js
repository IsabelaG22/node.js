const mascota = require('../models/mascota');


exports.listaMascota = async (req, res) => {
    let listaMascotas = await mascota.find();
    res.render('listaMascotas', {
        "mascota": listaMascotas,
    })
};

exports.formNuevaMascota = (req, res) => {
    res.render('registrar')
};

exports.nuevaMascota = async (req, res) => {
    const nuevaMascota = new mascota({
        _id: req.body._id,
        nombre: req.body.nombreMascota,
        raza: req.body.razaMascota,
        edad: req.body.edadMascota,
    });
    nuevaMascota.save();

    res.redirect('/api/v1/mascotas')
};


exports.eliminarMascota = async (req, res) => {
    let id = req.params.id
    await mascota.findByIdAndDelete({ "_id": id });

    res.redirect("/api/v1/mascotas")
}


/*exports.actualizarMascota = async (req, res) => {
    const buscarId = await mascota.findByIdAndUpdate({_id : req.body._id});
    const update = await mascota.updateOne({
        nombre:body.nombreMascota,
        raza:body.razaMascota,
        edad:body.edadMascota,
    });
    console.log(buscarId)
    console.log(update)


    res.redirect("/api/v1/mascotas")

}
*/

exports.actualizarMascota =async (req, res)=>{
    const id =req.params._id
    const body = req.body
    mascota.updateOne({
      
        nombre: req.body.nombreMascota,
        raza: req.body.razaMascota,
        edad: req.body.edadMascota,
        
    })
}

/*exports.actualizarMascota =async (req, res)=>{
    const id =req.params._id
    const body = req.body
    mascota.updateOne(id, body)
}
*/
