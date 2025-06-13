---
name: Object
description: Represents any value that is not a primitive.
---

The `object` type represents any non-primitive value. This means it can be any value except `string`, `number`, `boolean`, `symbol`, `null`, or `undefined`. It is useful for describing APIs that expect an object but don't care about its specific properties.

### Example of usage

```typescript
let user: object;

user = { name: "John", age: 30 }; // OK

// user = "hello"; // Error: Type 'string' is not assignable to type 'object'.
```

### Notes

- The `object` type is not the same as `{}` (the empty object type) or `Object`.
- It's generally more useful to define a specific object shape with an interface or type alias rather than using the generic `object` type. 