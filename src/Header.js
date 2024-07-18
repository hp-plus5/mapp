import logo_map from './images/logo_map.svg';
import UserAuthentication from './UserAuthentication';
import './Header.scss';

function Header() {
    return (
    <header>
        <img src={logo_map} className="mapp-logo" alt="mapp logo" />
        <span>
          <h1 className="title">Mapp</h1>
          <h3 className="byline">Think It, Mapp It, Make It</h3>
        </span>
        <span className="user_tools">
          <UserAuthentication />
        </span>
      </header>
    );
}

export default Header;