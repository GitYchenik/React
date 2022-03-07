<<<<<<< HEAD
let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'It My first post', likesCount: 0 },
            { id: 2, message: 'Hi, how are you ?', likesCount: -155 },
            { id: 3, message: 'Ты че забыл тут?', likesCount: 2000000 },
        ],
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
=======
let posts = [
    { id: 1, message: 'It My first post', likesCount: 0 },
    { id: 2, message: 'Hi, how are you ?', likesCount: -155 },
    { id: 3, message: 'Ты че забыл тут?', likesCount: 2000000 },
]

let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Albert' },
    { id: 3, name: 'Peter' },
]

let messages = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'I am Progromist' },
    { id: 3, message: 'I am Peter Parker' },
]

let state = {
    posts: [
        { id: 1, message: 'It My first post', likesCount: 0 },
        { id: 2, message: 'Hi, how are you ?', likesCount: -155 },
        { id: 3, message: 'Ты че забыл тут?', likesCount: 2000000 },
    ],
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
>>>>>>> d19c44184e7538d69e4342f4bce1461ae4a47719
}

export default state;