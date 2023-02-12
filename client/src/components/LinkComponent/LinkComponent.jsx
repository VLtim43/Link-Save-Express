import { XSquare } from 'phosphor-react';
import React from 'react'
import { AppContext } from '../../App';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';


export const LinkComponent = ({ text, label, id }) => {
  const [linkEffect, setLinkEffect] = useContext(AppContext);

  function TruncateLink(link) {
    const [truncatedLink, setTruncatedLink] = useState(link);

    useEffect(() => {
      const handleResize = () => {
        const maxLength = window.innerWidth < 1800 ? 105 : 150;
        setTruncatedLink(link.length > maxLength
          ? "• " + link.substr(0, maxLength) + '...'
          : "• " + link
        );
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [link]);

    return <a href={link} target="_blank">{truncatedLink}</a>;
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


  return (
    <div className="component-container">
      <div className="text-container">
        <div className='label'>
          <p>{label}</p>
          <XSquare size={20} onClick={() => deleteLink(id)} />
        </div>

        <div>
          {TruncateLink(text)}
        </div>
      </div>
    </div>
  )
}
