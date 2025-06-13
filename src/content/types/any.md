---
name: Any
description: A flexible type that opts out of type checking.
---

The `any` type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking. When a value is of type `any`, you can access any properties of it, call it like a function, or assign it to a variable of any other type.

### Example of usage

```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

### Notes

- Using `any` effectively disables all compile-time type checking for the variable.
- It should be used sparingly, as it undermines the benefits of TypeScript. The `unknown` type is often a safer alternative. 