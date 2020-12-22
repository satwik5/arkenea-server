const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var db = mongoose.createConnection("mongodb://localhost:27017/ekart_db", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

db.mongoose = mongoose;



const mcredSchema = new mongoose.Schema({
  fullname: { type: String }, //, required:true
  email: { type: String, unique:true }, //, required:true
  mobile: { type: String }, //, required:true
  city: { type: String },
  password: { type: String },
  deleteflag:{type:Boolean, default: false}
})
db.mcredentials = db.model('mcredential', mcredSchema);

module.exports = db;
