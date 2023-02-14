import React from 'react'
import { useState, useEffect, useContext } from 'react';

/* function TruncateLink(link) {
    
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
}
 */


export const FakeInput = ({ text }) => {
    const [truncatedLink, setTruncatedLink] = useState(text);
    const [inputValue, setInputValue] = useState(truncatedLink);

    //truncates long links
    useEffect(() => {
        const handleResize = () => {
            const maxLength = window.innerWidth < 1800 ? 105 : 150;
            setTruncatedLink(text.length > maxLength
                ? "• " + text.substr(0, maxLength) + '...'
                : "• " + text
            );
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [text]);


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <input className='fake-input' type="text" value={inputValue} onChange={handleInputChange} />
    )
}
