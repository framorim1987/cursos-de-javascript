const BtnFinish = () => {

    const btnFinish = document.createElement('button')
    btnFinish.innerText = 'Done'
    btnFinish.addEventListener('click', finishTask)

    return btnFinish
}

const finishTask = event => {

    event.target.parentElement.classList.toggle('done')
}

export default BtnFinish