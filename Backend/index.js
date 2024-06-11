const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Configuration
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
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB!");

    // Create a collection of documents
    const artWorks = client.db("ArtWorks").collection("arts");

    // upload an artwork into the database
    app.post('/upload-arts', async (req, res) => {
      try {
        const data = req.body;
        const result = await artWorks.insertOne(data);
       res.send(result) // Send the inserted document back to the client
      } catch (error) {
        console.error("Error inserting artwork:", error);
        res.status(500).json({ error: "Failed to insert artwork" });
      }
    });

    // Get all artworks from the database
    app.get("/all-arts", async (req, res) => {
      try {
        const result = await artWorks.find().toArray();
        res.json(result);
      } catch (error) {
        console.error("Error fetching all artworks:", error);
        res.status(500).json({ error: "Failed to fetch artworks" });
      }
    });

    // Getting a single item 
    app.get('/art/:id', async(req, res)=> {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const result = await artWorks.findOne(filter)
      res.send(result)
    })

    // Update an artwork
    app.patch("/art/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const updateArtData = req.body;
        const filter = {_id: new ObjectId(id) };
        const updatedDoc = {
          $set: {
            ...updateArtData
          }
        };
        const result = await artWorks.updateOne(filter, updatedDoc);
        res.json(result);
      } catch (error) {
        console.error("Error updating artwork:", error);
        res.status(500).json({ error: "Failed to update artwork" });
      }
    });

    // Delete an artwork
    app.delete('/art/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await artWorks.deleteOne(filter);
        res.json(result);
      } catch (error) {
        console.error("Error deleting artwork:", error);
        res.status(500).json({ error: "Failed to delete artwork" });
      }
    });

    // Filter artworks by category
    app.get('/all-arts', async (req, res) => {
      try {
        let query = {};
        if (req.query?.categories) {
          query = { categories: req.query.categories };
        }
        const result = await artWorks.find(query).toArray();
        res.json(result);
      } catch (error) {
        console.error("Error filtering artworks by category:", error);
        res.status(500).json({ error: "Failed to filter artworks" });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensure that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.error);

// Start the Express server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
