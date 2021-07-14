const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
  origin: "http://localhost:14343"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));

const db = require('./app/models');

db.sequelize.sync({ force:true }).then(() => {
  console.log("drop and re-sync db");
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

require('./app/routes/routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
