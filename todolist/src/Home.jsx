import Create from "./Create";
import React, { useEffect, useState } from 'react';
import "./App.css";
import { FiTrash } from "react-icons/fi"; 
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/get')
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/delete/' + id)
      .then((res) => {
        setTodos(todos.filter((todo) => todo._id !== id)); 
      })
      .catch((err) => console.log(err));
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]); 
  };

  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create addTodo={addTodo} />
      {
        todos.length === 0 ? <p>No todos</p> :
        todos.map((todo) => (
          <div className="task" key={todo._id}>
            <div className="checkbox">
              { todo.task }
            </div>
            <div>
              <span>
                <FiTrash className="icon" onClick={() => handleDelete(todo._id)} />
              </span>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Home;
