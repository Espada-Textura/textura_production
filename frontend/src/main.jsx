//react
import React from 'react'
import ReactDOM from 'react-dom/client'

//styles
import './index.scss'

//components
import {BrowserRouter} from "react-router-dom";
import App from './app/containers/app/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <BrowserRouter>
            <App/>
        </BrowserRouter>

    </React.StrictMode>
)
