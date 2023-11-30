import { useInView } from 'react-intersection-observer';
import Container from '../components/container/container';
import ListTitle from '../components/listContact/listContact';
import ListSkills from '../components/listSkills/listSkills';
import './about.scss'
import { useEffect, useRef } from 'react';


const About = (props) => {

    const { ref: myRocet, inView: ElIsVisible } = useInView({ threshold: 0.5 })
    const myRef = useRef()

    useEffect(()=> {
        if(ElIsVisible){
            myRef.current.classList.add("animation")
        }

    }, [ElIsVisible])


    return (
        <div className="aboutConteiner" ref={props.aboutRef}>
            <Container>
                <div className='aboutInner'>
                    <h1 className='aboutMe'>About
                        <span> Me</span>
                    </h1>
                    <div className='aboutInfo'>
                        <div className='aboutLeft'>
                            <div className='info'>
                                <div className='activity'>
                                    <h2>About myself</h2>
                                    <p>
                                        I’m a purposeful and hard-working person who is ready for new
                                        challenges. Programming is my second profession. I believe that
                                        collaboration in a team and hard work can help to achieve success.
                                        Eager to obtain a challenging position at a company that will
                                        expand my learning and grow up my skills.
                                    </p>
                                </div>

                                <div className='contact'>
                                    <ul>
                                        <ListTitle />
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='aboutRight' ref={myRocet}>
                            <ul ref={myRef} className='ulRight ' >
                                <ListSkills />
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;