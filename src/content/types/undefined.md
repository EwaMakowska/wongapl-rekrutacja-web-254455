---
name: Undefined
description: Represents a value that has not been assigned.
---

In TypeScript, `undefined` is a type with only one value: `undefined`. By default, it's a subtype of all other types, meaning you can assign `undefined` to a variable of any type. However, with the `strictNullChecks` flag enabled, `undefined` is only assignable to `any`, `unknown`, and its own type.

### Example of usage

```typescript
let u: undefined = undefined;
let notAssigned: string; // "notAssigned" is undefined here

function doSomething(x: string | undefined) {
  if (x === undefined) {
    // Handle the undefined case
  }
}
```

### Notes

- It's a best practice to enable the `strictNullChecks` compiler option to avoid common bugs related to `null` and `undefined` values. 