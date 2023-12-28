import React from 'react';
import { List, Grid, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';
import './App.css';

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

  // Table
  const users = [
    { name: 'Afrah', age: 27, city: 'Mus' },
    { name: 'Ali', age: 23, city: 'Seeb' },
    { name: 'Aya', age: 18, city: 'Mus' },
    { name: 'Farah', age: 24, city: 'Seeb' }
  ];

  const tableRowRenderer = ({ index, key, style }) => {
    const rowData = users[index];
    return (
      <div key={key} style={style} className="table-row">
        <p className="table-cell">{rowData.name}</p>
        <p className="table-cell">{rowData.age}</p>
        <p className="table-cell">{rowData.city}</p>
      </div>
    );
  };

  const headerRender = ({ label, columnIndex }) => (
    <div key={columnIndex} className="table-header">
      {label}
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
      <List width={300} height={200} rowCount={data.length} rowHeight={40} rowRenderer={rowRender} />
      <h3>Grid</h3>
      <Grid width={300} height={200} rowCount={data.length} columnCount={2} rowHeight={40} columnWidth={150} cellRenderer={cellRenderer} />
      <h3>Table</h3>
      <Table width={400} height={400} rowCount={users.length} rowHeight={50} rowGetter={({ index }) => users[index]} headerHeight={50} rowRenderer={tableRowRenderer} headerRenderer={headerRender} />
    </div>
  );
}

export default App;
