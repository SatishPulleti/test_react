import {Link} from 'react-router-dom';

function Nav(){
    return(
        <nav class="navbar bg-danger">
            {/* <a href="#" class="navbar-brand">Ethnus</a> */}
            <Link to="#" class="navbar-brand text-light">Ethnus</Link>

            <div class="nav">
                {/* <a href="#" class="nav-link">Home</a>
                <a href="#/about" class="nav-link">About</a> */}
                <Link to="/" class="nav-link">Home</Link>
                <Link to="/about" class="nav-link">About</Link>
                <Link to='/contact' class="nav-link">Contact</Link>
                
            </div>
        </nav>
    )
}

export default Nav;