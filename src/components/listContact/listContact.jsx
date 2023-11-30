


const ListTitle = () => {
    const list = [
        {
            title: 'Full Name',
            value: "Grigor Abrahamyan"
        },
        {
            title: 'Age',
            value: "27 Years"
        },
        {
            title: 'Phone No',
            value: "+374 93 33 43 95"
        },
        {
            title: 'Email',
            value: "abrahamyan051996@gmail.com"
        },
        {
            title: 'Address',
            value: "Yerevan Armenia"
        },

    ]
    return (
        list.map(({ title, value },index) => {
            return (
                <li key={index}>
                    <span className='title'>
                        {title}
                        <b>:</b>
                    </span>
                    <span className='titleInfo '>{value}</span>
                </li>
            )
        })
    )
}

export default ListTitle;