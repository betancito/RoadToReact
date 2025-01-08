
import { Square } from "./Square"
export function WinnerModal({winner, resetGame}){
    if (winner === null) return null

    const winnerText = winner == false ? 'Draw' : 'The Winner is'

    return(
      <section className='winner'>
        <div className='text'>
          <h2>{winnerText}</h2>

          <header className='win'>
            {winner && <Square>{winner}</Square>}
          </header>

          <button onClick={resetGame}>
            Restart Game
          </button>
        </div>
      </section>
    )
}