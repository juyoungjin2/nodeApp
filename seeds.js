const mongoose = require('mongoose');
const Product = require('./models/product')

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
        .then(() => {
            console.log('MONGO CONNECT OPEN!!')
        })
        .catch(err => {
            console.log('OH ERROR')
            console.log(err)
        })
}

// const p = new Product({
//     name: 'Ruby',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(err => {
//         console.log(err)
//     })

const products = [
    {
        name: 'cherry',
        price: 5.33,
        category: 'fruit'
    },
    {
        name: 'Ruby2',
        price: 1.99,
        category: 'fruit'
    },
    {
        name: 'Ruby3',
        price: 1.99,
        category: 'fruit'
    },
    {
        name: 'Ruby4',
        price: 1.99,
        category: 'fruit'
    },
]
Product.insertMany(products)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })

// const cheerry = new Product(products)

// cheerry.save()