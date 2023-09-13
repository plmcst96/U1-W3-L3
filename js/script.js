const taskForm = document.getElementById('toForm')
taskForm.addEventListener('submit', function (ev) {
    ev.preventDefault()

    const taskForm = document.getElementById('task')
    const noteForm = document.getElementById('note')
    const dateForm = document.getElementById('date')
    const hourForm = document.getElementById('hour')

    const newTask = {
        task: taskForm.value,
        note: noteForm.value,
        date: dateForm.value,
        hour: hourForm.value,
    }
    console.log('Nuova Task list salvata :)', newTask)

    const newBlockTask = document.createElement('div')
    newBlockTask.classList.add('toDoList')
    newBlockTask.innerHTML = `
    <p>${newTask.task} : ${newTask.note}</p>
    <p>${newTask.date}</p>
    <p>${newTask.hour}</p>
    <button onclick="deleteTask(event)">ELIMINA!</button>
    `
    const positionTask = document.getElementById('taskList')
    positionTask.appendChild(newBlockTask)

    taskForm.value = ''
    noteForm.value = ''
    dateForm.value = ''
    hourForm.value = ''

    const taskBar = document.getElementsByClassName('toDoList')
    newBlockTask.addEventListener('click', function () {
        taskBar.innerHTML = `<del>${newTask}</del>`
    })
})
const deleteTask = function (ev) {
    const clickBut = ev.target
    console.log(clickBut.parentElement)
    clickBut.parentElement.remove()
}
