import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';


function Footer() {
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento <strong>Semana DevSuperior</strong>
            <div className="footer-icons">
                <a href="youtube">
                    <YouTubeIcon />
                </a>
                <a href="linkedin">
                    <LinkedInIcon />
                </a>
                <a href="instagram">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;