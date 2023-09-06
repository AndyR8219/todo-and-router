import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './main-page.module.css'
import { URL_TODOS } from '../../constants/constants'
import { RequestAddItem } from './request-add-item'
import { OnChangeInputValue } from './on-change-input-value'
import { OnChangeSearch } from './on-change-search'

export const MainPage = () => {
  const [todos, setTodos] = useState([])
  const [valueInput, setValueInput] = useState('')
  const [isSorted, setIsSorted] = useState(false)
  const [isSearch, setIsSearch] = useState('')
  const [refreshFlag, setRefreshFlag] = useState(false)
  const refreshTodos = () => setRefreshFlag(!refreshFlag)
  const [isCreating, setIsCreating] = useState(false)

  useEffect(() => {
    let sort = ''
    if (isSorted) {
      sort = '?_sort=title&_order=asc'
    }

    fetch(URL_TODOS + `${sort}`)
      .then((rawResponse) => rawResponse.json())
      .then((res) => setTodos(res))
      .catch((err) => console.log('Ошибка', err))
  }, [refreshFlag, isSorted, isSearch])

  const searchItem = todos.filter((item) => {
    return item.title.toLowerCase().includes(isSearch.toLocaleLowerCase())
  })

  return (
    <>
      <form type="submit" className={styles.app}>
        <div>
          <h2 className={styles.h2}>Cписок дел</h2>
          <div className={styles.add}>
            <input
              className={styles.input}
              value={valueInput}
              type="text"
              onChange={(e) => OnChangeInputValue(e, setValueInput)}
              placeholder="Введите название заметки"
            />
            <button
              className={styles.button}
              type="submit"
              onClick={(e) =>
                RequestAddItem(
                  e,
                  setIsCreating,
                  valueInput,
                  refreshTodos,
                  setValueInput
                )
              }
              disabled={isCreating}
            >
              Добавить запись
            </button>
          </div>
          <div className={styles.searchAndSort}>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => OnChangeSearch(e, setIsSearch)}
              placeholder="Поиск..."
            />
            <button
              type="button"
              className={isSorted ? styles.sorted : styles.notSorted}
              onClick={() => setIsSorted(!isSorted)}
            >
              Сортировка
            </button>
          </div>
        </div>
      </form>
      <div className={styles.blockTodolist}>
        <ul>
          {searchItem.map(({ id, title }) => (
            <li key={id}>
              <Link to={`task/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
