import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          {/* <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" /> */}
          COVID-19-API
        </span>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};
