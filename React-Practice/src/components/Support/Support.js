import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Menubar from "../Menubar/Menubar";

const Support = () => {
  return (
    <>
      <Box>
        <Menubar />
      </Box>
      <Box marginTop={10}>
        <Typography variant="h1" textAlign="center">
          Support
        </Typography>
      </Box>
    </>
  );
};

export default Support;
