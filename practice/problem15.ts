// achieve readyonly functionality deeper level
import type { DeepPartial } from "./problem9";

export type TMyReadOnly<T> = {
    readonly [key in keyof T]: T[key] extends Object ? TMyReadOnly<T[key]> : T[key];
};

interface ITodo {
    title: number;
    description: string;
    completed: boolean;
    meta: {
        name: string;
        level: {
            name: string;
            child: number[]
        }
    }
}

type t = TMyReadOnly<ITodo>

const newObj: DeepPartial<TMyReadOnly<ITodo>> = {
    title: 12,
    description: "desc",
    completed: false,
    meta: {
        name: "metas",
    }
}

newObj.title = 23;
newObj.meta.name = "new meta name";
newObj.meta.level.child.push(4);