//styles
import '~containers/_app.scss'

//components
import {Route, Routes} from "react-router-dom"

//containers
import Home from '@containers/Home/'
import NotFound from "../NotFound/index.jsx";
import Explore from "../Explore/index.jsx";
import Profile from "../Profile/index.jsx";
import Search from "../Search/index.jsx";
import Terms from "../Terms/index.jsx";
import FullView from "../FullView/index.jsx";

//layouts
import Topbar from "@layouts/TopBar/"

function App() {

    return (
        <>

            <Topbar/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/explore" element={<Explore/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/terms" element={<Terms/>}/>
                    <Route path="/art:id" element={<FullView/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
        </>


    )
}

export default App
