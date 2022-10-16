const express = require('express');

const app = express();
const path = require('path');

const port = 5002;

app.use(express.static(path.join(__dirname, 'src/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'src/templates'));
app.set('view engine', 'jade');

app.get('/', (req, res) => {
    res.render('theme_example/homepage',{ name :'shubham'})
})


app.listen(port,function(){
    console.log(`Example app listening at http://localhost:${port}`)
});


