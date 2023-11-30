import "./footer.scss"
import SocialMedia from "../components/socialMedia/socialMedia";
import Container from "../components/container/container";




const Footer = () => {
    return (
        <footer className="footerContainer">
            <Container>
                <div className="footerInner">
                    <div className="footerLeft">
                        <h4>
                            Copyright ©
                            <span>GA_Web_Dev</span>
                            all rights reserved.
                        </h4>
                    </div>
                    <div className="footerRight">
                        <ul>
                            <SocialMedia />
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;