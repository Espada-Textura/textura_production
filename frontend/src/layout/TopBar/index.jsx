//styles
import '../../sass/layout/_topbar.scss'

//components
import '@app/components/Logo/index.jsx'

//icons
import {HiUpload, HiBell, HiPaperAirplane, HiChevronDown} from "react-icons/hi";

export default function Topbar() {
    return (
        <header>
            {/*<Logo/>*/}
            <nav>

            </nav>
            <div className={"flex gap-4"}>
                <button className={"btn-filled btn-large"}>
                    <HiUpload className={"w-6 h-6"}/>
                    Upload
                </button>
                <button className={"btn-plain-filled icon-btn-large"}>
                    <HiBell className={"w-6 h-6"}/>
                </button>
                <button className={"btn-plain-filled icon-btn-large"}>
                    <HiPaperAirplane className={"w-6 h-6 rotate-45 translate-x-0.5 -translate-y-0.5"}/>
                </button>
                <div className={"profile-btn"}>
                    <button className={"icon-btn-large"}>
                        <img src="frontend/src/layout/TopBar/index.jsx" alt=""/>
                    </button>
                    <HiChevronDown className={"w-6 h-6"}/>
                </div>
            </div>
        </header>
    )

}