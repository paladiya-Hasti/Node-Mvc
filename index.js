const express = require('express');
const dbconnect = require('./config/db')
const ProductRoute = require('./routes/Product.Router')
const app = express();

app.use(express.json());
require("dotenv").config();

app.use(express.urlencoded({extended: true}));
app.use("/Products",ProductRoute)




const PORT = process.env.PORT || 4050;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    dbconnect();
});