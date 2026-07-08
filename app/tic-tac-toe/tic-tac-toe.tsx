import { useState } from 'react';

export default function TicTacToe() {

  function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
      setValue("X");
    }

    return ( 
      <button
        className="square"
        onClick={handleClick}
      >
        {value}
      </button>
    );
  }

  function Board() {
    return (
      <>
        <div className="game-board">
          <div className="board-row">
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
          </div>
        </div>
      </>
    );
  }

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1>Tic Tac Toe</h1> 
        </header>
        <Board />
      </div>
    </main>
  )
};
