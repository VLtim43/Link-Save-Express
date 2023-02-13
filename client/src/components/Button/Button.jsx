import React from 'react'

export const Button = ({text, buttontext}) => {
    
  return (
    <button disabled={!text} className={`send-button ${text ? "on" : "off"}`} type="submit">{buttontext}</button>
  )
}
