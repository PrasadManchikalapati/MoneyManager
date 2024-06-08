import './index.css'

const TransactionItem = props => {
  const {details, onDel} = props
  const {id, title, amount, type} = details
  const func = () => {
    onDel(id)
  }
  return (
    <li style={{textAlign: 'center'}}>
      <p style={{paddingRight: '40px', width: '6vw'}}>{title}</p>
      <p style={{paddingRight: '40px', width: '5vw'}}>{amount}</p>
      <p style={{paddingRight: '10px'}}>{type}</p>
      <button type="button" data-testid="delete" onClick={func}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          style={{height: '20px'}}
        />
      </button>
    </li>
  )
}
export default TransactionItem
