import React from 'react';
import style from './Dialog.module.css'
import DialogItems from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Dimych' }, 
        { id: 2, name: 'Albert' },
        { id: 3, name: 'Peter' },
    ]

    let messages = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'I am Progromist' },
        { id: 3, message: 'I am Peter Parker' },
    ]

    let dialogsElements = dialogs.map(d => <DialogItems name={d.name} id={d.id} />)
    let messagesElements = messages.map(m => <Message message={m.message} />)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
            </div>

        </div>
    )
};

export default Dialogs;