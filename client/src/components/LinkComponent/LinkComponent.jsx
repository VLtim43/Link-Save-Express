import { XSquare, Pencil } from 'phosphor-react';
import React from 'react'
import { AppContext } from '../../App';
import { useState, useEffect, useContext } from 'react';
import { FakeInput } from '../FakeInput/FakeInput';
import axios from 'axios';


export const LinkComponent = ({ text, label, id }) => {
  const [linkEffect, setLinkEffect] = useContext(AppContext);
  const [test, useTest] = useState(false)

  


  //edit given link
  const editLink = () => {

  }

  //delete link
  const deleteLink = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/link/delete/${id}`);

      setLinkEffect(!linkEffect)
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };



  if(test) {
    return (
      <div className="component-container">
        <div className="text-container">
          <div className='label'>
            <p>{label}</p>
            <div id={test ? "true" : "false"}>
              <Pencil size={20} onClick={() => useTest(!test)} />
              <XSquare size={20} onClick={() => deleteLink(id)} />
            </div>
          </div>
          <div>
            <FakeInput text={text}/>
          </div>
        </div>
      </div>
    )
  
  } else {
    return (
      <div className="component-container">
        <div className="text-container">
          <div className='label'>
            <p>{label}</p>
            <div id={test ? "true" : "false"}>
              <Pencil size={20} onClick={() => useTest(!test)} />
              <XSquare size={20} onClick={() => deleteLink(id)} />
            </div>
          </div>
          <div>
            <p>{text}</p>
          </div>
        </div>
      </div>
    )
  
  }
 

}
