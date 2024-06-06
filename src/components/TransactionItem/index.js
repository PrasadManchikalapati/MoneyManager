import './index.css'

const TransactionItem = props => {
  const {details, onDel} = props
  const {id, title, amount, type} = details
  const func = () => {
    onDel(id)
  }
  return (
    <li>
      <p style={{paddingRight: '40px', width: '6vw'}}>{title}</p>
      <p style={{paddingRight: '40px'}}>{amount}</p>
      <p style={{paddingRight: '10px'}}>{type}</p>
      <button type="button" data-testId="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          style={{height: '20px'}}
          onClick={func}
        />
      </button>
    </li>
  )
}
export default TransactionItem
