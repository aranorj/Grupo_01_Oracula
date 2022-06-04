const path = require('path');
const homePath = path.join(__dirname, '../src/views/home.html');

const mainController = {
    //home.html
    index: (req, res) => {
        res.sendFile(homePath);
    }
};
module.exports = mainController;