const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const pasienRoute = require('./routes/pasien');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/v1/pasien', pasienRoute);

app.listen(port, () => console.log(`App listening on port http://127.0.0.1:${port}!`));
