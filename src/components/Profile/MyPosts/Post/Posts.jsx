import React from 'react';
import classes from './Posts.module.css'
//комментарии 
const Post = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src='https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'></img>
                {props.message}</div>
                <div>
                    <span>Like {props.likesCount}</span>
                </div>
        </div>
    )
}

export default Post;