const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;

const app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgersController.js');
app.use('/', routes);

app.listen(port, () => {
  console.log('Server listening on Port:' + port);
});
