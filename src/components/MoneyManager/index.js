import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import './index.css'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: 'Income',
    tableList: [],
  }

  changeTitle = e => {
    this.setState({title: e.target.value})
  }

  changeAmount = e => {
    this.setState({amount: e.target.value})
  }

  changeType = e => {
    this.setState({type: e.target.value})
  }

  changeState = e => {
    e.preventDefault()
    const {balance, title, amount, type, income} = this.state
    if (type === 'Income') {
      this.setState(prev => ({
        income: prev.income + parseInt(amount),
        balance: prev.balance + parseInt(amount),
      }))
    } else {
      this.setState(prev => ({
        expenses: prev.expenses + parseInt(amount),
        balance: prev.balance - parseInt(amount),
      }))
    }
    const newItem = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prev => ({
      tableList: [...prev.tableList, newItem],
      title: '',
      amount: '',
    }))
  }

  del = id => {
    const {tableList} = this.state
    this.setState(prev => ({
      tableList: prev.tableList.filter(each => each.id !== id),
    }))
    const sample = tableList.filter(each => each.id === id)
    if (sample[0].type === 'Income') {
      this.setState(prev => ({
        income: prev.income - parseInt(sample[0].amount),
        balance: prev.balance - parseInt(sample[0].amount),
      }))
    } else if (sample[0].type === 'Expenses') {
      this.setState(prev => ({
        expenses: prev.expenses - parseInt(sample[0].amount),
        balance: prev.balance + parseInt(sample[0].amount),
      }))
    }
  }

  render() {
    const {balance, income, expenses, tableList, title, amount} = this.state

    return (
      <div className="bg-container">
        <div className="container-1">
          <h1>Hi, Prasad</h1>
          <p>
            Welcome back to your{' '}
            <span style={{color: ' #0b69ff'}}>Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </div>
        <div className="container-2">
          <div className="form">
            <form onSubmit={this.changeState}>
              <h1 style={{color: '#1e293b'}}>Add Transaction</h1>
              <label htmlFor="title" style={{fontSize: '13px'}}>
                TITLE
              </label>
              <br />
              <input
                type="text"
                id="title"
                style={{padding: '5px'}}
                placeholder="TITLE"
                onChange={this.changeTitle}
                value={title}
              />
              <br />
              <label htmlFor="amount" style={{fontSize: '13px'}}>
                AMOUNT
              </label>
              <br />

              <input
                type="text"
                id="amount"
                style={{padding: '5px'}}
                placeholder="AMOUNT"
                onChange={this.changeAmount}
                value={amount}
              />
              <br />
              <label htmlFor="type">TYPE</label>
              <br />
              <select
                id="type"
                style={{width: '11vw', padding: '5px'}}
                onChange={this.changeType}
              >
                {transactionTypeOptions.map(each => (
                  <option value={each.displayText} key={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="history">
            <h1>History</h1>
            <div className="history-table">
              <ul>
                <li>
                  <p style={{paddingRight: '40px', width: '5vw'}}>Title</p>
                  <p style={{paddingRight: '50px', width: '5vw'}}>Amount</p>
                  <p style={{paddingRight: '10px'}}>Type</p>
                </li>
                {tableList.map(each => (
                  <TransactionItem
                    key={each.id}
                    details={each}
                    onDel={this.del}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
