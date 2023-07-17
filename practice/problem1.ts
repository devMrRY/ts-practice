/**
 * https://dev.to/macsikora/advanced-typescript-exercises-answer-1-59ge
 * 
 * If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type? 
 * For example if we have Promise<ExampleType> how to get ExampleType?
 */

type User = {
    id: number,
    name: string,
}

type Doc = {
    id: string,
}

type GetInsideProperty<T, K extends keyof T> = T extends {[Key in K]: infer Inner} ? Inner : never;

type UserType = GetInsideProperty<User, 'name'>;
type DocType = GetInsideProperty<Doc, 'id'>;
