import React, { useState, useEffect } from "react";
import Header from "../components/LandingPage/Header";
import EntryHistory from "../components/LandingPage/EntryHistory";
import EntryToday from "../components/LandingPage/EntryToday";
import { gql, useQuery } from "@apollo/client";

const GET_ENTRIES = gql`
  query getEntries {
    getEntries {
      _id
      text
      Date
    }
  }
`;

const LandingPage = () => {
  const [entries, setEntries] = useState([]);
  const { loading, error, data } = useQuery(GET_ENTRIES);

  useEffect(() => {
    if (data) {
      console.log("Entries:", data.getEntries);
      setEntries(data.getEntries)
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <Header />
      <div style={{ display: "flex" }}>
        <EntryToday />
        <EntryHistory entries={entries} setEntries={setEntries} />
      </div>
    </div>
  );
};

export default LandingPage;
