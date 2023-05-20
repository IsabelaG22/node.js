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


exports.actualizarMascota = async (req, res) => {
    let id = req.params.id
    await mascota.update({ "_id": id },{
    nombre: req.body.nombreNuevoMascota,
    raza: req.body.razaNuevaMascota,
    edad: req.body.edadNuevaMascota,
});
    console.log(id)
    res.redirect("/api/v1/mascotas")
}
/*
exports.actualizarMascota = async (req, res) => {
    let buscarId = await mascota.find({ _id: req.body.id });
    let udpdate = await mascota.findByIdAndUpdate({
        _id: req.body.id,
        nombre: req.body.nombreMascota,
        raza: req.body.razaMascota,
        edad: req.body.edadMascota,
    });
    res.redirect("/api/v1/mascotas")


}

exports.actualizarMascota = async (req, res) => {
    let id = req.body._id
    await mascota.findByIdAndUpdate({
        _id: req.body._id,
        nombre: req.body.nombreMascota,
        raza: req.body.razaMascota,
        edad: req.body.edadMascota,
    });
    console.log(id)

    res.redirect("/api/v1/mascotas")
}
/*

let buscarId = await mascota.find({ _id: req.body._id });
mascota.findByIdAndUpdate(buscarId, {
    nombre: req.body.nombreMascota,
    raza: req.body.razaMascota,
    edad: req.body.edadMascota,
},
    fuction(err, docs),{
    if(err) {
        console.log(err)
    }
    else{
        console.log("updated user: ", docs);
    }
});

exports.actualizarMascota = async (req, res) => {
    let buscarId = await mascota.find({ _id: req.body._id });
    let udpdate = await mascota.findByIdAndUpdate({
        _id: req.body._id,
        nombre: req.body.nombreMascota,
        raza: req.body.razaMascota,
        edad: req.body.edadMascota,
    })

}


exports.actualizarMascota =async (req, res)=>{
    const id =req.params._id
    const body = req.body
    db.mascota.findByIdAndUpdate({
        _id: req.body._id,
        nombre: req.body.nombreMascota,
        raza: req.body.razaMascota,
        edad: req.body.edadMascota,
        
    })
}
*/
/*
exports.actualizarMascota = async (req, res) => {
    const id = req.params._id
    const body = req.body
    db.mascota.updateOne(id, body)
}
*/
