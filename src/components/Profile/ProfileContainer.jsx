import React from 'react';
import MyContext from '../Redux/context';
import {profileTextActionCreator} from '../Redux/profileReducer'
import Profile from './Profile';


const ProfileContainer = () => {
    /* const messages = state.state.profilePage.message;
    const messagesValue = state.state.profilePage.textBeforePost;

    let textSend = (text) => { 
        state.dispatch(profileTextActionCreator(text)) 
    } */
    return ( 
        <MyContext.Consumer>
            { store => {
                    let textSend = (text) => { 
                        store.dispatch(profileTextActionCreator(text)) 
                    }
                
                    return (<Profile profileTextActionCreator={textSend} 
                                        messages={store.getState().profilePage.message} 
                                        messagesValue={store.getState().profilePage.textBeforePost}/>)
                }
            }

        </MyContext.Consumer>
        )
}

export default ProfileContainer;