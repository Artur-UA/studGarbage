import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Profile/Dialogs/Dialogs'
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
                        <Route path='/profile' render={()=> <Profile message={props.state.messagePage}
                                                                    dispatch={props.dispatch}
                                                                    /* profileText2={props.profileText1} *//>}/>

                        <Route path='/message' render={()=> <Dialogs info={props.state.profilePage} 
                                                                    message={props.state.profilePage} 
                                                                    img={props.state.profilePage}/>}/>
                    </div>
            </div> 
        </BrowserRouter>  
    )
}

export default App;