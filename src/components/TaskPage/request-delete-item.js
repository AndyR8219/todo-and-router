import { URL_TODOS } from '../../constants/constants'

export const RequestDeleteItem = (e, id, goHome) => {
  e.preventDefault()

  fetch(URL_TODOS + `/${id}`, { method: 'DELETE' })
    .then((rawResponse) => rawResponse.json())
    .then(() => {
      alert('Задача удалена')
      goHome()
    })
    .catch((err) => console.log(err))
}
