import { Link } from 'react-router-dom'
import styles from './main-page.module.css'

const fetchToDoList = () => [
  { id: 1, name: 'Телевизор' },
  { id: 2, name: 'Телефон' },
  { id: 3, name: 'Планшет' },
]

export const MainPage = () => (
  <div>
    <h4 className={styles.h4}>Список дел</h4>
    <ul>
      {fetchToDoList().map(({ id, name }) => (
        <li key={id}>
          <Link to={`task/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
)
