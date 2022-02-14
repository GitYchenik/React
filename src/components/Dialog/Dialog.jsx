import React from 'react';
import style from './Dialog.module.css'
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog + ' ' + style.active}>
                <NavLink to='/Dialog1'>Dimach</NavLink>
                </div>
                <div className={style.dialog}>
                <NavLink to='/Dialog2'>Albert</NavLink>
                </div>
                <div className={style.dialog}>
                <NavLink to='/Dialog3'>Peter</NavLink>
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