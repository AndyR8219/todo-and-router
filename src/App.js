import styles from './app.module.css'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './components/MainPage/main-page'
import { TaskPage } from './components/TaskPage/task-page'
import { NotFound } from './components/NotFound/not-found'

function App() {
  return (
    <div className={styles.app}>
      <div>
        <h3 className={styles.h3}>Cписком дел</h3>
        <div className={styles.add}>
          <input type="text" />
          <button>Добавить</button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/task/:id" element={<TaskPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
