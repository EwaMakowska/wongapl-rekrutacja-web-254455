---
name: Custom Types (Type & Interface)
description: Create your own complex types using `type` and `interface`.
---

TypeScript allows you to define your own types using the `type` and `interface` keywords. This is fundamental for creating well-structured and reusable data models in your application.

### `interface`
An interface is a way to define the shape of an object. It can be extended by other interfaces and implemented by classes.

```typescript
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

const user: User = { id: 1, name: "Leanne Graham", isActive: true };
```

### `type`
A type alias can also describe an object shape, but it is more versatile. It can represent primitive types, unions, tuples, and more complex combinations.

```typescript
type Point = {
  x: number;
  y: number;
};

type ID = string | number; // Union type
```

### Notes
- Use `interface` when defining the shape of objects or classes. Prefer `interface` over `type` for object shapes because it offers better error messages and can be extended.
- Use `type` for defining union types, tuples, or other complex types. 