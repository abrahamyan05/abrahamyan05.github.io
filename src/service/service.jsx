import './service.scss'
import { BiCodeAlt } from 'react-icons/bi';
import { AiOutlineAim, AiOutlineAntDesign, AiOutlineDesktop } from "react-icons/ai";
import Container from '../components/container/container';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';


const Service = () => {

    const serviceList = [
        {
            logo: <AiOutlineAntDesign />,
            title: "Graphics Design",
            text: "Develop the Visual Identity of Your Business"
        },
        {
            logo: <AiOutlineDesktop />,
            title: "Web Design",
            text: "Connect With Your Users, Not Just Your Business."
        },
        {
            logo: <BiCodeAlt />,
            title: "Development",
            text: "We Develop the Visual Identity of Your Business."
        },
        {
            logo: <AiOutlineAim />,
            title: "Seo Friendly",
            text: "Taking your site at the top of Google's ranking."
        }
    ]

    const {ref: myRocket, inView: ElIsVisible} = useInView({ threshold: 0.3 });

    const myRef = useRef()

    useEffect(() => {
       if(ElIsVisible){
        myRef.current.classList.add('animation')
       }

    }, [ElIsVisible])


    return (
        <div className="serviceContainer" ref={myRocket}>
            <Container>
                <div className='serviceInner' ref={myRef}>
                    {
                        serviceList.map(({ logo, title, text }, index) => (
                            <div className="serviceBox" key={index}>
                                <div className='logo'>
                                    {logo}
                                </div>
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Service;