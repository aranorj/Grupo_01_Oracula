const path = require('path');
const db = require('../src/model/productos.json')
const homePath = path.join(__dirname, '../src/views/home.html');

const mainController = {
    //home.html
    index: (req, res) => {
        res.render('home', {db});
    }
};
module.exports = mainController;
