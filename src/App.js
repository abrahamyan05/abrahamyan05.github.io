import { useEffect, useRef, useState } from 'react';
import './App.css';
import About from './about/about';
import Achtivity from './achtivity/achtivity';
import LoaderSpinner from './components/loader/loader';
import Contact from './contact/contact';
import Footer from './footer/footer';
import Header from './header/header';
import HomeSection from './homeSection/homeSection';
import Project from './project/project';
import Service from './service/service';
import Portfolio from './portfolio/portfolio';
import News from './news/news';
import Insta from './insta/insta';


function App() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(true)
    }, 1500)
  }, [])
  const homeRef = useRef();
  const aboutRef = useRef();
  const experienseRef = useRef();
  const contactRef = useRef();
  const portfolioRef = useRef();
  const newsRef = useRef();

  return (
    <div className="App">
      {
        !isLoading ? <LoaderSpinner />
          :
          <>
            <Header
              homeRef={homeRef}
              aboutRef={aboutRef}
              experienseRef={experienseRef}
              contactRef={contactRef}
              portfolioRef={portfolioRef}
              newsRef={newsRef}
            />
            <HomeSection
              homeRef={homeRef}
              experienseRef={experienseRef}
            />
            <About
              aboutRef={aboutRef}
            />
            <Service />
            <Achtivity
              experienseRef={experienseRef}
            />
            <Project />
            <Portfolio
              portfolioRef={portfolioRef}
            />
            <News
              newsRef={newsRef}
            />
            <Contact
              contactRef={contactRef}
            />
            <Insta />
            <Footer />
          </>
      }
    </div>
  );
}

export default App;
