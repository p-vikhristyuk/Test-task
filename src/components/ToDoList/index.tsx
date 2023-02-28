import React from "react";
import {IToDoListRow} from "../../interfaces/toDoList";

const ToDoList: React.FC<{list: Array<IToDoListRow>, onRowClick: (id: number) => void, onStatusChange: (id: number) => void}> = ({list, onRowClick, onStatusChange}) => {
  const onCheckboxChange = (e: any, id: number) => {

  }
  return(
      <div className="todo">
        <div className="row">
          <div className="cell small">id:</div>
          <div className="cell small">title:</div>
          <div className="cell small">description:</div>
          <div className="cell small">status:</div>
        </div>
        {list.map((row: IToDoListRow, index: number) => {
          return(
              <div className="row has-hover" key={index} onClick={() => {onRowClick(row.id)}}>
                <div className="cell small">{row.id}</div>
                <div className="cell small">{row.title}</div>
                <div className="cell small">{row.description}</div>
                <div className="cell small">
                  <label onClick={e => e.stopPropagation()}>
                    <input type="checkbox" checked={row.status} onChange={(e) => onStatusChange(row.id)}/>
                  </label>
                </div>
              </div>
          )
        })}
      </div>
  )
}

export default ToDoList