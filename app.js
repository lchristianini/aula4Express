const express = require('express');
const productRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', usersRoutes)

app.listen(3001, () =>
    console.log('Escutando porta 3001')
)