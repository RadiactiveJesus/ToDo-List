export class ToDoList {
  static list = []
  
  constructor(description) {
    this.description = description,
    this.complete = false,
    this.index = ToDoList.list.length
    ToDoList.list.push(this)
  }
  
  update() {
    if (this.complete) {
      this.complete = false;
    } else {
      this.complete = true;
    }
  }
}