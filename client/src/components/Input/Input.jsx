import React from 'react'

export const Input = ({name, setText, value}) => {
    let placeholder;
    if(name == "url-input") {
        placeholder = "Paste your link here"
    } else if (name == "label-input") {
        placeholder = "Add a label"
    }

    return (
        <div className={name}>
            <input type="text" onChange={(e) => setText(e.target.value)}   value={value} placeholder={placeholder} />
        </div>
    )
}
