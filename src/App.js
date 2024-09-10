import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    image: languageGreetingsList[0].imageUrl,
    text: languageGreetingsList[0].imageAltText,
  }

  onClickBtn = id => {
    const object = languageGreetingsList.filter(each => each.id === id)
    this.setState({image: object[0].imageUrl, text: object[0].imageAltText})
  }

  render() {
    const {image, text} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul>
            {languageGreetingsList.map(eachLanguage => (
              <li key={eachLanguage.imageAltText}>
                <button
                  type="button"
                  onClick={() => this.onClickBtn(eachLanguage.id)}
                >
                  {eachLanguage.buttonText}
                </button>
              </li>
            ))}
          </ul>
          <img src={image} alt={text} />
        </div>
      </div>
    )
  }
}
export default App
