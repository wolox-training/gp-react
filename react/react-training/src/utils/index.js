import { LINES } from '@constants';

export function calculateWinner(squares) {
  for (let i = 0; i < LINES.length; i += 1) {
    const [a, b, c] = LINES[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
