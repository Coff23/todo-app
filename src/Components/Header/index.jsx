import { createStyles } from '@mantine/core'
import { Button, Container, Header } from '@mantine/core'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/Auth'
import Login from '../Auth/login'

const useStyles = createStyles(theme => ({
  HEADER: {
    backgroundColor: theme.colors.blue[4],
    display: 'flex',
    justifyContent: 'space-between',
  },
  h1: {
    backgroundColor: theme.colors.blue[4],
    padding: theme.spacing.md,
    margin: theme.spacing.md,
    marginLeft: 0,
    marginTop: 0,
    color: 'white',
    paddingLeft: '0.5em',
    display: 'flex',
    fontSize: '1.5em',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}))

export default function NavHeader() {
  const { classes } = useStyles()
  const { isLoggedIn, logout } = useContext(AuthContext)
  return (
    <Container className={classes.HEADER}>
      <Header className={classes.h1}>
        <a className={classes.link} href='/' default>
          Home
        </a>
        <a className={classes.link} href='/settings'>
          Settings
        </a>
      </Header>
      {!isLoggedIn ? (
        <Login />
      ) : (
        <Button onClick={logout} color='red' mt='2%'>
          Log out
        </Button>
      )}
    </Container>
  )
}
