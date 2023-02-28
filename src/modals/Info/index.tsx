import React from "react";
import ModalContainer from "../ModalContainer"
import {IToDoListRow} from "../../interfaces/toDoList";

interface IInfo {
  data: IToDoListRow,
  onClose: () => void,
  active: boolean
}

const Info: React.FC<IInfo> = ({
  data,
  onClose,
  active
}) => {
  return(
      <ModalContainer onClose={onClose} active={active}>
        <>
          <div className="title">{data.title}</div>
          <div className="description">{data.description}</div>
          <div className="status">status: <input type="checkbox"
                                                 checked={data.status}
                                                 onChange={() => null}/></div>
        </>
      </ModalContainer>
  )
}

export default Info;