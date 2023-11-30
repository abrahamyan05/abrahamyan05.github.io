import { NavLink } from "react-router-dom";
import './listMenu.scss'


const MenuList = (props) => {

    const list = ['Home', 'About', 'Experience', 'Portfolio','News', 'Contact Us'];

    const hendleClick = (index, el) => {
       
        if(el === 'Home'){
            props.homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        }else if(el === 'About'){
            props.aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        else if(el === 'Experience'){
            props.experienseRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        else if(el === 'Contact Us'){
            props.contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        else if(el === 'Portfolio'){
            props.portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        else if(el === 'News'){
            props.newsRef.current?.scrollIntoView({ behavior: 'smooth'});
        }
    }

    return (
        list.map((el, index) => (
            <li key={index}>
                <NavLink
                    // to={ `portfolio/` + el.toLowerCase()} 
                    onClick={() => hendleClick(index, el)}
                    // className={({isActive}) => isActive ? "active-link" : ""}
                >{el}</NavLink>
            </li>
        ))
    )
}


export default MenuList;