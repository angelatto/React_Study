import {Link} from "react-router-dom"

const AppMenu = () => {
    return (
        <ul className="nav flex-column">
        <li className="nav-item">
            <h6 className="text-white">React Home</h6>
            <Link to="/" className="nav-link text-warning">Home</Link>

        </li>
        </ul>
    );
};

export default AppMenu;