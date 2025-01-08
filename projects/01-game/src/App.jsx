import { useState } from 'react'
import confetti from "canvas-confetti"
import {TURNS} from './constants.js'
import {WINNER_COMBOS} from './constants.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { RestartButton } from './components/RestartButton.jsx'
import { Game } from './components/Game.jsx'
import { TurnBox } from './components/TurnBox.jsx'

import './App.css'

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for ( const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(
        boardToCheck[a] && 
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[b] == boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const checkEndGame = (newBoard) => {
      return newBoard.every((square) => square != null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner ) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }

  }
  
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <RestartButton resetGame={resetGame}/>
      <Game board={board} updateBoard={updateBoard}/>
      <TurnBox turn={turn}/>      
      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
