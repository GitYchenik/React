import React from 'react';
import classes from './Header.module.css';
//отвечает за верхнюю строку
const Header = () => {
    return (
        <header className={classes.header}> {/*это необходимо что бы я перешел в класс(путь который прописан выше) и перешел в свойство .header */}
            <img src='https://media.cdnandroid.com/fc/18/54/5a/imagen-free-image-converter-0big.jpg'></img>
        </header>
    )
}

export default Header;