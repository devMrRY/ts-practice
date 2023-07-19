/**
 * https://dev.to/macsikora/advanced-typescript-exercises-question-6-1hl3
 *
 * The exercise is about getting all value types from the tuple type.
 */

type NaiveFlat<T extends any[]> = unknown; // your code

type Naive = [["a"], ["b", "c"], ["d"]];
type NaiveResult = NaiveFlat<Naive>;
// should evaluate to "a" | "b" | "c" | "d"

// solution 1
{
  // [number] at the end has a purpose of getting all value types of produced type
  type NaiveFlat<T extends any[]> = {
    [key in keyof T]: T[key] extends any[] ? T[key][number] : T[key];
  }[number];

  type NaiveResult = NaiveFlat<Naive>;
}

// harder version of problem
type DeepFlat<T extends any[]> = unknown; // 🔥 here your code

type Deep = [["a"], ["b", "c"], [["d"]], [[[["e"]]]]];
type DeepTestResult = DeepFlat<Deep>;
// should evaluate to "a" | "b" | "c" | "d" | "e"

// solution 2
{
  type DeepFlat<T extends any[]> = {
    [K in keyof T]: T[K] extends any[] ? DeepFlat<T[K]> : T[K];
  }
  type DeepTestResult = DeepFlat<Deep>;
}
