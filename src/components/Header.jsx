import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  
  return (
    <header className='header'>
      <nav className='nav'>
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Главная</Link>
        <Link to="/advice" className={`nav-link ${location.pathname === '/advice' ? 'active' : ''}`}>Советы родителям</Link>
        <Link to="/literature" className={`nav-link ${location.pathname === '/literature' ? 'active' : ''}`}>Список литературы</Link>
        <Link to="/feedback" className={`nav-link ${location.pathname === '/feedback' ? 'active' : ''}`}>Обратная связь</Link>
      </nav>
    </header>
  );
}

export default Header;