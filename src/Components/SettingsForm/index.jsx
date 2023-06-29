import { useContext, useState } from "react";
import { SettingsContext } from "../../Context/Settings";
import { createStyles, Button, Switch, TextInput, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
  },
  div: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: theme.spacing.md,
  },
  section: {
    border: `1px solid gray`,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowUpdate(true);
    saveLocalStorage();
  };

  return (
    <>
      <h1 className={classes.h1}> Manage Settings </h1>
      <div className={classes.div}>
        <section className={classes.section}>
          <h3>Update Settings</h3>
          <form onSubmit={handleSubmit} className={classes.form} >

            <Switch
              onLabel="Show Completed?"
              checked={showCompleted}
              onChange={(event) => setShowCompleted(event.target.checked)}
            />
            <input
              type="number"
              name="pageItems"
              label="Items per page"
              placeholder={pageItems}
              value={pageItems}
              onChange={(event) => setPageItems(event.target.value)}
            />

            <TextInput
              label="Sort by"
              placeholder="difficulty"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            />

            <Button type="submit">Update Settings</Button>
          </form>
        </section>
        {
          showUpdate &&
          <section className={classes.section}>
            <h3>Updated Settings</h3>
            <Text> Show Completed: {showCompleted ? 'yes' : 'no'}</Text>
            <Text> Items Per Page: {pageItems}</Text>
            <Text> Sort Keyword: {sort}</Text>
          </section>
        }
      </div>

    </>
  )
};

export default SettingsForm;
