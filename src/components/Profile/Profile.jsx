import React from 'react';
import Post from './Post/Post'
//import Dialogs from '../Message/Dialogs/Dialogs'

const Profile = (state) => {
console.log(state);
  const messages = state.message.message;

   const mess = messages.map(message => <Post name={message.name} like={message.like}/>)
  
    return (
      <div className='content'>
        <div>
          <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt="альтернативный текст"/>
        </div>

        <div className="post">


            {mess}
            <div>
                <img className='avatar' src="https://chto-takoe-lyubov.net/wp-content/uploads/2019/12/Pyatachok-zagadki.jpg" width="100" height="100" alt="альтернативный текст"/>Halo
            </div>
            <div>
                post 2
            </div>
        </div>
        

      </div>
    )
}

export default Profile;