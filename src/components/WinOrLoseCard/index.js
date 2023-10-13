// Write your code here.
import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  return (
    <div className="win-or-lose-card">
      <div className="score-section">
        <h1 className="status-text">{gameStatus}</h1>
        <p className="best-score-text">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <imgs src={imageUrl} alt="win or lose" className="win-lose-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
