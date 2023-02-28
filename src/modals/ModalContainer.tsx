import React from "react";

const ModalContainer: React.FC<{onClose: () => void, children:  JSX.Element, active: boolean}> = ({onClose, children, active}) => {
  return active ? (
      <div className="modal-container">
        <div className="overlay" onClick={onClose}/>
        <div className="body">
          <button className="close" onClick={onClose} >Close</button>
          {children}
        </div>
      </div>
  ) : null
}

export default ModalContainer