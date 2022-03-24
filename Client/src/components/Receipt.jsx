import Item from "./Item"

const Receipt = (props) => {
  return (
    <div className="receipt">
      <h1>Receipt Summary</h1>
      <ul>
        {
        props.items.map((item) => {
          return <Item />
        })
        }
      </ul>
      <h3>Total Cost: {props.total}</h3>
    </div>
  )
}