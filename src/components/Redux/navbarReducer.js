export const ADD_POST = 'ADD_POST';
export const NEW_TEXT = 'NEW_TEXT';

const initialState = {
    friends: [
        {id:1, name:"Matroskin", img:'https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg'},
        {id:2, name:"Sharik", img:'https://demiart.ru/forum/uploads19/post-82312-1489784448.jpg'},
        {id:3, name:"Pechkin", img:'https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg'},
    ],
    texts: 'Хай'
}

const navbarReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            state.friends.push({
                id : state.friends.length +1, name : state.texts, img : 'https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg'
            })
            state.texts=''
            return state;
        case NEW_TEXT:
            state.texts = action.text;
            return state;
        default:
            return state;
    }
}

export default navbarReducer;

export const addPostActionCreator = () => ({type:ADD_POST})

export const newTextActionCreator = (text) => ({type:NEW_TEXT, text:text})