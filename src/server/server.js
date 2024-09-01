const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 4000;
const DbUri = process.env.ATLAS_URI;
const client = new MongoClient(DbUri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the process if the database connection fails
  }
}

connectDB(); // Call the function to connect to MongoDB

// Define the GraphQL schema
const typeDefs = gql`
  type Query {
    getEntries: [Entry]
  }

  type Entry {
    _id: ID
    text: String
    date: String
    title: String
  }

  input EntryInput {
    text: String
    date: String
    title: String
  }

  type Mutation {
    createEntry(input: EntryInput): Entry
  }
`;

// Define the GraphQL resolvers
const resolvers = {
  Query: {
    getEntries: async () => {
      try {
        const collection = client.db("diary").collection("entries");
        const entries = await collection.find({}).toArray();
        console.log("entries", entries)
        return entries;
      } catch (err) {
        console.error("Error fetching data", err);
        throw new Error("Failed to fetch data");
      }
    },
  },
  Mutation: {
    createEntry: async (_, { input }) => {
      try {
        const collection = client.db("diary").collection("entries");
        const result = await collection.insertOne(input);
        const newEntry = await collection.findOne({ _id: result.insertedId });
        return newEntry;
      } catch (err) {
        console.error("Error creating entry", err);
        throw new Error("Failed to create entry");
      }
    },
  },
};

// Set up Apollo Server with Express
async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(
      `GraphQL endpoint: http://localhost:${port}${server.graphqlPath}`
    );
  });
  
  // Gracefully close MongoDB connection on shutdown
  process.on('SIGINT', async () => {
    console.log("Shutting down server...");
    await client.close();
    process.exit(0);
  });
}

startApolloServer();
