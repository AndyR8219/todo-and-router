import { URL_TODOS } from '../../constants/constants'

export const RequestUpdateItem = (e, id, setIsEditing, task) => {
  e.preventDefault()
  if (task.trim()) {
    fetch(URL_TODOS + `/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        title: task,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then(() => {
        setIsEditing(false)
      })
  } else {
    alert('Поле не должно быть пустым')
  }
}
