import React, { useState } from 'react';
import axios from 'axios';

const Create = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (!task)
    {
      alert('Please enter a task');
    } else
    {
       axios.post('http://localhost:3000/add', { task: task })
      .then((res) => {
        addTodo(res.data); 
        setTask(''); 
      })
      .catch((err) => console.log(err));
    }
   
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className='create_form'>
      <input 
        type="text"
        className="input_field" 
        value={task}
        onChange={handleChange} 
      />
      <button type='button' className="add_button" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Create;
