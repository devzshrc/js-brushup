# JS
story starts from data-
1. what is the data that we have
2. and what operations we need to perform on our data

data -> devashish, age:19

//page, forms and session => early days
Here’s your **entire JavaScript fundamentals module** summarized cleanly, in perfect logical sequence — no fluff, no gaps, no sugarcoating.

---

### **1. Variables & Constants**

* `var` → function-scoped, causes scope issues (avoid).
* `let` → block-scoped, preferred for reassignable variables.
* `const` → block-scoped, for values that never change.

Example:

```js
var name = 'dev';
const pi = 3.14;
```

---

### **2. Data Types**

There are **two main categories**:
**a. Primitives** (copied by value)

* `Number` → e.g. `42.34`
* `String` → e.g. `'Hello'`
* `Boolean` → `true` / `false`
* `Null` → intentional absence of value (typeof is “object”)
* `Undefined` → declared but not assigned
* `Symbol` → unique and immutable identifier

**b. Non-Primitives (Objects)** (copied by reference)

* Arrays, Functions, and Objects like:

```js
let person = { name: 'devashish', age: 19, isStudent: true };
```

---

### **3. Type Conversion**

Data often arrives in unexpected formats (e.g. strings from APIs or databases).
You must know how to convert:

**Explicit Conversions**

```js
Number('42');     // converts string to number
parseInt('42');   // older, less strict version
String(123);      // converts number to string
Boolean('text');  // truthy values -> true
```

If a conversion fails, you get `NaN` (Not a Number), not an error.

---

### **4. Operations & Expressions**

Use parentheses `()` to control order of execution.

Arithmetic:

```js
+, -, *, /, %, ** (power)
```

Example:

```js
let a = 10, b = 3;
a + b; // 13
a ** b; // 1000
```

---

### **5. Comparisons**

All comparisons return `true` or `false`.

| Operator             | Meaning                   | Notes                  |
| -------------------- | ------------------------- | ---------------------- |
| `==`                 | Equal value               | Loose (converts types) |
| `===`                | Equal value & type        | Strict, recommended    |
| `!=`                 | Not equal                 | Loose                  |
| `!==`                | Not equal & not same type | Strict                 |
| `>`, `<`, `>=`, `<=` | Relational comparisons    | Numeric/lexical        |

Example:

```js
x === y; // true only if both value and type match
```

---

### **6. Math Object**

Built-in static object providing mathematical constants & functions.
Usage: `Math.method(value)` — never `new Math()`.

Common methods:

```js
Math.abs(x);       // absolute value
Math.sqrt(x);      // square root
Math.pow(x, y);    // power
Math.floor(x);     // round down
Math.ceil(x);      // round up
Math.random();     // random num 0–1
Math.max(a,b,...); // largest
Math.min(a,b,...); // smallest
```

Example:

```js
Math.random() * 10; // random 0–9.999...
```

---

### **7. Date & Time**

`Date` is an object that handles date/time data.

Creation:

```js
new Date();             // current date/time
new Date('2025-10-31'); // specific date
```

Useful methods:

```js
date.getFullYear(); // 2025
date.getMonth();    // 0–11
date.getDate();     // 1–31
date.getDay();      // 0–6 (Sun–Sat)
date.getTime();     // ms since Jan 1 1970
Date.now();         // current timestamp
```

You can also format or manipulate dates using external libraries like `moment.js` or `dayjs`.

---

### **8. Strings**

Strings are sequences of characters.

Creation:

```js
let text = 'Hello World';
```

Common operations:

```js
text.length;            // count chars
text.toUpperCase();     // HELLO WORLD
text.toLowerCase();     // hello world
text.indexOf('W');      // 6
text.slice(0, 5);       // Hello
text.replace('Hello', 'Hi');
text.includes('World'); // true
```

Concatenation:

```js
let fullName = firstName + ' ' + lastName;
```

**Template Literals (modern way):**

```js
`My name is ${name} and I’m ${age} years old.`
```

---

### **9. Object Literals**

Objects store data as key–value pairs.

```js
let chaiRecipe = {
  name: 'masala chai',
  ingredients: {
    teaLeaves: 'Assam tea',
    milk: 'full cream',
    sugar: 'brown sugar',
  },
  instruction: 'Boil water and mix everything',
};
```

Accessing data:

```js
chaiRecipe.name;
chaiRecipe.ingredients.sugar;
```

**Spread Operator (`...`)**
Used to copy or merge objects/arrays immutably:

```js
let updated = { ...chaiRecipe, sugar: 'jaggery' };
```

This creates a **new object** without modifying the original.

---

### **10. Destructuring**

Quick way to extract values.

**Object Destructuring**

```js
let { name, ingredients } = chaiRecipe;
```

**Array Destructuring**

```js
let [firstChai, secondChai] = chaiTypes;
```

---

### **11. Spread vs Rest**

Both use `...`, but for opposite purposes:

* **Spread**: expands data (copying/spreading items)
* **Rest**: collects data into an array/object

```js
function logAll(...args) { console.log(args); }
```

---

### **In Summary:**

JavaScript fundamentals revolve around:

* Understanding **data types**
* Knowing how to **convert and compare**
* Using **Math**, **Date**, and **String** built-ins effectively
* Structuring and unpacking data with **objects**, **arrays**, **spread**, and **destructuring**

These are your building blocks — once you can manipulate data confidently, you can handle any logic or API layer on top of it.


