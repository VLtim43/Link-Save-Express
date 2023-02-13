import React from 'react'
import { DotsNine } from "phosphor-react";
import { Alert } from '../Alert/Alert';
export const SideBar = ({ title }) => {


    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <div className="header">
                    <DotsNine weight="bold" />
                    <h2>{title}</h2>
                </div>


                <div className='delete'>
                    <Alert/>
                </div>
            </div>
        </div>
    )
}
