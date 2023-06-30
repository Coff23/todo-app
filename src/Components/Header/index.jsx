import React, { useContext, useState } from "react";
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, password);
    event.target.reset();
  }

  return (
    <header>
      <Navbar className={classes.navbar}>
        <Link to='/'>Home</Link>
        <Link to='/settings'>Settings</Link>
        <Form onSubmit={handleSubmit}>
          <TextInput
            label="username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextInput
            label="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button onClick={logout}>Log Out</Button>
        </Form>
      </Navbar>
    </header>
  )
}

export default Header;
