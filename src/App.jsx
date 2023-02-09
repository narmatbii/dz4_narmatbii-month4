import React, { useState } from "react";
import ReactDOM from "react-dom";
import './App.css'

function App() {
  const [x, setX] = useState(false);

  const check = ()=> {
    alert("работает")
  }

  return (
    <div className="myBlock">
      <form>
        <label>
          <input type="text" name="name" disabled={x}/>
          <input type="text" name="name" disabled={x}/>
          <input type="text" name="name" disabled={x}/>
        </label>
          <button onClick={check} disabled={!x} className='btn'>отправить</button>
          <input type="checkbox" value={x} onChange={()=>setX(!x)}/>
      </form>
     </div>
  )  
    
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App
