import { Square } from "./Square"


export function WinnerModal ({winner, resetGame}){
    if(winner == null) return null

    const WinnerText = winner == false ? 'Empate' : 'Ganó'

    return (
        <section className="winner">
            <div>
                <h2>{WinnerText}</h2>

            <header className="win">
                {winner && <Square>{winner}</Square>}
            </header>

            <footer>
                <button onClick={resetGame}>Empezar Nuevamente</button>
            </footer>

            </div>            
        </section>
    )
}