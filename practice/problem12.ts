// remove part of a key and create a type with remaining part and value type

interface ApiData {
  "maps:longitude": string;
  "maps:latitude": string;
}

export type RemoveMapsFromObj<T> = {
  [K in keyof T as RemoveKeysPart<K>]: T[K];
};

type DesiredShape = RemoveMapsFromObj<ApiData>;

type RemoveKeysPart<T> = T extends `maps:${infer U}` ? U : T;
