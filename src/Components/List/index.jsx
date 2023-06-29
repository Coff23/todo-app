import { SettingsContext } from "../../Context/Settings"
import { useContext, useState } from "react"
import { Pagination } from "@mantine/core";

function List({ list, toggleComplete }) {

  const {
    pageItems,
    showCompleted,
    sort
  } = useContext(SettingsContext);
  const [activePage, setPage] = useState(1);

  const renderableList = showCompleted ? list : list.filter(item => !item.complete);
  const pageCount = Math.ceil(renderableList.length / pageItems)

  const listStart = pageItems * (activePage - 1);
  const listEnd = listStart + pageItems;
  const displayList = renderableList.slice(listStart, listEnd);

  return (
    <>
      {displayList.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
      <Pagination value={activePage} onChange={setPage} total={pageCount} />
    </>
  )
}

export default List;
