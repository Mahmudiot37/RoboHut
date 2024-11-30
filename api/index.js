const express = require("express");
const app = express();

const dotenv = require("dotenv");
const products = require("./data/db");
dotenv.config()

// test route
app.get("/api/products", (req, res) =>{
    // const products = products;
    res.json(products);
    // console.log(products);
});

app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10); // Get the product ID from the URL
    const product = products.find(p => p.id === productId); // Find product by ID

    if (product) {
        res.status(200).json(product); // Return the product if found
    } else {
        res.status(404).json({ message: 'Product not found' }); // Return 404 if not found
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () =>{
    console.log(`server listening on port ${PORT}`);
});