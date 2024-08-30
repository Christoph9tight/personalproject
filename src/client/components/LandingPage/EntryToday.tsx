import React from "react";
import { Button, TextField } from "@mui/material/";
import moment from "moment";

interface EntryTodayProps {
}

const EntryToday: React.FC<EntryTodayProps> = ({ }) => {
  let today = moment().toDate().toDateString();
  return (
    <div
      style={{
        border: "1px solid black",
        width: "75vw",
        padding: "2rem",
        gap: "1rem",
      }}
    >
        <h2>Entry of {today}</h2>
      <div style={{display: "flex", gap:'1rem'}}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          placeholder='What happened today?'
          style={{ width: "75%" }}
        //   onChange={(e)=>setEntries(e.target.value)}
        />
        <Button variant="contained">Save</Button>
      </div>
    </div>
  );
};

export default EntryToday;
