import { Box, Typography } from "@mui/material";
import React from "react";
import Menubar from "../Menubar/Menubar";

const Offers = () => {
  return (
    <Box container>
      <Menubar />
      <Box marginTop={10}>
        <Typography variant="h1" textAlign="center">
          Offers
        </Typography>
      </Box>
    </Box>
  );
};

export default Offers;
