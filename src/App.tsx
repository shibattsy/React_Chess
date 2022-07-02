import React, { useEffect, useState } from 'react';
import './App.scss';
import BoardComponent from './components/BoardComponent';
import LostFigures from './components/LostFigures';
import Timer from './components/Timer';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';

const App = (): JSX.Element => {

  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blakcPlayer, setBlakcPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  useEffect(() => {
    restart();
  }, []);

  function restart(): void {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setCurrentPlayer(whitePlayer);
    setBoard(newBoard);
  }
  function swapPlayer(): void {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blakcPlayer : whitePlayer);
  }
  return (
    <div className='app'>
      <Timer
        restart={restart}
        currentPlayer={currentPlayer}
      />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures
          title='Черные фигуры'
          figures={board.lostBlackFigures}
        />
      </div>
      <div>
        <LostFigures
          title='Белые фигуры'
          figures={board.lostWhiteFigures}
        />
      </div>
    </div>
  );
};

export default App;
