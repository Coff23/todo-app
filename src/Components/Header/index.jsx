import React from "react";
import { Navbar, createStyles, Button } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    height: '100%',
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
  },
}));

function Header() {
  const { classes } = useStyles();
  return (
    <header>
      <Navbar className={classes.navbar}>
        <Link to='/'>Home</Link>
        <Link to='/settings'>Settings</Link>
        <Button>Log Out</Button>
      </Navbar>
    </header>
  )
}

export default Header;
