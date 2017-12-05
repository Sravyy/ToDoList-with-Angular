class Task{
  done: boolean;

  constructor(public descriptionParameter: string, public priorityParameter: string){
    this.done = false;
  }
}
