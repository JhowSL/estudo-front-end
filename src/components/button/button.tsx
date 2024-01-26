import React from 'react'

interface ButtonEventsProps {
  onClick: () => void
  nameButton: string
}

const ButtonEvents: React.FC<ButtonEventsProps> = ({ onClick, nameButton }) => {
  return <button onClick={onClick}>{nameButton}</button>
}

export default ButtonEvents
