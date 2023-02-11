import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  Tabs,
  Toolbar,
  Typography,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";


import { fontWeight } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../src/Images/megacabs_logo_1.png";
import Drawercom from "./Drawer";
import "./Menubar.css";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: "8px",
});

const Menubar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = useState();
  return (
    <React.Fragment>
      <AppBar sx={{ bgcolor: "white", color: "blue", position: "relative" }}>
        <StyledToolbar>
          <img src={Logo} height="10%" width="10%" />

          {isMatch ? (
            <>
              <Drawercom />
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Link to="/" className="navi">
                <Typography fontWeight="bold">Home</Typography>
              </Link>
              <Link to="/about" className="navi">
                <Typography fontWeight="bold">About Us</Typography>
              </Link>
              <Link to="/offers" className="navi">
                <Typography fontWeight="bold">Offers & Coupons</Typography>
              </Link>
              <Link to="/support" className="navi">
                <Typography fontWeight="bold">Support</Typography>
              </Link>
            </Box>
          )}
        </StyledToolbar>
      </AppBar>
    </React.Fragment>

    
  );
};

export default Menubar;
