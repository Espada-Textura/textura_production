//icons
import {HiSearch} from "react-icons/hi";
import {useState} from "react";


export default function SearchBar() {

    const [state, setState] = useState("");

    const handleChange = (event) => {
        setState(() => event.target.value)
    }

    const handleSubmit = (event) => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type={"text"}
                placeholder={"Search for digital arts, cultural, anime, etc."}
                name={"search"}
                value={state}
                onChange={handleChange}
            />
            <button className={"icon-btn-large"} onClick={handleSubmit}>
                <HiSearch className={"w-6 h-6"}/>
            </button>
        </form>
    )
}