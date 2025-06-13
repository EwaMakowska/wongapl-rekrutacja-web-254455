---
name: Never
description: Represents the type of values that never occur.
---

The `never` type is used for values that should never exist. For instance, `never` is the return type for a function expression that always throws an exception or one that never returns. Variables also acquire the type `never` when narrowed by any type guards that can never be true.

### Example of usage

```typescript
// Function that never returns
function error(message: string): never {
  throw new Error(message);
}

// Function with an infinite loop
function infiniteLoop(): never {
  while (true) {}
}
```

### Notes

- The `never` type is a subtype of, and assignable to, every type.
- However, no type is a subtype of, or assignable to, `never` (except `never` itself). 