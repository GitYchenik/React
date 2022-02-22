import React from 'react';
import style from './ProfileInfo.module.css'


//основная страница правая нижняя 
const ProfileInfo = () => {
    return (
        <div>
            <img src='https://sun9-35.userapi.com/yqDTUSL01tK_rlXAoJlI7lKESP82QBdS9uZVWA/DP8DugK6zYs.jpg'></img>
            <div className={style.descriptionBlock}>Avatar+description</div>
        </div>
    )
}

export default ProfileInfo;