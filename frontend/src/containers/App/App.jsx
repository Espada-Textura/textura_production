import '../../sass/containers/_app.scss'
import {Route, Routes} from "react-router-dom"
import Home from '@containers/Home/'

function App() {

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </main>

    )
}

export default App
