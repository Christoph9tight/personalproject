import React from "react";

interface EntryHistoryProps {
    entries: any;
    setEntries: any;
}
const EntryHistory: React.FC<EntryHistoryProps> = ({entries, setEntries}) => {
    console.log("entry in the history tab", entries);
  return (
    <div style={{ border: "1px solid black", width: "25vw" }}>
      <h2>Past Entries</h2>
      {entries?.map((entry: { text: any }) => (
        <li>{entry.text}</li>
      ))}
    </div>
  );
};

export default EntryHistory;
