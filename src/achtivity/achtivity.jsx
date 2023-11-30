import { useInView } from 'react-intersection-observer';
import Container from '../components/container/container';
import './achtivity.scss'
import { useEffect, useRef } from 'react';


const Achtivity = (props) => {

    const {ref: myRocet, inView: ElIsVisible} = useInView({threshold: 0.3})
    const {ref: myRocetEx, inView: ElIsVisibleEx} = useInView({threshold: 0.3})

    const firstRefEd = useRef()
    const secondRefEx = useRef()


    useEffect(() => {
        if(ElIsVisible){
            firstRefEd.current.classList.add("animation")
        }
        if(ElIsVisibleEx){
            secondRefEx.current.classList.add("animationEx")
        }
    }, [ElIsVisible, ElIsVisibleEx])


    return (
        <div className='achtiveContainer' ref={props.experienseRef}>
            <Container>
                <div className='achtiveInner'>
                    <h3>My <span>Achievements</span></h3>
                    <div className='main'>
                        <div className='education' ref={myRocet}>
                            <h4 className='title'>Education</h4>
                            <ul ref={firstRefEd}>
                                <li>
                                    <div className='timeLine-info'>
                                        <span>2016 - 2020</span>
                                    </div>
                                    <div className='timeLine-content'>
                                        <h5>Yerevan State University
                                            <span>- YSU</span>
                                        </h5>
                                        <p>
                                            Faculty of Mathematics and Mechanics
                                            <br></br>
                                            Profession: Mathematics
                                        </p>
                                    </div>
                                    <div className='timeLine-marker'></div>
                                </li>
                                <li>
                                    <div className='timeLine-info'>
                                        <span>2021 - 2022</span>
                                    </div>
                                    <div className='timeLine-content'>
                                        <h5>Programming trainings
                                        </h5>
                                        <p>
                                            Python Programming (basics)<br></br>
                                            SAS Programming (basics)
                                        </p>
                                    </div>
                                    <div className='timeLine-marker'></div>
                                </li>
                                <li>
                                    <div className='timeLine-info'>
                                        <span>2022 - 2022</span>
                                    </div>
                                    <div className='timeLine-content'>
                                        <h5>BEEONCODE
                                            <span>"Software Development Companies"</span>
                                        </h5>
                                        <p>
                                            Software Development
                                        </p>
                                    </div>
                                    <div className='timeLine-marker'></div>
                                </li>
                            </ul>
                        </div>
                        <div className='experiense' ref={myRocetEx}>
                            <h4 className='title'>Experiense</h4>
                            <ul ref={secondRefEx}>
                                <li>
                                    <div className='timeLine-info'>
                                        <span>2019 - 2021</span>
                                    </div>
                                    <div className='timeLine-content'>
                                        <h5>Advertising and Marketing Communications
                                        </h5>
                                        <p>
                                            " NRG DESIGN " COMPANY <br></br>
                                            To create advertising plans and content to reach those demographics
                                            Design and prepare advertisements as needed
                                        </p>
                                    </div>
                                    <div className='timeLine-marker'></div>
                                </li>
                                <li>
                                    <div className='timeLine-info'>
                                        <span>June 15, 2021 - 2022</span>
                                    </div>
                                    <div className='timeLine-content'>
                                        <h5>Marketing Communications
                                        </h5>
                                        <p>
                                            " YPorject " COMPANY <br></br>
                                        </p>
                                    </div>
                                    <div className='timeLine-marker'></div>
                                </li>
                                <li>
                                    <div className='timeLine-info'>
                                        <span> 2022 - 2023</span>
                                    </div>
                                    <div className='timeLine-content'>
                                        <h5>Freelancer
                                        </h5>
                                    </div>
                                    <div className='timeLine-marker'></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Achtivity;