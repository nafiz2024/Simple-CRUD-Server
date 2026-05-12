const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

const uri = `mongodb+srv://simpleCrudUser:KSZmFLI9b6afJjR4@cluster0.uwxm1bp.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const run = async () => {
    try {
        await client.connect();

        const db = client.db('simpleCrud');
        const userCollection = db.collection('users');

        app.get('/users', async (req, res) => {
            const cursor = userCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        await client.db('admin').command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Simple CRUD server is serving you!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
