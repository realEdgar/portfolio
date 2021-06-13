export const Tech = ({Component, nameClass, title}) => {
  return (
    <div className="Item-Tech">
      <Component className={nameClass}/>
      <p>{title}</p>
    </div>
  )
} 