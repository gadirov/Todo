export interface IItem{
    id:number,
    text:string,
    completed: boolean
}
export interface IHandlerFuncs{
    deleteHandler: (id: number) => void,
    editTodoHandler: (item: IItem) => void
  }