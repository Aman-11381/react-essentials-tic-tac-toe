export default function Log({ turns }) {
  const logs = turns.map((turn) => (
    <li key={`${turn.square.row}${turn.square.col}`}>
      {turn.player} selected {turn.square.row},{turn.square.col}
    </li>
  ));

  return <ol id="log">{logs}</ol>;
}
