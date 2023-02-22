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
                <a href="/#">Contact Us</a>
                <a href="/#">See the Code</a>
                <a href="/#">Curious today, are we?</a>
            </div>
        </footer>
    );
}

export default Footer;