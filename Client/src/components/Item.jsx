const Item = (props) => {
  return (
    <div>
      <div className="itemName" onClick={props.onClick}>
        <h3>{props.itemName}</h3>
        <h5>{props.itemDescription}</h5>
      </div>
    </div>
  )
}

export default Item
