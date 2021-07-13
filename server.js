const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const db = require('./models');
const app = express();
const port = 8000;

app.use(cors({ origin: "http://localhost:8000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

routes(app);
db.sequelize.sync({ force:true }).then(() => {
  console.log("drop and re-sync db");
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
