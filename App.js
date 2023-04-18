import React from 'react';
import { StyleSheet, View } from 'react-native';

const squareSize = 50; // Size of each chess square

const ChessBoard = () => {
  // Array representing the chess board
  const board = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', '.', ' ', '.', ' ', '.', ' ', '.'],
    ['.', ' ', '.', ' ', '.', ' ', '.', ' '],
    [' ', '.', ' ', '.', ' ', '.', ' ', '.'],
    ['.', ' ', '.', ' ', '.', ' ', '.', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ];

  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {row.map((piece, colIndex) => (
            <View
              key={colIndex}
              style={[
                styles.square,
                (rowIndex + colIndex) % 2 === 0 ? styles.lightSquare : styles.darkSquare,
              ]}
            >
              {/* Render the piece */}
              <Text style={styles.piece}>{piece}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: squareSize,
    height: squareSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightSquare: {
    backgroundColor: '#f0d9b5',
  },
  darkSquare: {
    backgroundColor: '#b58863',
  },
  piece: {
    fontSize: 30,
  },
});

export default ChessBoard;