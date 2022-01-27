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
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;