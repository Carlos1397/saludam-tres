const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res) => {
    const { name, age } = req.query;
    res.render('index', { name, age });
})




app.listen(3000, () => console.log(`http://localhost:3000`))