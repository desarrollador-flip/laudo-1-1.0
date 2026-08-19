const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '.env'), quiet: true });
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

// Configura middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const requiredEnvironmentVariables = ['AIRTABLE_API_KEY', 'AIRTABLE_BASE_ID', 'AIRTABLE_TABLE_NAME'];
const missingEnvironmentVariables = requiredEnvironmentVariables.filter((variableName) => !process.env[variableName]);

if (missingEnvironmentVariables.length > 0) {
    throw new Error(`Faltan variables de entorno requeridas: ${missingEnvironmentVariables.join(', ')}`);
}

// Ruta para manejar el envío de datos
app.post('/submit', async (req, res) => {
    const { name, phone, email, state, age } = req.body;

    if (!name || !phone || !email || !state || !age) {
        return res.status(400).json({ message: 'Faltan datos requeridos del formulario.' });
    }

    try {
        // Guardar los datos en Airtable
        await axios.post(
            `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
            {
                fields: {
                    name,
                    age,
                    phone,
                    email,
                    state_google_ads: state,
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            },
        );

        res.status(200).json({ message: 'Datos enviados correctamente.' });
    } catch (error) {
        const status = error.response?.status;
        const details = error.response?.data ?? error.message;

        console.error('Error al guardar el formulario en Airtable:', { status, details });
        res.status(500).json({ message: 'Hubo un problema al procesar el formulario.' });
    }
});

// Configurar el servidor para escuchar en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
