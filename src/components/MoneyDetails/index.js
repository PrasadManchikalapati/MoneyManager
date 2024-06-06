const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="money-details">
      <div
        className="money-details-items"
        style={{
          backgroundColor: '#ecfccb',
          border: '1px solid #84cc16',
          marginRight: '10px',
        }}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="money-details-items-content">
          <p>Your Balance</p>
          <p className="amount" data-testId="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div
        className="money-details-items"
        style={{
          backgroundColor: '#cffafe',
          border: '1px solid #06b6d4',
          marginRight: '10px',
        }}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="money-details-items-content">
          <p>Your Income</p>
          <p className="amount" data-testId="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div
        className="money-details-items"
        style={{
          backgroundColor: '#ede9fe',
          border: '1px solid #7c3aed',
        }}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="money-details-items-content">
          <p>Your Expenses</p>
          <p className="amount" data-testId="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
