const express = require("express");
const router = express.Router();

const mensajes = [
    {
        _id : "1",
        user : "chavo",
        mensaje : "mensaje numero uno"
    },
    {
        _id : "2",
        user : "donRamon",
        mensaje : "mensaje numero dos"
    },
    {
        _id : "3",
        user : "kiko",
        mensaje : "mensaje numero tres"
    }
]

router.get( "/" , (req, resp) =>{
    resp.json( mensajes);
});

router.post( "/" , (req, resp) =>{

    const mensaje = {
        mensaje : req.body.mensaje,
        user : req.body.user,
        lat : req.body.lat,
        lng : req.body.lng,
        foto : req.body.foto
    }

    mensajes.push(mensaje);

    console.log("Mis mensajes: ", mensajes);

    resp.json({
        ok : true,
        mensaje
    });
});

module.exports = router;