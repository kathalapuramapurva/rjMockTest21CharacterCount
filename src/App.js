import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    itemsList: [],
    inputValue: '',
  }

  onChangeInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  onAddItem = event => {
    event.preventDefault()
    const {inputValue} = this.state
    const newItem = {
      id: uuidv4(),
      textInput: `${inputValue} : ${inputValue.length}`,
    }
    this.setState(prevState => ({
      itemsList: [...prevState.itemsList, newItem],
      inputValue: '',
    }))
  }

  render() {
    const {inputValue, itemsList} = this.state
    return (
      <div className="app-container">
        <div className="character-counter">
          <div className="result-container">
            <h1 className="result-container-heading">
              Count the characters like a Boss...
            </h1>
            <div className="toggle-container">
              {itemsList.length === 0 ? (
                <img
                  className="style-image"
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                />
              ) : (
                <ul className="style-items-list">
                  {itemsList.map(eachItem => (
                    <li className="style-item" key={eachItem.id}>
                      <p className="style-item-content">{eachItem.textInput}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <form className="character-input-container" onSubmit={this.onAddItem}>
            <h1 className="input-heading">Character Counter</h1>
            <div className="input-container">
              <input
                className="style-input"
                type="text"
                placeholder="Enter the Characters here"
                value={inputValue}
                onChange={this.onChangeInputValue}
              />
              <button type="submit" className="style-button">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App
