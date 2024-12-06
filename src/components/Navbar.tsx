import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/patients">Liste des Patients</Link></li>
                <li><Link to="/add-patient">Ajouter un Patient</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;