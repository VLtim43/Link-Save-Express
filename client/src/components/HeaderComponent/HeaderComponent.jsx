import React from 'react'
import { useState, useContext } from "react";

export const HeaderComponent = (props) => {
  const [text, setText] = useState("");
  const [label, setLabel] = useState("");


  return (
    <header className='header-component'>


      <form onSubmit={(event) => { 
        event.preventDefault();
        props.createLink(text, label, [])
        setText("");
        setLabel("");
        }}>
        <div className="url-input">
          <input type="text"  onChange={(e) => setText(e.target.value)}   value={text} />
        </div>
        <div className="label-input">
          <input type="text"  onChange={(e) => setLabel(e.target.value)} value={label} />
        </div>
        <button disabled={!text} className="send-button" type="submit">Submit</button>
      </form>

    </header>
  )
}
