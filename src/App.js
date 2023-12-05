import './App.css';

// a component is a function that returns JSX
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

// class is a reserved keyword in JS, so we use className
const App = () => {
  return (
    <div className="App">
      <Person name="John" lastName={'Doe'} age={25}/>
      <Person name="Mary" lastName={'Doe'} age={24} />
    </div>
  );
}

export default App;
