import { List } from 'react-virtualized';
import './App.css';

function App() {
  const numbers = [1,2,3,4,5,6,7,8,9,10]
  let sum = 0

  //sum
  for(let i =0; i < numbers.length; i++) {
    
    sum += numbers[i]

  }
  
  //average
  const average = numbers.length === 0 ? 0 : sum / numbers.length;

  //fillter even numbers
  const evenNumbers = []
  for(let i = 0; i < numbers.length; i++){
     if(numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
     }
  }

//React virtualized

  const data = ['item 1', 'item 2', 'item 3', 'item 4']

  const rowRender = ({index, key, style}) => (
     <div key={key} style={style}>
       {data[index]}
     </div>
  )

  return (
    <div className="App">
     <h1>JavaScript Looping</h1>
     <h4>List of Numbers = [ {numbers.join(' , ')} ]</h4>
      <h3>SUM : {sum}</h3>
      <h3>AVERAGE : {average}</h3>
      <h3>FILLTERING : {evenNumbers.join(' , ')}</h3>

      <hr></hr>

      <h1>React Virtualized</h1>
      <List 
      width={300}
      height={400}
      rowCount={data.length}
      rowHeight={40}
      rowRenderer={rowRender}
      />
    </div>
  );
}

export default App;
