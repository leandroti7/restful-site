const express = require('express')
const axios = require('axios')

const app = express()

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));

app.get('/produtos', async (req, res) =>{
    const result = await axios.get('http://localhost:3000/api/v1/products')
    const products = result.data.data;
    // console.log(products);
    res.render('products', { products });
})

app.listen(3001, ()=>{
    console.log('Servidor Inicializado na porta 3001');
})