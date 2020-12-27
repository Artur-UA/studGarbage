export const PROFILE_TEXT = 'PROFILE_TEXT';

const profileReducer = (state, action) => {
    switch(action.type) {
        case PROFILE_TEXT:
            state.textBeforePost = action.textInfo;
            state.message.push({id : state.message.length + 1, name:action.textInfo, like:69})
            return state;
        default:
            return state;
    }
}

export default profileReducer;

export const profileTextActionCreator = (text) => ({type:PROFILE_TEXT, textInfo:text})
