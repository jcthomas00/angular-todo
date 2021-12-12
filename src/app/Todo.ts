export class Todo{
    task:string;
    completed:boolean = false;

    constructor(task:string){
      this.task = task;
    }

    toggleTask():void{
        this.completed = !this.completed;
    }
}