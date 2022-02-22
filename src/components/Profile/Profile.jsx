import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//основная страница правая нижняя 
const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;