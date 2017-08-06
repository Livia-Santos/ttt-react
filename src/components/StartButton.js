import React from 'react'

const StartButton = ({onClick, title}) => (
  <div className="separator">
    <button className="btn btn-success center-block" onClick={onClick}>
      {title}
    </button>
  </div>

)

export default StartButton;
