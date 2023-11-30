import { useInView } from "react-intersection-observer";
import Container from "../components/container/container";
import "./portfolio.scss"
import { useEffect, useRef } from "react";


const PortfolioItems = (props) => {

 

    const Items = [
        {
            img: "https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/portfolio/11.jpg",
            title1: "3D Graphics",
            title2: "Templates",
        },
        {
            img: "https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/portfolio/22.jpg",
            title1: "Web Design"
        },
        {
            img: "https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/portfolio/33.jpg",
            title1: "Web Design"
        },
        {
            img: "https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/portfolio/44.jpg",
            title1: "Development"
        },
        {
            img: "https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/portfolio/55.jpg",
            title1: "Templates",
            title2: "Web Design",
        },
        {
            img: "https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/portfolio/66.jpg",
            title1: "Development",
            title2: "3D Graphics",
        },

    ]
    return (

        Items.map(({ img, title1, title2 }, index) => (
            <div className="ItemWrapper ItemGrid" key={index}  >
                <div className="ItemsInner" >
                    <div className="ItemsImg">
                        <img src={img} alt="img" />
                        <div className="overlay">
                            <h3>
                                <span>{title1}</span>
                                {title2 && <span>{title2}</span>}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        ))


    )
}


const Portfolio = (props) => {

    const itemsRef = useRef()

    const { ref: myRocet, inView: ElIsVisible } = useInView({ threshold: 0.3 })

    useEffect(() => {
        if (ElIsVisible) {
           itemsRef.current.classList.add("animationPort")
        }

    }, [ElIsVisible])




    return (
        <div className="portfolioContainer" ref={props.portfolioRef}>
            <Container>
                <div className="portfolioInner" ref={myRocet}>
                    <h2>My  <span>Portfolio</span></h2>
                    {/* <div className="portfolio-filter">
                        <ul>
                            <li>
                                ALL
                            </li>
                            <li>
                                DESIGN
                            </li>
                            <li>
                                DEVELOPMENT
                            </li>
                            <li>
                                GRAPHICS
                            </li>
                            <li>
                                Templates
                            </li>
                        </ul>
                    </div> */}

                    <div className="portfolioGrid" ref={itemsRef}>
                        <PortfolioItems />
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Portfolio;