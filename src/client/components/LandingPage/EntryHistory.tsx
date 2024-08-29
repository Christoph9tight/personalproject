import React from "react";

interface EntryHistoryProps {
    entry: any;
    setEntry: any;
}
const EntryHistory: React.FC<EntryHistoryProps> = ({entry, setEntry}) => {
    console.log("entry in the history tab", entry)
  return (
    <div style={{ border: "1px solid black", width: "25vw" }}>
      <h2>Past Entries</h2>
      <li>
        {entry}
      </li>
      <li>
        2
      </li>
      <li>
        3
      </li>
      <li>
        4
      </li>
    </div>
  );
};

export default EntryHistory;
