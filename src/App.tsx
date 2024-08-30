import React from "react";
import LandingPage from "./client/pages/LandingPage";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <LandingPage />
    </ApolloProvider>
  );
}

export default App;
