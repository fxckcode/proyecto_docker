import express from 'express';
import { pool } from './src/database/conexion.js';
import body_parser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(cors())

app.get('/usuarios', async (req, res) => {
    try {
        const [ resultado ] = await pool.query('SELECT * FROM usuarios');

        if (resultado.length > 0) {
            return res.status(200).json(resultado);
        } else {
            return res.status(404).json({ message: 'No hay usuarios' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
})


app.listen(3000, () => {
    console.log("servidor corriendo en localhost:3000")
})