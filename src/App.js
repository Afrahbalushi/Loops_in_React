import React from 'react';
import { List, Grid } from 'react-virtualized';
import 'react-virtualized/styles.css'; // Import the styles for react-virtualized

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = 0;

  // sum
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  // average
  const average = numbers.length === 0 ? 0 : sum / numbers.length;

  // filter even numbers
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  // React virtualized
  const data = ['Apple', 'Orange', 'Banana', 'Strawberry'];

  const rowRender = ({ index, key, style }) => (
    <div key={key} style={style}>
      {data[index]}
    </div>
  );

  const cellRenderer = ({ columnIndex, key, rowIndex, style }) => (
    <div key={key} style={style}>
      {data[rowIndex * 2 + columnIndex]}
    </div>
  );

  return (
    <div className="App">
      <h1>JavaScript Looping</h1>
      <h4>List of Numbers = [ {numbers.join(' , ')} ]</h4>
      <h3>SUM : {sum}</h3>
      <h3>AVERAGE : {average}</h3>
      <h3>FILTERING : {evenNumbers.join(' , ')}</h3>

      <hr></hr>

      <h1>React Virtualized</h1>
      <List width={300} height={400} rowCount={data.length} rowHeight={40} rowRenderer={rowRender} />

      <Grid width={300} height={200} rowCount={data.length} columnCount={2} rowHeight={40} columnWidth={150} cellRenderer={cellRenderer} />
    </div>
  );
}

export default App;
