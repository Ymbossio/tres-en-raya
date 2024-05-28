import { CombosWinner } from "../components/Constant"

//verificamos si hay ganador
export const checkWinner = (boardToCheck) =>{
    for(const combo of CombosWinner){
      const [a, b, c] = combo
      if(
        boardToCheck[a] && 
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    return null
}

export const checkEndGame = (newBoard) =>{
  //validamos que todas las casillas se hayan rellenado y si es true es un empate
  return newBoard.every((square) => square != null)
}