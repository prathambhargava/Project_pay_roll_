const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Pratham123:PrathamMeenal@cluster0.pd1xs.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("succesfull");
  // perform actions on the collection object
  client.close();
});

db.USER.insert({
    'user': 'Harry',
    'pass': 'JavaScript',
    
 })