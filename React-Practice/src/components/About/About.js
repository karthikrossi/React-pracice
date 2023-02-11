import { Box, Typography } from "@mui/material";
import React from "react";
import Menubar from "../Menubar/Menubar";

const About = () => {
  return (
    <Box>
      <Menubar />
      <Box marginTop={8}>
        <Typography variant="h1" textAlign="center">
          About
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
