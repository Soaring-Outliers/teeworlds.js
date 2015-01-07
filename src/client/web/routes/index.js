
module.exports = require('express')
    .Router()
    .use(
        function(req, res) {
            res.render('index');
        }
    );