import React from "react";

interface EntryHistoryProps {
    entries: any;
    setEntries: any;
}
const EntryHistory: React.FC<EntryHistoryProps> = ({entries, setEntries}) => {
  console.log("Entries data:", entries);  // Log the entries to check the structure

  return (
    <div style={{ border: "1px solid black", width: "20vw", padding: '1rem' }}>
      <h2>Past Entries</h2>
      {entries?.map((entry: { date: string, title: string }) => (
        <li>{entry.date}, {entry.title}</li>
      ))}
    </div>
  );
};

export default EntryHistory;
