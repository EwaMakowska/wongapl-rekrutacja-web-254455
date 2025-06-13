---
name: Boolean
description: "Represents one of two values: true or false."
---

The `boolean` type is a fundamental primitive type in TypeScript. It can only have two values: `true` or `false`. It's commonly used for controlling program flow, such as in `if` statements and loops.

### Example of usage

```typescript
let isDone: boolean = false;
let isLoggedIn: boolean = true;

if (isLoggedIn) {
  console.log("Welcome back!");
}
```

### Notes

- Avoid using the `Boolean` object wrapper (`new Boolean(value)`), as it behaves differently from the primitive `boolean` type.