import { XSquare, Pencil } from 'phosphor-react';
import React from 'react'
import { AppContext } from '../../App';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { LinkContext } from '../LinkWrapper/LinkWrapper';


export const LinkComponent = ({ text, label, id }) => {
  const [linkEffect, setLinkEffect] = useContext(AppContext);
  const [editing, setEditing] = useContext(LinkContext);


  //delete link
  const deleteLink = async (id) => {
    try {
      const response = await axios.delete(`https://link-save-backend.onrender.com/link/delete/${id}`);

      setLinkEffect(!linkEffect)
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

    return (
      <div className="component-container">
        <div className="text-container">
          <div className='label'>
            <p>{label}</p>
            <div >
              <Pencil size={20} onClick={() => setEditing(!editing)} />
              <XSquare size={20} onClick={() => deleteLink(id)} />
            </div>
          </div>
          <div>
            <div>{"• " + text}</div>
          </div>
        </div>
      </div>
    )
 
}
