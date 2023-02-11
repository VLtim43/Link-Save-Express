import React from 'react'
import { useState, useEffect } from 'react';

export const LinkComponent = ({text, label}) => {

  function TruncateLink(link ) {
  const [truncatedLink, setTruncatedLink] = useState(link);

  useEffect(() => {
    const handleResize = () => {
      const maxLength = window.innerWidth < 1800 ? 110 : 155;
      setTruncatedLink(link.length > maxLength
        ? link.substr(0, maxLength) + '...'
        : link
      );
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [link]);

  return <a href={link} target="_blank">{truncatedLink}</a>;
}
  

  return (
    <div className="component-container">
        <div className="text-container">
          <p>{label}</p>
          <div>
            {TruncateLink(text)}
          </div>
        </div>
    </div>
  )
}
