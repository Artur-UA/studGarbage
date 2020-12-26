import React from 'react';
import Post from './Post/Post'
//import Dialogs from '../Message/Dialogs/Dialogs'
import {profileTextActionCreator} from '../../State'

const Profile = (state) => {
    const messages = state.message.messagePage.message;

    const mess = messages.map(message => <Post name={message.name} like={message.like} />)

    let newElement = React.createRef();
    
    
    let textSend = () => {
        let text = newElement.current.value
        /* state.profileText2(text) */
        /* state.dispatch({type:'PROFILE_TEXT', textInfo:text}) */
        state.dispatch(profileTextActionCreator(text)) 
    }

    

    return (
        <div className='content'>
            <div>
                <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt="альтернативный текст" />
            </div>

            <div className="post">
                
                <div>
                    <textarea ref={newElement} 
                            value={state.message.profilePage.textTest}
                            onChange={textSend}
                            
                    />
                    <button onClick={textSend}>Жми</button>
                </div>

                {mess}
                <div>
                    <img className='avatar' src="https://chto-takoe-lyubov.net/wp-content/uploads/2019/12/Pyatachok-zagadki.jpg" width="100" height="100" alt="альтернативный текст" />Halo
            </div>
                <div>
                    post 2
            </div>
            </div>



        </div>
    )
}

export default Profile;