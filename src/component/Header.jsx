import '../styles/style.css';
import '../styles/tailwindcss.css';

const Header = () => {
        return (
        <div className='header'>
            <header className='headerObj'>
                <h1 className='logo'>PortFoilo</h1>
                <nav>
                    <ul className='nav-links'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Skills</a></li>
                        <li><a href='#'>Project</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header