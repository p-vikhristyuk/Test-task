import React from "react";

interface IFormControl {
  displayError?: boolean,
  errorText?: string,
  type?: string,
  value: string,
  onChange: (value: string) => void,
  placeholder?: string,
}

const FormControl: React.FC<IFormControl> = ({
  displayError,
  type,
  value,
  errorText,
  onChange,
  placeholder
}) => {
  return(
      <div className="form-control">
        <input type={type ?? "text"}
               className={"input" + (displayError ? " error" : "")}
               onChange={(e) => onChange(e.target.value)}
               placeholder={placeholder}
               value={value} />
        {errorText && displayError && <span className="error">{errorText}</span>}
      </div>
  )
}

export default FormControl;