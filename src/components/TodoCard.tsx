import React, { useEffect, useRef, useState } from 'react'
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
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const handleCompleted = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id!== id))
    }

    const handleEdit = (e: React.FormEvent,id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (
            todo.id === id ? {...todo, todo: editTodo} : todo
        )));
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    },[edit])
  return (
    <form className='todos__single' onSubmit={(e)=>handleEdit(e,todo.id)}>
        {
            edit ? (
                <input value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className='todos__single--text' ref={inputRef} />
            ): (
                todo.isDone ? (
                    <s className='todos__single--text'>{todo.todo}</s>
                ):(
                    <span className='todos__single--text'>{todo.todo}</span>
                )
            )
        }
        
        <div>
            <span className='icon' onClick={
                () => {
                    if(!edit && !todo.isDone){
                        setEdit(!edit);
                    }
                }
            }><AiFillEdit /></span>
            <span className='icon' onClick={()=>handleDelete(todo.id)}><AiOutlineDelete /></span>
            <span className='icon' onClick={()=>handleCompleted(todo.id)}><IoMdCheckmark /></span>
        </div>
    </form>
  )
}

export default TodoCard