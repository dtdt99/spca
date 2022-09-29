import React from "react";
import TextField from "@mui/material/TextField";

const Search = () => {
  return (
    <div style={{ height: "100%" }}>
      <p>Find A Local Vet</p>
      <TextField
        id=""
        label=""
        placeholder="Search...."
        sx={{
          width: "80%",
          display: "flex",
          margin: "auto",
          marginTop: "20vh",
        }}
      />
    </div>
  );
};

export default Search;
