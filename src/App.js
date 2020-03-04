import React,{useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = "e82fe8ea";
  const APP_KEY = "cc6e54ca8aab31ab6ad0bc24a041feb7";

  // eslint-disable-next-line no-unused-vars
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {

    console.log('Effects has been run')
  }, []);


  return (
   <div className="App">
  <form className="search-form">
    <input className="search-bar" type="text"/>
    <button  className="search-button" type="submit">Search</button>
  </form>
  <h1 onClick={() => setCounter(counter+1)}>{counter}</h1>
   </div>
  );

}

export default App;
