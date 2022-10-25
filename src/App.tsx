import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react';
import { Task } from './components/Task'
import { v4 as uuidv4 } from 'uuid'
import { EmptyList } from './components/EmptyList';

interface ToDoProps {
  content: string;
  isCompleted: boolean;
  id: string;
}

export function App() {

  const [newTodo, setNewTodo] = useState('');
  const [toDoList, setToDoList] = useState<ToDoProps[]>([]);

  const num = toDoList.filter((task) => {
    if (task.isCompleted) {
      return task
    }
  })

  function handleNewTodo(event: FormEvent) {
    event.preventDefault();

    const toDo: ToDoProps = {
      content: newTodo,
      isCompleted: false,
      id: uuidv4()
    }

    setToDoList([...toDoList, toDo])
    setNewTodo('')
  }

  function handleDeleteTask(idToDelete: string) {
    const updatedtask = toDoList.filter((task) => {
      return task.id !== idToDelete
    })

    setToDoList(updatedtask)
  }

  function handleCompleteTask(idToComplete: string) {
    const updatedTask = toDoList.map((task) => {
      if (task.id === idToComplete) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    })

    setToDoList(updatedTask)
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
            <p>Concluidas <span>{`${num.length} de ${toDoList.length}`}</span></p>
          ) :
            <p>Concluidas <span>{toDoList.length}</span></p>
          }
        </div>

        <div className={styles.content}>

          {toDoList.length > 0 ?
            toDoList.map((task) => (
              <Task
                key={task.id}
                content={task.content}
                id={task.id}
                onCompleteTask={handleCompleteTask}
                OnDeleteTask={handleDeleteTask}
              />
            ))
            : (
              <EmptyList />
            )
          }


        </div>
      </main>

    </div >
  )
}
