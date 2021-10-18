//

const task = {
    tasks: [{
        text: 'Grocery shopping',
        complete: true
    }, {
        text: 'Clean yard',
        complete: false
    }, {
        text: 'Film course',
        complete: false
    }],
    getTaskToDo() {
        return this.tasks.filter((task) => task.completed === false)
    }
}

console.log(task.getTaskToDo())