import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Posts.jsx'
//основная страница правая нижняя 
const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value 
        props.addPost(text)
    }
    let onPostChange = () => {
        let text = newPostElement.current.value 
        props.updateNewPostText(text);
    }

    return (
        <div className={style.postBlock}>
            <div><h3>My post</h3></div>
            <div>
                <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText} />
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