
import { useCallback } from 'react';
import './App.css';
import MyList from "./components/ReactWindowCom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <MyList /> */}
      </header>
    </div>
  );
}

export default App;

function TodoItem ({ item, onToggle }){
  return(
    <li>
      {item.text}
      <button onClick={()=> onToggle(item.id)}>Toggle</button>
    </li>
  )
}

function TodoItem ({ item, onToggle }) {
  const handleToggle = useCallback(()=>{
    onToggle(item.id);

  },[onToggle, item.id]);
  return(
    <li>
      {item.text}
      <button onClick={handleToggle}>Toggle</button>
    </li>
  )
}
