const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const dotenv= require("dotenv").config();
app.use(express.static('public'))

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/:page', (req, res) => {
  const pageName = req.params.page;
  res.sendFile(path.join(__dirname, `/views/${pageName}.html`));
});

app.listen(process.env.PORT, () => {
  console.log(`Escuchando en el puerto ${port}`)
})