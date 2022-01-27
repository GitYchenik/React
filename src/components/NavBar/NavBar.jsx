import React from 'react';
import classes from './NavBar.module.css';
//компонента левого бокового меню

const NavBar = () => {
    return (
        <nav className={classes.nav}>   {/*это необходимо что бы я перешел в класс(путь который прописан выше) и перешел в свойство .nav */}
            <div className={`${classes.item} ${classes.item_active}`}>  {/*Аналогично перешел в класс(путь который прописан выше) и перешел в свойство .item */}
                <a>Profile</a>
            </div>
            <div className={classes.item}>
                <a>Messages</a>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Setting</a>
            </div>
        </nav>
    )
}

export default NavBar;