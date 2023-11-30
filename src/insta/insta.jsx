import Container from "../components/container/container";
import "./insta.scss"
import "./slick.scss"
import "./slick-theme.scss"
import Slider from "react-slick";

const Insta = () => {

    const list = [
        {
            id: 1,
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/instagram/1.jpg'
        },
        {
            id: 2,
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/instagram/2.jpg'
        },
        {
            id: 3,
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/instagram/3.jpg'
        },
        {
            id: 4,
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/instagram/4.jpg'
        },
        {
            id: 5,
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/instagram/5.jpg'
        },
        {
            id: 6,
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/instagram/6.jpg'
        },
        
        {
            id: 6,
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/instagram/7.jpg'
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 800,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]

    };

    return (
        <div className="instaContainer">
            <Container>
                <Slider {...settings}>
                    {
                        list.map(({ id, imgSlik }) => (
                            <div className="card" key={id}>
                                <div className="card-Inner">
                                    <img src={imgSlik} alt="1111" />
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </Container>
        </div>
    )
}

export default Insta;