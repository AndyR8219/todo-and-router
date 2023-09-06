import { useNavigate, useParams } from 'react-router-dom'
import { URL_TODOS } from '../../constants/constants'
import { useEffect, useState } from 'react'
import { RequestUpdateItem } from './request-update-item'
import { RequestDeleteItem } from './request-delete-item'
import styles from './task-page.module.css'

export const TaskPage = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [task, setTask] = useState('')
  const params = useParams()
  const navigate = useNavigate()

  const goHome = () => navigate('/')

  useEffect(() => {
    fetch(URL_TODOS + `/${params.id}`)
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => setTask(loadedTodos.title))
      .catch((err) => console.log('Ошибка', err))
  }, [params.id])

  const onTitleChange = (e) => {
    setTask(e.target.value)
  }

  const onTodoEdit = () => {
    setIsEditing(true)
  }

  return (
    <div className={styles.taskPage}>
      <h3 className={styles.h3}>Страница с задачей</h3>
      <button onClick={goHome}>Назад</button>

      <div className={styles.bodyTask}>
        {isEditing ? (
          <>
            <input
              className={styles.input}
              type="text"
              value={task}
              onChange={onTitleChange}
            />
            <button
              onClick={(e) =>
                RequestUpdateItem(e, params.id, setIsEditing, task)
              }
            >
              Сохранить
            </button>
          </>
        ) : (
          <div className={styles.item}>
            <div onClick={onTodoEdit}>{task}</div>
            <button
              name="deleteButton"
              className={styles.button}
              type="button"
              onClick={(e) => RequestDeleteItem(e, params.id, goHome)}
            >
              Удалить
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
