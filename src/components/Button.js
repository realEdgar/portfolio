export const Button = ({direction, titleOfTheClass = 'Button', title = 'See More'}) => {
    return (
        <button className={titleOfTheClass}><a href={direction} >{title}</a></button>
    )
}