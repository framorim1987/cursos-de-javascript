(() => {
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

    const BtnFinish = () => {

        const btnFinish = document.createElement('button')
        btnFinish.innerText = 'Done'
        btnFinish.addEventListener('click', finishTask)
        
        return btnFinish
    }

    const finishTask = event => {

        event.target.parentElement.classList.toggle('done')
    }

    const BtnDelete = () => {

        const btnDelete = document.createElement('button')
        btnDelete.innerText = 'Delete'
        btnDelete.addEventListener('click', deleteTask)
        
        return btnDelete
    }

    const deleteTask = event => {

        event.target.parentElement.remove()
    }
})()