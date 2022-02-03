import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Posts.jsx'
//основная страница правая нижняя 
const MyPosts = () => {
    return (
        <div>
            <div>My post</div>
            <div>New post</div>
            <textarea></textarea>
            <button>Add post</button>
            <div className={classes.posts}>
                <Post message='It My first post' likesCount='0'/> 
                <Post message='Hi, how are you ?' likesCount='20'/>
                <Post message='Ты че забыл тут?'likesCount='100 005' />

            </div>
        </div>
    )
}

export default MyPosts;