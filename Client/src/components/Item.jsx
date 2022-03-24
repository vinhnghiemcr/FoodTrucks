const item = (props) => {
  return (
    <div>
      <div className="itemName" onClick={props.onClick}>
        <h3>{props.name}</h3>
        <h5>{props.description}</h5>
        <h5>{props.image}</h5>
        <h5>{props.price}</h5>
      </div>
    </div>
  )
}

export default item
