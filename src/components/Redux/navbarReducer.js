export const ADD_POST = 'ADD_POST';
export const NEW_TEXT = 'NEW_TEXT';

const navbarReducer = (state, action) => {
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