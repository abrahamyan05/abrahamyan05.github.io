import Container from '../components/container/container';
import './news.scss'
import Slider from 'react-slick';
import "./slick.scss";
import "./slick-theme.scss";

const News = (props) => {

    const data = [
        {
            id: 1,
            data: "July 18,2023",
            title: 'OnePlus 12 RAM & Storage Revealed',
            text: "It is officially confirmed that the upcoming OnePlus 12 flagship smartphone will be coming with 24GB LPDDR5X RAM and 1TB UFS 4.0 storage. It will be the top model and the company will definitely offer various options like 12 GB of RAM and 16GB of RAM options as well.",
            imgSlik: 'https://www.technobugg.com/wp-content/uploads/2023/11/OnePlus-12-rear-design.webp'
        },
        {
            id: 2,
            data: "October 27,2023",
            title: ' Tripura Plans To Brand Its Tea As A ‘National Identity',
            text: "Tata Electronics has acquired a 100% stake in Wistron India, a strategic move to enhance its capabilities in the smartphone manufacturing sector, particularly in Apple iPhone assembly",
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/2.jpg'
        },
        {
            id: 3,
            data: "Oct 17,2023",
            title: 'Qualcomm, Google partner to make RISC-V chip for wearable device',
            text: "Oct 17 (Reuters) - Chip designer Qualcomm (QCOM.O) said on Tuesday it is partnering with Alphabet's (GOOGL.O) Google to make wearable devices like smartwatches using chips based on RISC-V technology.",
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/3.jpg'
        },
        {
            id: 4,
            data: "Nov 24,2023",
            title: 'Ark Investments sets 0.80% fee for proposed spot bitcoin ETF',
            text: "Nov 24 (Reuters) - ARK Investment Management led by Cathie Wood, and Swiss cryptocurrency manager 21Shares, plan to charge a fee of 0.80% on their proposed ARK 21Shares Bitcoin exchange-traded fund (ETF) if cleared by regulators, according to a U.S. Securities and Exchange Commission (SEC) filing.",
            imgSlik: 'https://www.reuters.com/resizer/d2pGPI2KQhlW7gXZX-46diMGiec=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GAGXB3O2IJIKPKDX76P6XT3RXY.jpg'
        },
        {
            id: 5,
            data: "Nov 27,2023",
            title: 'Foxconn to invest $1.5 bln to expand India operations',
            text: "BENGALURU, Nov 27 (Reuters) - Taiwan's Foxconn (2317.TW) will invest $1.5 billion in India in its latest expansion plan, the world's largest contract manufacturer of electronics said on Monday.",
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/5.jpg'
        },
        {
            id: 6,
            data: "July 20,2021",
            title: 'Amazon agrees deal with most Spanish workers over Cyber Monday walkout',
            text: "MADRID, Nov 27 (Reuters) - Amazon (AMZN.O) reached an agreement with most of its workers in Spain on Monday, avoiding the full impact of a planned one-hour strike per shift on one of the busiest online shopping days of the year, according to local union group CCOO and the company.",
            imgSlik: 'https://www.reuters.com/resizer/UZqgxsd9nmLOs7MLJxK7c8jU4qQ=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WM6XWNBBTJMMLEMOUOUBCH26YI.jpg'
        },
        {
            id: 7,
            data: "July 30,2020",
            title: "Alibaba's research arm shuts quantum computing lab amid restructuring",
            text: "SHANGHAI, Nov 27 (Reuters) - Chinese tech giant Alibaba (9988.HK) has cut a quantum computing laboratory and team from its research arm, donating both the lab and related experimental equipment to Zhejiang University, the company said on Monday.",
            imgSlik: 'https://www.reuters.com/resizer/OtBFGltn89tt910vuLmbju25TUs=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KVMJTR77EJIL3MREMRZXMHXVYE.jpg'
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        speed: 2400,
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
        <div className='newsContainer' ref={props.newsRef}>
            <Container>
                <div className='newsInner'>
                    <h2 className='latest'>  Latest
                        <span>News</span>
                    </h2>
                    <div className='newsSlider'>
                        <Slider {...settings}>
                            {
                                data.map(({ id, data, title, text, imgSlik }) => (
                                    <div key={id} className='card' >
                                        <div className='card-top'>
                                            <div className='imgWrapper'>
                                                <img src={imgSlik} alt={title} />
                                            </div>
                                            <h2 className='data'>{data}</h2>
                                        </div>
                                        <div className='card-bottom'>
                                            <h3>{title}</h3>
                                            <p>{text}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default News;