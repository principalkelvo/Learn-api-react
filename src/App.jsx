import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setTodo] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(data => setTodo(data))
      .catch((error) => {
        console.error(error);
      })
  }, [])
  console.log(todos)
  return (
    <div>
      {todos.length > 0 &&
        todos.map((todo) =>(
          <ul key={todo.id}>
            <li>{todo.title} </li>
          </ul>
        ))
      }

    </div>
  )
}

export default App
