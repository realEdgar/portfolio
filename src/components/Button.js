import { Link } from 'react-router-dom'

export const Button = ({direction, titleOfTheClass = 'Button', title = 'See More'}) => {
    return (
        <button className={titleOfTheClass}><Link to={direction}>{title}</Link></button>
    )
}