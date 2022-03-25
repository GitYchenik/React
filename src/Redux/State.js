import rerenderEntireTree from '../render.js' 


let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'It My first post', likesCount: 0 },
            { id: 2, message: 'Hi, how are you ?', likesCount: -155 },
            { id: 3, message: 'Ты че забыл тут?', likesCount: 2000000 },
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Albert' },
            { id: 3, name: 'Peter' },
        ],
        messages: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'I am Progromist' },
            { id: 3, message: 'I am Peter Parker' },
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,//ранее был message
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
    }


export default state;