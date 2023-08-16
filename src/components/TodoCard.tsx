import React from 'react'
import { Todo } from '../model';
import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai'
import {IoMdCheckmark} from 'react-icons/io'
import './styles.css'

interface Props{
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard = ({todo, todos, setTodos}:Props) => {
  return (
    <form className='todos__single'>
        <span className='todos__single--text'>
            {todo.todo}
        </span>
        <div>
            <span className='icon'><AiFillEdit /></span>
            <span className='icon'><AiOutlineDelete /></span>
            <span className='icon'><IoMdCheckmark /></span>
        </div>
    </form>
  )
}

export default TodoCard