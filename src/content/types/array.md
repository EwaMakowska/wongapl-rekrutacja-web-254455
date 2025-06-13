---
name: Array
description: Represents a collection of values of the same type.
---

Arrays in TypeScript can be written in two ways. The first, and most common, uses square brackets `[]` to denote the type of elements in the array. The second way uses a generic `Array<elemType>` syntax.

### Example of usage

```typescript
let list: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

names.push("David");
```

### Notes

- Arrays are zero-indexed, meaning the first element is at index 0.
- TypeScript provides strong typing for array elements, preventing you from adding elements of the wrong type. 