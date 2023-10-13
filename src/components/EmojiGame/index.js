import {Component} from 'react'

import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  state = {topScore: 0, isGameIsProgress: true, clickedEmojiList: []}

  resetGame = () => {
    this.setState({clickedEmojiList: [], isGameIsProgress: true})
  }

  renderScoreCard = () => {
    const {emojiList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = emojiList.length === clickedEmojiList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojiList.length}
      />
    )
  }

  finishAndSetupTopScore = currentScore => {
    const {topScore} = this.state

    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameIsProgress: false})
  }

  clickEmoji = id => {
    const {emojiList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojiPresent = clickedEmojiList.includes(id)
    const emojiListLength = clickedEmojiList.length

    if (isEmojiPresent) {
      this.finishAndSetupTopScore(emojiListLength)
    } else {
      if (emojiList.length - 1 === emojiListLength) {
        this.finishAndSetupTopScore(emojiList.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojiList = this.getShuffledEmojisList()

    return (
      <ul className="ul-container">
        {shuffledEmojiList.map(each => (
          <EmojiCard
            key={each.id}
            emojiDetails={each}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameIsProgress} = this.state
    return (
      <div className="bg-container">
        <NavBar />
        <div className="card-container">
          {isGameIsProgress ? this.renderEmojiList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
