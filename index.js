const express = require('express')
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const Product = require('./models/product')

main().catch(err => console.log(err));

async function main() {
    mongodb://127.0.0.1:27017/farmStand
    await mongoose.connect('mongodb+srv://juyoungjin4:7sCDmZEevxW7igYt@cluster0.jidalcl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => {
            console.log('MONGO CONNECT OPEN!!')
        })
        .catch(err => {
            console.log('OH ERROR')
            console.log(err)
        })
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000")
})


app.get('/products/new', (req, res) => {
    res.render('products/new')
})

app.post('/products', async (req, res) => {


    const newProduct = new Product(req.body);
    await newProduct.save()
        .then(data => {
            console.log(data)

        })
        .catch(err => {
            console.log('Oh~~~~~~~~~~~~~~~~~~~~~~~~~')
            // alert('OH NOO')
        })
    res.redirect(`/products/${newProduct.id}`)


})


app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products', { products })
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('./products/show', { product })
})

