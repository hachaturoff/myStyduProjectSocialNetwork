import {BrowserRouter, Route, Routes} from "react-router-dom";
import './Wrapper.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import Events from "./components/Events/Events";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Users from "./components/Users/Users";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";



function App() {
    let dispatch = useDispatch()
    let initialized = useSelector(state => state.app.initialized)

    let getUserData = () => {
        dispatch(initializeApp())
    }

    return (
        <AppAPI
            getUserData={getUserData}
            initialized={initialized}
        />
    );
}

////////////////////////////////////////////////////////////

class AppAPI extends React.Component{

    componentDidMount() {
        this.props.getUserData()
    }

    render() {

        if (!this.props.initialized) {

           return  <Preloader/>
        }

        return <BrowserRouter>
            <div className="wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className="wrapper-content">
                    <Routes>
                        <Route path="Dialogs/*"
                               element={ <DialogsContainer/>} />
                        <Route
                            path="profile/:userId/*"
                            element={ <ProfileContainer/>} />
                        <Route
                            path="profile/*"
                            element={ <ProfileContainer/>} />
                        <Route path="Events/*" element={<Events />} />
                        <Route path="Music/*" element={<Music />} />
                        <Route path="News/*" element={<News />} />
                        <Route path="Users/*" element={<Users
                                                    initialized={this.props.initialized}
                                                />} />
                        <Route path="Login/*" element={<LoginContainer />} />
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    }
}


export default App;
