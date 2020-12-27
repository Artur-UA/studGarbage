import React from 'react';
import './Profice.css'
import {NavLink} from 'react-router-dom'
//import {ItemMess} from './DialogsItem';
import {profileTextActionCreator} from '../Redux/profileReducer'

const Dialogs = (props) => {
    console.log(props);
    let item = props.info.people;
    let mes = props.message.dialogs;
    

    let dialogsPeople = item.map(items => <div><NavLink  to={`/message/${items.id}`}>{items.message}<img className='avatar2' src={items.img}  alt="альтернативный текст"/></NavLink></div>)

    let dialogsMessages = mes.map(ItemMess => <div>{ItemMess.message}-{ItemMess.id}</div>)

    const refArea = React.createRef();

    const changedMessage = () => {
        let valueMessage = refArea.current.value;
        props.dispatch(profileTextActionCreator(valueMessage))
    }

    const changedRender = () => {
        let valueMessage = refArea.current.value;
        props.dispatch(profileTextActionCreator(valueMessage))
    }

    return (
        <div className="dialogs">
            <div className="dialogsName">

                {
                    dialogsPeople 
                }
            </div>


                
{/* 
                <div> 
                    <NavLink to='/message/1'>Привет</NavLink> 
                </div>
                <div> 
                    <NavLink to='/message/2'>Приве</NavLink> 
                </div>
                <div> 
                    <NavLink to='/message/3'>Прив</NavLink> 
                </div>
                <div> 
                    <NavLink to='/message/4'>При</NavLink> 
                </div>
                <div> 
                    <NavLink to='/message/5'>Пр</NavLink> 
                </div>
                <div> 
                    <NavLink to='/message/6'>П</NavLink> 
                </div> */}
            <div className="dialogsMessage">
                
                {
                    dialogsMessages
                }
                
                <textarea ref={refArea}
                        onChange={changedMessage}
                        value={props.info.textBeforePost}
                        />
                <button onClick={changedRender}>Click</button>

              {/*   {
                    ItemMess.map(ItemMess => {
                        return (
                            <div>{ItemMess.message}-{ItemMess.id}</div>
                        )
                    })
                } */}
                {/* <div> Пока</div> 
                <div> Пок</div>
                <div> По</div>
                <div> П</div> */}
            </div>
            
        </div>
    )
}

export default Dialogs;