import { useState, useEffect } from 'react';
import './App.css';

// a component is a function that returns JSX

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("You've changed the counter to " + counter)
  }, [counter])

  // This function return the prevCount minus 1
  function decrement_cnt(prevCount) {
    return prevCount - 1;
  }

  function clickHandler() {
    setCounter(decrement_cnt); // We must use func for setter because the 
    // the value to set depends on prev value
  } // (1) Simple case, we know the value: setCounter(3)
    // (2) The value to set depends on prev value, so here it is the
    //     is the return value of func

  return (
    <div className="App">
      {/* class is a reserved keyword in JS, so we use className */}
      <button onClick={clickHandler}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1 )}>+</button>
    </div>
  );
}

export default App;
