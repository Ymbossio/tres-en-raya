import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square.jsx"
import {TURNS, CombosWinner} from './components/Constant.js'
import { checkWinner, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"


function App() {
  const [board, setBoard] = useState(Array(9).fill(null)); //estado tablero
  const [turn, setTurn] = useState(TURNS.X)  //estado para los turnos
  const [winner, setWinner] = useState(null) //estado para ganador

  const updateBoard = (index) =>{
    if(board[index] || winner) return;
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard);
    const newTurn = turn == TURNS.X  ? TURNS.O : TURNS.X
    setTurn(newTurn);
    //guardamos partida
    window.localStorage.setItem('board', board.stringify(newBoard))
    window.localStorage.setItem('turn', turn)

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner) //ganador
    }else if(checkEndGame(newBoard)){
      setWinner(false) // empate
    }
  }

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Resetear partida</button>
        <section className="game">
          {board.map((_, index) =>{
            return(
              <Square 
              key={index} 
              index={index}
              updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })}
        </section>

        <section className="turn">
          <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
        </section>
        
        <WinnerModal resetGame={resetGame} winner={winner}/>

      </main>
  )
}

export default App
