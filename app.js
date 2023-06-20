const express = require('express');
const app = express();
const port = 3000;

const products = [
    { name: 'Product 1', description: 'Description 1', image: 'https://via.placeholder.com/150', price: 10 },
    { name: 'Product 2', description: 'Description 2', image: 'https://via.placeholder.com/150', price: 20 },
    { name: 'Product 3', description: 'Description 3', image: 'https://via.placeholder.com/150', price: 30 },
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index', { products });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});