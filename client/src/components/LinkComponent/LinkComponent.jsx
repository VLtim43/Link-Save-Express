import React from 'react'

export const LinkComponent = ({text, label}) => {

  function TruncateLink(link) {
    const maxLength = 115
    const truncatedLink = link.length > maxLength
      ? link.substr(0, maxLength) + '...'
      : link;
  
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
