class TaskModel {
  constructor (task) {
    this.desc = task
    this.complete = false
    this.archived = false
    this.createdAt = new Date()
    this.id = Math.floor(Math.random() * 10000)
  }
}

export default TaskModel
