import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react';
import { Task } from './components/Task'

interface ToDoProps {
  content: string;
  isCompleted: boolean
}

export function App() {

  const [newTodo, setNewTodo] = useState('');
  const [toDoList, setToDoList] = useState<ToDoProps[]>([]);

  function handleNewTodo(event: FormEvent) {
    event.preventDefault();

    const toDo: ToDoProps = {
      content: newTodo,
      isCompleted: false
    }

    setToDoList([...toDoList, toDo])
    setNewTodo('')
  }

  function handleCompleteTask() {

  }

  return (
    <div className={styles.app}>
      <Header />

      <form action="" onSubmit={handleNewTodo} className={styles.form}>
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button type='submit'>Criar < PlusCircle /></button>
      </form>

      <main className={styles.main}>
        <div className={styles.head}>
          <p>Tarefas criadas <span>{toDoList.length}</span></p>

          {toDoList.length > 0 ? (
            <p>Concluidas <span>{`${0}/${toDoList.length}`}</span></p>
          ) :
            <p>Concluidas <span>{toDoList.length}</span></p>
          }


        </div>

        <div className={styles.content}>
          {toDoList.map((todo) => (
            <Task
              content={todo.content}
              isCompleted={true}
            />
          ))}
        </div>
      </main>

    </div >
  )
}
