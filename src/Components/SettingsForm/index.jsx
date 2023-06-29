import { useContext, useState } from "react";
import { SettingsContext } from "../../Context/Settings";
import { createStyles, Button, Switch, TextInput, Text, Grid, NumberInput } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";
import { When } from "react-if";

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.md,
  }
}));

const SettingsForm = (event) => {

  const {
    pageItems,
    setPageItems,
    showCompleted,
    setShowCompleted,
    sort,
    setSort,
    saveLocalStorage
  } = useContext(SettingsContext);

  const [showUpdate, setShowUpdate] = useState(false);
  const { classes } = useStyles();
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowUpdate(true);
    saveLocalStorage();
    setShow(true);
    event.target.reset();
  };

  return (
    <>
      <h1 className={classes.h1}><IconSettings /> Manage Settings </h1>
      <Grid>
        <Grid.Col span={4}>
          <form onSubmit={handleSubmit} className={classes.form} >
            <Text fontSize="xl" weight="bold">Update Settings</Text>
            <Switch
              checked={showCompleted}
              onChange={(event) => setShowCompleted(event.currentTarget.checked)}
              label="Show Completed?"
            />
            <NumberInput
              label="Items per page"
              placeholder={pageItems}
              value={pageItems}
              onChange={setPageItems}
            />
            <TextInput
              label="Sort by"
              placeholder="difficulty"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            />
            <Button type="submit">Show New Settings</Button>
          </form>
        </Grid.Col>
        <Grid.Col span={4}>
          <When condition={show}>
            <Text fontSize="xl" weight="bold"> Updated Settings </Text>
            <Text> {showCompleted ? 'Show' : 'Hide'} Completed ToDos </Text>
            <Text> Items Per Page: {pageItems}</Text>
            <Text> Sort Keyword: {sort}</Text>
          </When>
        </Grid.Col>
      </Grid>
    </>
  )
};

export default SettingsForm;
