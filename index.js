
import {obtenerHoraActual, obtenerFechaCompleta} from "./src/time.js";

//module express
import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}`)
})
//fin de config express



app.get('/hora', (req, res)=>{
    const horaActual = obtenerHoraActual();
    res.send(`La hora actual es ${horaActual}`)
})

app.get('/fecha-completa', (req, res) => {
    const fechaCompleta = obtenerFechaCompleta();
    res.send(fechaCompleta);
});


