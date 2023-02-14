import { PaperPlane, Pencil } from 'phosphor-react';
import React from 'react'
import { AppContext } from '../../App';
import { useState, useEffect, useContext , useRef} from 'react';
import axios from 'axios';
import { LinkContext } from '../LinkWrapper/LinkWrapper';


export const FakeInput = ({ text, label, id }) => {
  const ref = useRef(null);
  
  const [linkEffect, setLinkEffect] = useContext(AppContext);
  const [editing, setEditing] = useContext(LinkContext);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
        setEditing(!editing)
    }
  }

    return (
      <div className="fake-component-container" ref={ref}>
        <div className="text-container">
          <div className='label'>
            <input type="text" value={label}/>
            <div >
              <Pencil size={20} onClick={() => setEditing(!editing)} />
              <PaperPlane size={20} onClick={() => deleteLink(id)} />
            </div>
          </div>
          <div>
          <input type="text" value={text}/>
          </div>
        </div>
      </div>
    )
 
}
