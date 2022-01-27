import React from 'react';
import classes from './Posts.module.css'
//комментарии 
const Post = () => {
    return (
        <div>
            <div className={classes.item}>
                <img src='https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'></img>
                post1</div>
                <div>
                    <span>Like</span>
                </div>
        </div>
    )
}

export default Post;