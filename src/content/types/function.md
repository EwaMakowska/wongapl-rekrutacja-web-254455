---
name: Function
description: Describes the shape of a function, including its parameters and return value.
---

TypeScript allows you to define the types for a function's parameters and its return value. This provides strong type safety, ensuring that you call functions with the correct arguments and handle their outputs correctly.

### Example of usage

```typescript
// Named function with typed parameters and return value
function add(x: number, y: number): number {
  return x + y;
}

// Arrow function syntax
const subtract = (x: number, y: number): number => {
  return x - y;
};
```

### Notes

- The return type can often be inferred by TypeScript, but explicitly defining it is a good practice for clarity.
- You can define optional parameters using a `?` after the parameter name. 