import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//основная страница правая нижняя 
const Profile = (props) => {

    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText= {props.profilePage.newPostText} />
        </div>
    )
}

export default Profile;