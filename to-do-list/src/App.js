
import { useState } from "react";

function App() {
  const [todo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(todo === '') {
      return ;
    }
    setToDos((currentArray) => [todo, ...currentArray]);
    setToDo("");
  }

  return (
    <div className="App">
      <h1>My To Dos ({toDos.length}) </h1>
      <form onSubmit={ onSubmit }>
        <input 
        onChange= { onChange }
        value={ todo }
        type="text" 
        placeholder="Write your to do...."/>
        <button>Add To Do</button>
      </form>
      <hr/>
      {
        toDos.map((item,i) => <li key={i}>{item}</li> )
      }
    </div>
  );
}

export default App;
