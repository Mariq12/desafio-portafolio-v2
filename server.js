const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/guardar', (req, res) => {
    const { name, email, subject, message } = req.body;

    const formData = {
        name,
        email,
        subject,
        message
    };

    fs.readFile('contactos.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor');
            return;
        }

        let contactos = [];
        if (data) {
            contactos = JSON.parse(data);
        }

        contactos.push(formData);

        fs.writeFile('contactos.json', JSON.stringify(contactos, null, 4), err => {
            if (err) {
                console.error(err);
                res.status(500).send('Error interno del servidor');
                return;
            }
            res.status(200).send('Datos guardados correctamente');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
