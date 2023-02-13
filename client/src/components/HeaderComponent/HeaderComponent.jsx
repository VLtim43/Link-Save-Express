import React from 'react'
import { useState, useContext } from "react";
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

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
        
        <Input name={"url-input"} setText={setText} value={text}/>
        <Input name={"label-input"} setText={setLabel} value={label}/>

        <Button buttontext={"Submit"} text={text}/>
      </form>

    </header>
  )
}
