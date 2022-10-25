import styles from './EmptyList.module.css'
import emptyIcon from '../../assets/empty-icon.svg'

export function EmptyList() {
    return (
        <div className={styles.empty}>
            <img src={emptyIcon} alt="vazio" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}