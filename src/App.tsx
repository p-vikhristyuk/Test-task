import React, {useState} from 'react';
import './App.css';
import FormControl from "./components/FormControl";
import ToDoList from "./components/ToDoList";
import {IToDoListRow} from "./interfaces/toDoList";
import Info from "./modals/Info";

function App() {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [toDoList, setToDoList] = useState<Array<IToDoListRow>>([]);
  const [error, setError] = useState<"title" | "description" | boolean>(false);
  const [selectedRow, setSelectedRow] = useState<IToDoListRow | null>(null);

  const clearFields = () => {
    setNewTitle("");
    setNewDescription("");
  }

  const addToList = () => {
    const newList = [
      ...toDoList,
      {
        title: newTitle,
        description: newDescription,
        status: false,
        id: toDoList.length + 1
      }
    ]

    setToDoList(newList);
    clearFields();
  }

  const onClick = () => {
    if(newTitle.length > 0 && newDescription.length > 0) {
      addToList();
      return;
    }

    if(newTitle.length === 0 && newDescription.length === 0) {
      setError(true);
      return;
    }

    if(newTitle.length === 0) {
      setError("title")
    }

    if(newDescription.length === 0) {
      setError("description")
    }
  }

  const onTitleFieldChange = (value: string) => {
    setNewTitle(value);

    if(error !== false) {
      setError(false);
    }
  }

  const onDescriptionFieldChange = (value: string) => {
    setNewDescription(value);

    if(error !== false) {
      setError(false);
    }
  }

  const onRowClick = (id: number) => {
    const currentRow = toDoList.filter(row => row.id === id)[0];
    setSelectedRow(currentRow)
  }

  const onStatusChange = (id: number) => {
    const itemIndex = toDoList.findIndex((el: IToDoListRow) => el.id === id);
    const newList = [...toDoList];
    newList[itemIndex].status = !newList[itemIndex].status;
    setToDoList(newList);
  }

  return (
    <div className="app container">
      <h1>Enter your data:</h1>
      <div className="row">
        <div className="cell">
          <FormControl onChange={onTitleFieldChange}
                       value={newTitle}
                       displayError={error === true || error === "title"}
                       errorText="This field is empty"
                       placeholder="Title"/>
        </div>
        <div className="cell">
          <FormControl onChange={onDescriptionFieldChange}
                       value={newDescription}
                       displayError={error === true || error === "description"}
                       errorText="This field is empty"
                       placeholder="description" />
        </div>
        <div className="cell">
          <button onClick={onClick}>Add</button>
        </div>
      </div>
      <h2>ToDo List:</h2>
      <ToDoList list={toDoList} onRowClick={onRowClick} onStatusChange={onStatusChange}/>
      {selectedRow && <Info data={selectedRow}
                            onClose={() =>  setSelectedRow(null)}
                            active={selectedRow !== null}/>}
    </div>
  );
}

export default App;
