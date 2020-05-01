const express = require('express')
const hbs = require('hbs');
const app = express()

app.use( express.static( __dirname + '/public') )

// Express HBS
app.set('view engine', 'hbs');
// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
// Helpers HBS
require("./hbs/helpers");
 
app.get('/', function (req, res) {
    res.render('home.hbs', {
        nombre: "juan carlos"
    })
    // res.render('home.html', {
    //     nombre: "Juan carlos",
    //     anio: new Date().getFullYear()
    // })
})
app.get('/about', function (req, res) {
    res.render("about.hbs")
    // res.render("about.html", {
    //     anio: new Date().getFullYear()
    // })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})