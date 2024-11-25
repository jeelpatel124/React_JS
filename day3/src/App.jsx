import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  var [name,setstate] = useState("Jeel Nananiya")
  return (
    <div>
      <h1>Id Card</h1>
      <h3>Name : {name}</h3>
    </div>
  );
}

export default App;
