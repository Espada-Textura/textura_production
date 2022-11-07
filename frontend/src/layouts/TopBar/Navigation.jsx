import {Link} from "react-router-dom";

export default function Navigation(){
    return (
        <nav className={"navigation-bar"}>
            <ul>
                <li>
                    <Link to={"/home"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={"/explore"}>
                        Explore
                    </Link>
                </li>
                <li>
                    <Link to={"/challenges"}>
                        Challenges
                    </Link>
                </li>
                <li>
                    <Link to={"/forum"}>
                        Forum
                    </Link>
                </li>
            </ul>
        </nav>
    )
}


