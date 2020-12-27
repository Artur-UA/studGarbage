import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Message'
import {BrowserRouter, Route} from 'react-router-dom'


const App = (props) => {
    return ( 
        <BrowserRouter >
            <div className = 'app-wrapper' >
                <Header / >
                <Navbar data={props.state.navbarPage} 
                        dispatch={props.dispatch}
                        /* info={props.addInfo} 
                        infoText={props.text} */ />
                    <div>
                        <Route path='/profile' render={()=> <Profile message={props.state}
                                                                    dispatch={props.dispatch}
                                                                    /* profileText2={props.profileText1} *//>}/>

                        <Route path='/message' render={()=> <Messages info={props.state} 
                                                                    /*  message={props.state.profilePage} 
                                                                    img={props.state.profilePage}  */
                                                                    dispatch={props.dispatch}/>}/>
                    </div>
            </div> 
        </BrowserRouter>  
    )
}

export default App;