const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
