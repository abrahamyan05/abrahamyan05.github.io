import { NavLink } from "react-router-dom";
import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin, BiLogoTelegram } from "react-icons/bi";


const SocialMedia = () => {

    const socialList = [
        {
            link: 'https://www.facebook.com/profile.php?id=100076714824276',
            icon:  < BiLogoFacebook /> 
        },
        {
            link: 'https://www.linkedin.com/in/grigor-abrahamyan05/',
            icon: < BiLogoLinkedin />
        },
        {
            link: 'https://github.com/Goq-96',
            icon: < BiLogoGithub /> 
        },
        {
            link: 'https://web.telegram.org/a/',
            icon: < BiLogoTelegram />
        },
    ]
    return (

        socialList.map(({ link, icon }, index) => (
            <li key={index}>
                <NavLink to={link} target="_blank">
                    {icon} 
                </NavLink>
            </li>
        ))

    )
}

export default SocialMedia;