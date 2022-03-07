import React from 'react';
import style from './Dialog.module.css'
import DialogItems from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItems name={d.name} id={d.id} />)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>

        </div>
    )
};

export default Dialogs;