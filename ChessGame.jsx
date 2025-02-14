```jsx
import React, { useState } from 'react';

const ChessGame = () => {
  const initialBoard = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
  ];

  const [board, setBoard] = useState(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState('white');

  const handleCellClick = (row, col) => {
    if (!selectedPiece) {
      if (board[row][col]) {
        setSelectedPiece({ row, col });
      }
    } else {
      const newBoard = [...board];
      newBoard[row][col] = board[selectedPiece.row][selectedPiece.col];
      newBoard[selectedPiece.row][selectedPiece.col] = '';
      setBoard(newBoard);
      setSelectedPiece(null);
      setCurrentPlayer(currentPlayer === 'white' ? 'black' : 'white');
    }
  };

  const getCellColor = (row, col) => {
    const isSelected = selectedPiece && selectedPiece.row === row && selectedPiece.col === col;
    const isEven = (row + col) % 2 === 0;
    return isSelected ? 'bg-yellow-200' : isEven ? 'bg-gray-200' : 'bg-gray-400';
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-4 text-lg font-bold">
        Turno: {currentPlayer === 'white' ? 'Blancas' : 'Negras'}
      </div>
      <div className="border-2 border-gray-800">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-12 h-12 flex items-center justify-center text-2xl cursor-pointer ${getCellColor(rowIndex, colIndex)}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChessGame;
```

Este código está listo para ser usado en un proyecto React con Tailwind CSS. Para utilizarlo necesitarás:

1. Tener React instalado en tu proyecto
2. Tener Tailwind CSS configurado
3. Guardar el archivo como `ChessGame.jsx` o `ChessGame.tsx`
4. Importar el componente donde quieras usarlo con `import ChessGame from './path/to/ChessGame'`
