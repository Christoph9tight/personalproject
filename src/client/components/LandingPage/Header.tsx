import { AppBar, Typography } from "@mui/material";
import React from "react";



const Header = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#cccccc ",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          fontSize: "clamp(3rem, 10vw, 3.5rem)",
        }}
      >
        My Diary
      </Typography>
    </div>
  );
};

export default Header;
