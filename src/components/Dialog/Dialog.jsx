import React from 'react';
import style from './Dialog.module.css'

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog + ' ' + style.active}>
                    Dimach
                </div>
                <div className={style.dialog}>
                    Albert
                </div>
                <div className={style.dialog}>
                    Parker
                </div>
            </div>

            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>I am Progromist</div>
                <div className={style.message}>I am Peter Parker</div>
            </div>

        </div>
    )
};

export default Dialogs;