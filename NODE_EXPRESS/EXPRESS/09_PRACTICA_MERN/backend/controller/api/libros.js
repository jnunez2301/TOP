const express = require('express');
const router = express.Router();
const Libros = require('../../models/librosSchema');

router.get('/', (request, response) => {
    Libros.find({})
    .then(libros => {
        response.status(200).json(libros);
    })
    .catch(error => {
        console.log(error);
        response.status(404).json({msg: 'No se pudo encontrar los datos'})
    })
})


router.post('/', (req, res) => {
    const body = req.body;
    console.log(req.body);
    try{
        const nuevoLibro = new Libros({
            name: body.name,
            description: body.description,
            author: body.author,
            libroImg: body.libroImg,
            ISBN: body.ISBN
        })

        nuevoLibro.save()
            .then(libroGuardado => {
                res.status(201).json({msg: 'posteado correctamente', nombre: libroGuardado.name})
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({msg: 'modelo no se ha escrito correcamente'})
            })
    }catch(error){
        console.log(error);
        res.status(500).json({msg: 'petición incorrecta no se pudo a la BBDD'})
    }
})

router.put('/:id', (req, res) => {
    const paramID = req.params.id;
    const body = req.body;

    const libroActualizado = {
        name: body.name,
        description: body.description,
        author: body.author
    }

    Libros.findOne({ _id: paramID })
        .then(libroSeleccionado => {
            if(!libroSeleccionado){
                res.status(404).json({msg: `El libro con ID ${paramID} no existe`})
            }
            libroSeleccionado.name = body.name;
            libroSeleccionado.description = libroActualizado.description;

            return libroSeleccionado.save();
        })
        .then(librito => {
            res.status(201).json({msg: 'Libro actualizado'})
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({msg: 'Petición erronea'})
        })
})

router.delete('/:id', (req, res) => {
    const paramID = req.params.id;

    Libros.findOneAndDelete({_id: paramID})
        .then(libroEliminado => {
            res.status(203).json({msg: 'Libro eliminado', libroEliminado})
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({msg: 'Libro no encontrado'})
        })
})

// CRUD BIEN HECHO

module.exports = router;