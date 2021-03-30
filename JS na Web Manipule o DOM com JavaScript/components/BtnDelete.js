const BtnDelete = () => {

    const btnDelete = document.createElement('button')
    btnDelete.innerText = 'Delete'
    btnDelete.addEventListener('click', deleteTask)
    
    return btnDelete
}

const deleteTask = event => {

    event.target.parentElement.remove()
}

export default BtnDelete