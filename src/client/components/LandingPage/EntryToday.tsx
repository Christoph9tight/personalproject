import React, { useState } from "react";
import { Button, TextField } from "@mui/material/";
import moment from "moment";
import { gql, useMutation } from "@apollo/client";

// Rename Entry to DiaryEntry to avoid conflicts
interface Entry {
  _id: string;
  text: string;
  date: string;
  title: string;
}

interface EntryTodayProps {
  entries: Entry[];
  setEntries: any;
}

const CREATE_ENTRY = gql`
  mutation createEntry($input: EntryInput!) {
    createEntry(input: $input) {
      _id
      text
      date
      title
    }
  }
`;

const EntryToday: React.FC<EntryTodayProps> = ({ entries, setEntries }) => {
  let today = moment().toDate().toDateString();
  const [text, setText] = useState<string>("");
  const [title, setTitle] = useState<string>("");


  const [createEntry] = useMutation(CREATE_ENTRY);

  const handleAddEntry = async (text: string, date: string, title: string) => {
    try {
      const { data } = await createEntry({
        variables: { input: { text, date, title } },
      });
      setEntries((prevEntries: Entry[]) => [...prevEntries, data.createEntry]);
    } catch (err) {
      console.error("Error creating entry:", err);
    }
  };

  const handleSave = () => {
    if (text.trim() && title.trim()) {
      handleAddEntry(text, today, title); // Pass the text and date to handleAddEntry
      setText(""); // Clear the input after saving
      setTitle("")
    }
  };

  return (
    <div
      style={{
        border: "1px solid black",
        width: "80vw",
        padding: "2rem",
        gap: "1rem",
      }}
    >
      <h2>Entry of {today}</h2>
      <TextField
          id="outlined-basic"
          label="Choose a title"
          variant="outlined"
          placeholder="Choose a title?"
          style={{ width: "25%" }}
          value={title}  // Tie the input value to the state
          onChange={(e) => setTitle(e.target.value)} // Update state on input change
        />
      <div style={{ display: "flex", gap: '1rem' }}>
        <TextField
          id="outlined-basic"
          label="What happened today?"
          variant="outlined"
          placeholder="What happened today?"
          style={{ width: "75%" }}
          value={text}  // Tie the input value to the state
          onChange={(e) => setText(e.target.value)} // Update state on input change
        />
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EntryToday;
