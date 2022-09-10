const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Primeira rota criada com sucesso' });
    // res.send('API Working');
})

router.post('/createproduct', (req, res) => {

    const name = req.body.name;
    const price = req.body.price;

    if(!name || !price){
        res.status(422).json({ message: 'O nome ou preço do produto não foi enviado!'});
        return;
    }

    // console.log(name, price);
    res.status(201).json({ price: price, name: name});

})

module.exports = router;