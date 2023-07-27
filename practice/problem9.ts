// Deep Partial

type DeepPartial<Thing> = Thing extends Function
    ? Thing
    : Thing extends Array<infer ArrayMember>
    ? DeepArrayPartial<ArrayMember>
    : Thing extends Object
    ? DeepObjPartial<Thing>
    : Thing | undefined

interface DeepArrayPartial<Thing> extends Array<DeepPartial<Thing>> {}

type DeepObjPartial<Thing> = {
    [Key in keyof Thing]?: DeepPartial<Thing[Key]>
} 

interface Post {
    id: string;
    comments: { value: string }[];
    meta: {
        name: string;
        description: string;
    }
}

const post: Post = {
    id: "1",
    comments: [{ value: "test "}],
    meta: {
        name: "rahul",
        description: "desc"
    }
}

const post2: DeepPartial<Post> = {
    id: "1",
    comments: [{ value: "test "}],
    meta: {
        name: "rahul",
        description: "desc"
    }
}