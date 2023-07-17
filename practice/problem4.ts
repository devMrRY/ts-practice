/**
 * https://dev.to/macsikora/advanced-typescript-exercises-answer-4-1805
 * 
 * 
 * For given function type F, and any type A (any in this context means we don't restrict the type, 
 * and I don't have in mind any type 😉) create a generic type which will take F as first argument, 
 * A as second and will produce function type G which will be the same as F but with appended argument A as a first one. 
 * 
 * // lets say we have some function type
 * type SomeF = (a: number, b: string) => number 
 * 
 * // and we have our utility type
 * type AppendArgument<F, A> = ... here your code 💪
 * 
 * type FinalF = AppendArgument<SomeF, boolean> 
 * // FinalF should be (x: boolean, a: number, b: string) => number
 * */ 


// solution 1
{
    type SomeF = (a: number, b: string) => number;
    // Parameters can only be applied on functions
    type AppendArgument<F extends (...args: any) => any, A> = (x: A, ...args: Parameters<F>) => ReturnType<F>
    
    type FinalF = AppendArgument<SomeF, boolean>;
}

// solution 2
{
    type SomeF = (a: number, b: string) => number;

    // here infer extracts type of Args and also inter the return type of function as Return
    type AppendArgument<F, A> = F extends (...args: infer Args) => infer Return ? (x: A, ...args: Args) => Return : never;
    // type AppendArgument<F, A> = F extends (...args: infer Inner) => any ? (x: A, ...args: Inner) => ReturnType<F> : never;
    
    type FinalF = AppendArgument<SomeF, boolean>;
}