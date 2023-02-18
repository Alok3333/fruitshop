const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('strictQuery', false);
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fruitshop', () => {
    console.log('db connected.');
  });
}

main().catch((err) => console.log(err));

const userSchema = new Schema({
  username: String,
  telephone: Number,
  fruitname: String,
});

const Customers = mongoose.model('Customers', userSchema);

module.exports = {
  Customers,
};
