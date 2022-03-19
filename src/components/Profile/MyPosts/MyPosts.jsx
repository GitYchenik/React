import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Posts.jsx'
//основная страница правая нижняя 
const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let addPost = () => {
        alert('Hello')
    }

    return (
        <div className={style.postBlock}>
            <div><h3>My post</h3></div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;