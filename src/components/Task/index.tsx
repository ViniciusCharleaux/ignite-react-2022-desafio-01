import { useState } from 'react'
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
    content: string;
    isCompleted: boolean
}

export function Task({ content, isCompleted }: TaskProps) {

    const [isChecked, setIsChecked] = useState(false)


    return (
        <div className={styles.task}>
            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <p>{content}</p>
            <button>
                <Trash size={20} />
            </button>
        </div>
    )
}