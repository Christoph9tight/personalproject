import React, { useState } from "react";
import Header from "../components/LandingPage/Header";
import EntryHistory from "../components/LandingPage/EntryHistory";
import EntryToday from "../components/LandingPage/EntryToday";
const LandingPage = () => {
  const [entry, setEntry] = useState('');

  return (
    <div style={{ padding: "1rem" }}>
      <Header />
      <div style={{ display: "flex" }}>
        <EntryToday entry={entry} setEntry={setEntry} />
        <EntryHistory entry={entry} setEntry={setEntry} />
      </div>
    </div>
  );
};

export default LandingPage;
