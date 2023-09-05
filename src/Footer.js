import './Footer.scss';

function Footer() {
    return (
        <footer>
            <div className="left">
                <h3>Danger Warner</h3>
                <p>This is the content of a Danger Warner.</p>
            </div>
            <div className="right">
                <a href="/#">About</a>
                <a
                className="link"
                href="https://linkedin.com/in/sam-warner"
                target="_blank"
                rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                className="link"
                href="https://github.com/hp-plus5"
                target="_blank"
                rel="noopener noreferrer"
                >
                  See the Code
                </a>
                <a className="link"
                href="mailto:y1bpdyns@duck.com?subject=Mapp Bug Report"
                target="_blank"
                rel="noopener noreferrer"
                >
                  Report a problem
                </a>
                <a href="/#">Curious today, are we?</a>
            </div>
        </footer>
    );
}

export default Footer;