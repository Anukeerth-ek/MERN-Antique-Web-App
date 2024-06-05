const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

// middleware
app.use(cors());
app.use(express.json());

// a720hRWZ4YoGVvJm

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// mongodb configuration

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-art-store:a720hRWZ4YoGVvJm@cluster0.vdpibah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    // create a collection of documents

    const artWorks = client.db("ArtWorks").collection("arts")

    // INSERT a arts to the database: post method_______________________
    app.post('/upload-arts', async(req, res)=> {
        const data = req.body;
        const results = await artWorks.insertOne(data);
        res.send(results)
    })
// _________________________________________________________________________

    // GET all arts from database_______________
    app.get("/all-arts", async(req, res)=> {
      const arts = artWorks.find();
      const result = await arts.toArray();
      res.send(result)
    })
// ____________________________________________________

    // UPDATE a arts: patch or update method___________
    app.patch("/art/:id", async(req, res)=> {
      const id = req.params.id;
      console.log(id)
      const updateArtData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true}

      const updateDoc = {
        $set: {
          ...updateArtData
        }
      }

      // update
      const result = await  artWorks.updateOne(filter, updateDoc, options);
      res.send(result)
    })
    // _______________________________________________________

    // DELETE a book data 
    app.delete('/art/:id', async(req, res)=> {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const result = await artWorks.deleteOne(filter)
      res.send(result)
    })

    // Filter by category
    app.get('/all-arts', async(req, res)=> {
      let query = {};
      if(req.query ?.categories) {
        query = {categories: req.query.categories}
      }
      const result = await artWorks.find(query).toArray()
      res.send(result)
    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
 



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})