


const ListSkills = () => {
    const list = [
        {
            skill: 'JAVASCRIPT',
            percent: "65%"
        },
        {
            skill: 'HTML',
            percent: "80%"
        },
        {
            skill: 'CSS  / SCSS',
            percent: "70%"
        },
        {
            skill: 'React',
            percent: "55%"
        },
        {
            skill: 'Redux',
            percent: "50%"
        },
        {
            skill: 'GitHub',
            percent: "30%"
        }
     

    ]
    return (
        list.map(({ skill, percent }, index) => {
            return (
                <li key={index}>
                    <div className='skills'>
                        <h3>{skill}</h3>
                        <span>{percent}</span>
                    </div>
                    <div className='progress-bar'>
                        <span className={skill.toLocaleLowerCase()}></span>
                    </div>
                </li>
            )
        })
    )
}

export default ListSkills;