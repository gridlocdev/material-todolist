export default class Todo {
  public id: number;
  public text: string;
  public completed: boolean;
  /**
   *Constructor for the Todo class
   */
  constructor(id: number, text: string, completed: boolean) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }
}
