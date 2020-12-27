export const DIALOG_TEXT = 'DIALOG_TEXT';
export const DIALOG_TEXT_SEND = 'DIALOG_TEXT_SEND';

const messageReducer = (state, action) => {
    switch(action.type) {
        case DIALOG_TEXT: 
        
            state.textTest = action.infoText;
            return state;
        case DIALOG_TEXT_SEND: 
            state.dialogs.push({id : state.dialogs.length +1, message : state.textTest})
            state.textTest = ''; 
            return state;
        default: 
            return state
    }
}

export default messageReducer;

export const dialogTextActionCreator = (info) => ({type : DIALOG_TEXT, infoText: info})

export const dialogTextSendActionCreator = () => ({type: DIALOG_TEXT_SEND})