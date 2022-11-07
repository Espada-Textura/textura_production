//styles
import '~layouts/_topbar.scss'

//components
import Logo from '@components/Logo/'
import ButtonGroup from "./ButtonGroup.jsx";
import Navigation from "./Navigation.jsx";
import SearchBar from "../../components/SearchBar/index.jsx";

//icons


export default function Topbar() {
    return (
        <header>
            <Logo/>
            <Navigation/>
            <SearchBar/>
            <ButtonGroup/>
        </header>
    )

}