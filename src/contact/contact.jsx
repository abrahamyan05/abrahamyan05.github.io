import "./contact.scss"
import GoogleMapComponent from "../components/googleMap/googleMap";
import ContactForm from "../components/form/form";
import Container from "../components/container/container";



const Contact = (props) => {

    return (
        <div className="contactContainer" ref={props.contactRef}>
            <Container>
                <div className="contactInner">
                    <h2 className="title">Get in
                        <span className="touch">Touch</span>
                    </h2>
                    <div className="contactInfo">
                        <div className="contactMap">
                            <GoogleMapComponent />
                        </div>
                        <div className="contactForm">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Contact;