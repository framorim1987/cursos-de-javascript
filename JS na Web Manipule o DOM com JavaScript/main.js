import BtnFinish from './components/BtnFinish.js'
import BtnDelete from './components/BtnDelete.js'

const btnAdd = document.querySelector('.form-button')

const createTask = event => {

    event.preventDefault()

    const input = document.querySelector('.form-input')
    const taskList = document.querySelector('.list')

    const task = document.createElement('li')
    task.classList.add('task')

    const content = `<p class='content'>${input.value}</p>`

    task.innerHTML = content
    task.appendChild(BtnFinish())
    task.appendChild(BtnDelete())
    taskList.appendChild(task)

    input.value = ''
}

btnAdd.addEventListener('click', createTask)