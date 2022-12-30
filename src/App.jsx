import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1 className="title">doge coin</h1>
        <p className="item">item 1</p>
        <p className="item">item 2</p>
        <p className="item">item 3</p>
      </header>
    </div>
  );
}

export default App;
