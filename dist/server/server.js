"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const Entry_1 = __importDefault(require("./model/Entry")); // Import the Mongoose model
const connect_1 = __importDefault(require("./connect"));
// Define the GraphQL Type for an Entry
const EntryType = new graphql_1.GraphQLObjectType({
    name: "Entry",
    fields: {
        _id: { type: graphql_1.GraphQLString },
        text: { type: graphql_1.GraphQLString },
        date: { type: graphql_1.GraphQLString },
    },
});
// Define the Root Query
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        entries: {
            type: new graphql_1.GraphQLList(EntryType),
            resolve: async () => {
                return await Entry_1.default.find(); // Fetch all entries using Mongoose
            },
        },
    },
});
// Define the Schema
const schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
});
// Connect to the database
(0, connect_1.default)().then(() => {
    // Set up Express server
    const app = (0, express_1.default)();
    app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
        schema: schema,
        graphiql: true,
    }));
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
