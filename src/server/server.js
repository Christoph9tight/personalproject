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
    await client.connect(); // Connect to MongoDB
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
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
    Date: String
  }
`;

// Define the GraphQL resolvers
const resolvers = {
  Query: {
    getEntries: async () => {
      try {
        const collection = client.db("diary").collection("entries");
        const entry = await collection.find({}).toArray();
        return entry;
      } catch (err) {
        console.error("Error fetching data", err);
        throw new Error("Failed to fetch data");
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
}

startApolloServer();
