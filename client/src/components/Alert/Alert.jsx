import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Trash } from 'phosphor-react';
import { AppContext } from '../../App';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const Alert = () => {
    const [linkEffect, setLinkEffect] = useContext(AppContext);

    //delete All
    const deleteAll = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/link/deleteALL`);
            setLinkEffect(!linkEffect)
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
                {<Trash size={40} />}
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className="AlertDialogOverlay" />
                <AlertDialog.Content className="AlertDialogContent">
                    <AlertDialog.Title className="AlertDialogTitle">Are you absolutely sure?</AlertDialog.Title>
                    <AlertDialog.Description className="AlertDialogDescription">
                        This action cannot be undone. This will permanently delete your links and remove your
                        data from our servers.
                    </AlertDialog.Description>
                    <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                        <AlertDialog.Cancel asChild>
                            <button className="Button mauve">Cancel</button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action asChild>
                            <button className="Button red" onClick={() => deleteAll()}>Yes, delete ALL links</button>
                        </AlertDialog.Action>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}
