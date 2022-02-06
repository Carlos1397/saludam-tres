const express = require('express');
const app = express();

const logger = (req, res, next) => {
    console.log("Nueva peticion HTTP")
    next();
};
app.use(logger)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set('view engine', 'pug');
app.set('views', 'views');

// app.get('/', (req, res) => {
//     const { name, age } = req.query;
//     res.render('index', { name, age });
// })

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Algo salio mal");
})

app.get("/", function (req, res) {
    res.render("new")
})

app.post("/", function (req, res) {
    const { name } = req.body
    res.send(`<h1>Hola ${name}!</h1>`)
});

app.listen(3000, () => console.log(`http://localhost:3000`))