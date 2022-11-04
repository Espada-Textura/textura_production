//styles
import './styles/Topbar.scss'

//components
import '@app/components/logo/index.jsx'

//icons
import {HiUpload, HiBell, HiPaperAirplane} from "react-icons/hi";

export default function Topbar() {
    return (
        <header>
            {/*<Logo/>*/}
            <nav>

            </nav>
            <div className={""}>
                <button className={"btn-filled btn-large"}>
                    <HiUpload className={"w-6 h-6"}/>
                    Upload
                </button>
                <button className={"btn-plain-filled icon-btn-large"}>
                    <HiBell className={"w-6 h-6"}/>
                </button>
                <button className={"btn-plain-filled icon-btn-large"}>
                    <HiPaperAirplane className={"w-6 h-6 rotate-45 translate-x-0.5"}/>
                </button>
            </div>
        </header>
    )

}