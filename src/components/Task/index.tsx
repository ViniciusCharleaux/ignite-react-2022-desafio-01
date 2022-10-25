import { useState } from 'react'
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
    content: string;
    id: string;
    OnDeleteTask: (id: string) => void;
    onCompleteTask: (id: string) => void
}

export function Task({ content, id, OnDeleteTask, onCompleteTask }: TaskProps) {

    const [isChecked, setIsChecked] = useState(false)

    function handleDeleteTask() {
        OnDeleteTask(id)
    }

    function handleCompleteTask() {
        setIsChecked(!isChecked)
        onCompleteTask(id)
    }

    return (
        <div className={styles.task}>
            <div className={styles.text}>
                <input type="checkbox" checked={isChecked} onChange={handleCompleteTask} />
                <p className={isChecked ? styles.isCompleted : ''}>{content}</p>
            </div>

            <button onClick={handleDeleteTask}>
                <Trash size={20} />
            </button>
        </div >
    )
}