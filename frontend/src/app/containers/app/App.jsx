import './styles/App.scss'
import {Route, Routes} from "react-router-dom";
import HomePage from '@app/containers/home_page/';

function App() {

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </main>

    )
}

export default App
