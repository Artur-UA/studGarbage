import React from 'react';
import MyContext from '../Redux/context';
import {addPostActionCreator, newTextActionCreator} from '../Redux/navbarReducer'
import Friends from './friends';

const FriendsContainer = (props) => {
/*     let data = props.data.navbarPage.friends;
    let dataValue = props.data.navbarPage.texts;

    let addMessage = () => {
        props.dispatch(addPostActionCreator())
    }
 
    let onChangeArea = (text) => {
        props.dispatch(newTextActionCreator(text))
    }  */

    return (
        <MyContext.Consumer>
            { store => {
                let addMessage = () => {
                    store.dispatch(addPostActionCreator())
                }
             
                let onChangeArea = (text) => {
                    store.dispatch(newTextActionCreator(text))
                } 
                
                return (
                    <Friends newTextActionCreator={onChangeArea} addPostActionCreator={addMessage} 
                            data={store.getState().navbarPage.friends} dataValue={store.getState().navbarPage.texts}/>
                )
            }
            }
        </MyContext.Consumer>
    )
}

export default FriendsContainer;