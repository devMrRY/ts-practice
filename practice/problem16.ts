// convert tuple to object

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, "2", 3, "4"] as const;
const tupleMix2 = [1, "2", 3, {}] as const;

export type TupleToObject<T extends readonly PropertyKey[]> = {
    [k in T[number]]: k
}

type ss = TupleToObject<typeof tuple>
type sssss = TupleToObject<typeof tupleMix2>