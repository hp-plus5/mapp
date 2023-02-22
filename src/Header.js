import logo from './logo.svg';
import './Header.scss';

function Header() {
    return (
    <header>
        <span>
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="title">
            Learning React
          </h1>
        </span>
        <div>
          <a
            className="link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            See docs here
          </a>
        </div>
      </header>
    );
}

export default Header;