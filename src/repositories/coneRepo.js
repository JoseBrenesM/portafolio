const { MongoClient } = require('mongodb');

const uri =  "mongodb+srv://joseandresbrenesmontero:sxtY1lm4J5uDwDEH@cv.owstnpm.mongodb.net/?retryWrites=true&w=majority&appName=Cv";
const client = new MongoClient(uri);

let database;

async function connectToDatabase() {
  try {
    await client.connect();
    database = client.db('CVdatabase');
    console.log('Connected to MongoDB');
    return database;
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

function getDatabase() {
  if (database) {
    return database;
  } else {
    throw new Error('Database not connected');
  }
}

module.exports = { connectToDatabase, getDatabase };