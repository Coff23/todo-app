import React, { useContext } from "react";
import { Navbar, createStyles, Button, TextInput } from "@mantine/core";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../Context/Auth";

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
  const [login, logout, isLoggedin] = useContext(AuthContext);
  
  return (
    <header>
      <Navbar className={classes.navbar}>
        <Link to='/'>Home</Link>
        <Link to='/settings'>Settings</Link>
        <Form>
          <TextInput
          onChange={(event) => setUser}
          />
        </Form>
        <Button>Log Out</Button>
      </Navbar>
    </header>
  )
}

export default Header;
