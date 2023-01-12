import express from 'express';
import cors from 'cors';
import movies from './api/movies.route.js';

const app = express();

// From lecture to connect to mongo db
/* const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'demo_db';
let db, collection;

MongoClient.connect(dbUrl, function(err,client){
  if (err) {
    console.log('Failed to connect to db server:', err);
  } else {
    console.log('Connected successfully to db server');
    db = client.db(dbName);
    collection = db.collection('movies')
  }
})
*/
app.use(cors());
app.use(express.json());

app.use("/api/v1/movies", movies);
app.use('*',(req, res) => {
  res.status(404).json({error: "not found"});
})

export default app;
