/* import {renderPage} from './index' */
/* 
let renderPage = () => {
    console.log('render');
}

let state = {
    profilePage:{
        people: [
            {id:1, message:'Привет', img:"https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg"},
            {id:2, message:'Приве', img:"https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg"},
            {id:3, message:'Прив', img:"https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg"},
            {id:4, message:'При', img:"https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg"},
            {id:5, message:'Пр', img:"https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg"},
            {id:6, message:'П', img:"https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg"}
        ],
        dialogs: [
            {id:1, message:'Пока'},
            {id:2, message:'Пок'},
            {id:3, message:'По'},
            {id:4, message:'П'}
        ],
        textTest:''
    },
    messagePage: {
        message:[
        {id:1, name:'Хелло', like:3},
        {id:2, name:'Прив', like:22},
        {id:3, name:'Че', like:0},
        {id:4, name:'Хало', like:9}
        ]
    },
    navbarPage: {
        friends: [
            {id:1, name:"Matroskin", img:'https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg'},
            {id:2, name:"Sharik", img:'https://demiart.ru/forum/uploads19/post-82312-1489784448.jpg'},
            {id:3, name:"Pechkin", img:'https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg'},
        ],
        texts: ''
    }

}
export let addPost = (info) => {
    state.navbarPage.friends.push({
        id:4, name:info, img:'https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg'
    })
    renderPage(state);

}

export let newText = (text) => {
    state.navbarPage.texts = text;
    renderPage(state);
    console.log(state);
}




export let profileText = (textInfo) => {
    state.profilePage.textTest = textInfo;
    state.messagePage.message.push({id:5, name:textInfo, like:69})
    console.log(state);
    renderPage(state);
}

export const restartingAPP = (func) => {
    renderPage = func;
}


export default state;








 */



let store = {
    _state: {
        profilePage:{
            people: [
                {id:1, message:'Привет', img:"https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg"},
                {id:2, message:'Приве', img:"https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg"},
                {id:3, message:'Прив', img:"https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg"},
                {id:4, message:'При', img:"https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg"},
                {id:5, message:'Пр', img:"https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg"},
                {id:6, message:'П', img:"https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg"}
            ],
            dialogs: [
                {id:1, message:'Пока'},
                {id:2, message:'Пок'},
                {id:3, message:'По'},
                {id:4, message:'П'}
            ],
            textTest:''
        },
        messagePage: {
            message:[
            {id:1, name:'Хелло', like:3},
            {id:2, name:'Прив', like:22},
            {id:3, name:'Че', like:0},
            {id:4, name:'Хало', like:9}
            ]
        },
        navbarPage: {
            friends: [
                {id:1, name:"Matroskin", img:'https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg'},
                {id:2, name:"Sharik", img:'https://demiart.ru/forum/uploads19/post-82312-1489784448.jpg'},
                {id:3, name:"Pechkin", img:'https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg'},
            ],
            texts: ''
        }
    },
    _callSubscriber() {
        console.log('render');
    },
    getState(){
        return this._state
    },
    dispatch(action) {
        if(action.type ==='ADD_POST'){
            this._state.navbarPage.friends.push({
                id:4, name:action.info, img:'https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg'
            })
            this._callSubscriber(this._state);
        } else if (action.type ==='NEW_TEXT'){
            debugger;
            this._state.navbarPage.texts = action.text;
            this._callSubscriber(this._state);
            console.log(this._state);
        } else if(action.type ==='PROFILE_TEXT'){
            this._state.profilePage.textTest = action.textInfo;
            this._state.messagePage.message.push({id:5, name:action.textInfo, like:69})
            console.log(this._state);
            this._callSubscriber(this._state);
        }
    },

/* 
    addPost(info) {
        this._state.navbarPage.friends.push({
            id:4, name:info, img:'https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg'
        })
        this._callSubscriber(this._state);
    },
    newText(text) {
        this._state.navbarPage.texts = text;
        this._callSubscriber(this._state);
        console.log(this._state);
    },
    profileText(textInfo) {
        this._state.profilePage.textTest = textInfo;
        this._state.messagePage.message.push({id:5, name:textInfo, like:69})
        console.log(this._state);
        this._callSubscriber(this._state);
    }, */
    restartingAPP(func) {
        this._callSubscriber = func;
    }
}

export default store;