import React from 'react'
import { LinkComponent } from '../LinkComponent/LinkComponent'
import { FakeInput } from '../FakeInput/FakeInput'
import { useState, useEffect, createContext } from 'react';

export const LinkContext = createContext()

export const LinkWrapper = ({ link }) => {

    function TruncateLink(link ) {
        const [truncatedLink, setTruncatedLink] = useState(link);
      
        useEffect(() => {
          const handleResize = () => {
            const maxLength = window.innerWidth < 1800 ? 105 : 150;
            setTruncatedLink(link.length > maxLength
              ? link.substr(0, maxLength) + '...'
              : link
            );
          };
          handleResize();
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, [link]);

        return truncatedLink
    }

    const [editing, setEditing] = useState(true)
    return (
        <LinkContext.Provider value={[editing, setEditing]}>
            {editing ?
             <LinkComponent text={TruncateLink(link.text)} label={link.label} key={link._id} id={link._id} editing={setEditing}
            /> : 
             <FakeInput text={TruncateLink(link.text)} label={link.label} key={link._id} id={link._id} editing={setEditing}
            />}
        </LinkContext.Provider>
    )
}
