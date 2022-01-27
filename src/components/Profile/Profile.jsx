import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx';
//основная страница правая нижняя 
const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://sun9-35.userapi.com/yqDTUSL01tK_rlXAoJlI7lKESP82QBdS9uZVWA/DP8DugK6zYs.jpg'></img>
            </div>
            <div>Avatar+description</div>
            <MyPosts />
        </div>
    )
}

export default Profile;