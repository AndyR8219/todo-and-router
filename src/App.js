import { Routes, Route, Navigate } from 'react-router-dom'
import { MainPage } from './components/MainPage/main-page'
import { TaskPage } from './components/TaskPage/task-page'
import { NotFound } from './components/NotFound/not-found'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/task/:id" element={<TaskPage />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace={true} />} />
    </Routes>
  )
}

export default App
