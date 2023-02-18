const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Customers = require('./mongoose').Customers;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/', async (req, res) => {
  let customer = new Customers();
  customer.username = req.body.username;
  customer.telephone = req.body.telephone;
  customer.fruitname = req.body.fruitname;

  const doc = await customer.save();
  console.log(doc);
  res.json(doc);
});

app.get('/', async (req, res) => {
  const docs = await Customers.find({});
  res.json(docs);
})

app.listen(4500, () => {
  console.log('server connected on port 4500');
});
