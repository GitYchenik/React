import React from 'react';
import style from '../Dialog.module.css'
import { NavLink } from 'react-router-dom';

const DialogItems = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={'/Dialog/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItems;