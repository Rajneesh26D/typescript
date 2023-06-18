import React from 'react'

type InputFieldProps = {
  type: string,
  placeholder?: string,
  label: string,
  inputLabel: 'topAligned-label' | 'adaptive-label'
  box: 'outlined' | 'underlined'
};


const LabeledInput:React.FC<InputFieldProps> = ({type, label, inputLabel, box}) => {
  return (
    <div className="container">
      <div className="inner-container">
        <label  className={`label ${inputLabel}`}>{label}</label>
        <input  type={type} className={`input-box ${box}`} />
      </div>


    </div>
  )
};

export default LabeledInput