import React from 'react';
import './Profice.css'
import {NavLink} from 'react-router-dom'
//import {ItemMess} from './DialogsItem';

const Dialogs = (props) => {

    let item = props.info;
    let mes = props.message;

    let dialogsPeople = item.map(items => <div><NavLink  to={`/message/${items.id}`}>{items.message}</NavLink></div>)

    let dialogsMessages = mes.map(ItemMess => <div>{ItemMess.message}-{ItemMess.id}</div>)

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