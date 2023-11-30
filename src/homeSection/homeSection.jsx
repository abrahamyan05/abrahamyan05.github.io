import './homeSection.scss';
import img from './../images/imag.jpeg'
import { NavLink } from 'react-router-dom';
import Container from '../components/container/container';
import cv from '../files/Grigor_Abrahamyan_CV.pdf'

const HomeSection = (props) => {
    const hendleClick = (moreInfo) => {
        if (moreInfo === "Experience") {
            props.experienseRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const onButtonClick = (cv) => {
        const pdfUrl = cv;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = cv; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="homeSection home-ms" ref={props.homeRef}>
            <Container>
                <div className='homeSectionInner'>
                    <div className='info-section'>
                        <div className='info-left'>
                            <div className='portfolio-img'>
                                <div className='img-inner'>
                                    <img src={img} alt='portfolio-img' className='portfolio-img' />
                                </div>
                            </div>
                        </div>
                        <div className='info-right'>
                            <div className='text-info'>
                                <h1 className='mySelf'>
                                    I'm  <span>
                                        Grigor
                                    </span>
                                </h1>
                                <h2>
                                    <span>-</span> I'm a Web Developer and this is my first project․
                                </h2>
                                <h2>
                                    <span>-</span>I used JavaScript library ReactJs
                                </h2>
                                <p>
                                    The goal isn't to build a website. The goal is to build
                                    business. With Creative, flexible and affordable website design
                                    and development.
                                </p>
                                <div className='tooBtn'>
                                    <NavLink className='ms-btn'   onClick={() => onButtonClick(cv)} >Download CV</NavLink>
                                    <NavLink onClick={() => hendleClick("Experience")}>More Info</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mouse-bottom'>
                        <div className='mouse-inner'></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeSection;