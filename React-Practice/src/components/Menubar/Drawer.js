import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { MenuBook } from "@mui/icons-material";
import Logo from "../../../src/Images/megacabs_logo_1.png";
import { Link } from "react-router-dom";

const Drawercom = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const LinkTags = ["Home", "About Us", "Offers & Coupon", "Support"];

  const Links = () => {
    const Link = ["/", "/aboutus", "/offers", "/support"];
    {
      Link.map((page, index) => ({ page }));
    }
  };

  return (
    <React.Fragment>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <img src={Logo} height="10%" width="10%" style={{}} />

          <Link to={Links}>
            {LinkTags.map((page, index) => (
              <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                <ListItemText>{page}</ListItemText>
              </ListItemButton>
            ))}
          </Link>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuBook />
      </IconButton>
    </React.Fragment>
  );
};

export default Drawercom;

