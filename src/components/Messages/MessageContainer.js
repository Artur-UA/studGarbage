import React from 'react';
import MyContext from '../Redux/context';
import { dialogTextActionCreator, dialogTextSendActionCreator } from '../Redux/messageReducer';
import Messages from './Message'

const MessagesContainer = () => {

/*     let text = props.state.messagePage.textTest;
    let item = props.state.messagePage.people;
    let mes = props.state.messagePage.dialogs;

    const changedMessage = (text) => {
        props.dispatch(dialogTextActionCreator(text))
    }

    const changedRender = () => {
        props.dispatch(dialogTextSendActionCreator())
    } */

    return (
        <MyContext.Consumer>
            {store => {
                const changedMessage = (text) => {
                    store.dispatch(dialogTextActionCreator(text))
                }
                const changedRender = () => {
                    store.dispatch(dialogTextSendActionCreator())
                }
                return (
                    <Messages dialogTextActionCreator={changedMessage} dialogTextSendActionCreator={changedRender} 
                                value = {store.getState().messagePage.textTest} item={store.getState().messagePage.people} 
                                mes={store.getState().messagePage.dialogs}/>   )
            }}
        </MyContext.Consumer>
    )
}

export default MessagesContainer;