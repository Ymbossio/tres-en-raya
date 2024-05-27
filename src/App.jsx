import { useState } from "react"

const TURNS = {
  x: 'x',
  O: 'o'
}



const Square = ({children, updateBoard, index}) =>{
  return (
      <div className="square" key={index}>
        {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState( Array(9).fill(null));
  const [turn, setTurn] = useState(TURN.X)

  return (
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <section className="game">
          {board.map((_, index) =>{
            return(
              <Square key={index} index={index}/>
            )
          })}
        </section>

        <section className="turn">
          <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
        </section>
      </main>
  )
}

export default App
