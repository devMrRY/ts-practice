// implement custom pick

type MyPick<T, K extends keyof T> = {[Key in K]: T[K]};

interface ITodo {
    title: number;
    description: string;
    completed: boolean;
}

type IPickedTodoItem = MyPick<ITodo, "title">;