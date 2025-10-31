let salesData = [
  { product: 'laptop', price: 1200 },
  { product: 'samrtphones', price: 234 },
  { product: 'headphones', price: 24324 },
  { product: 'keyboards', price: 2342 },
  { product: 'mouse', price: 55646 },
];

let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0);
console.log(totalSales);

// reduce(callback,initial value)
//initial value is accumulator's starting value

//items less than 50
let inventory = [
  { name: 'widget A', stock: 30 },
  { name: 'widget B', stock: 120 },
  { name: 'widget C', stock: 45 },
  { name: 'widget D', stock: 70 },
  { name: 'widget E', stock: 22 },
  { name: 'widget F', stock: 8 },
];

// Returns the elements of an array that meet the condition specified in a callback function.
let lowStockItems = inventory.filter((tempName) => tempName.stock < 50);
console.log(lowStockItems);
//or
let lowStockItemsX = inventory.filter((item) => {
  return item.stock < 50;
});
console.log(lowStockItemsX);
//both syntax will do the same job

//output that we receive from filter is atleast an array for sure

let userActivity = [
  { user: 'dev', activityCount: 45 },
  { user: 'b2', activityCount: 43 },
  { user: 'harhh', activityCount: 12 },
  { user: 'sandip', activityCount: 0 },
  { user: 'parkahr', activityCount: 9 },
];

//find most active user using reduce

//reduce to add karne ke liye hi usually use hota hai to ye kaise karenge
let mostActiveUser = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser,
);

//accumulator- the value resulting from prev call to callbackFn. On the first call, its value is initialValue, if not specified; its value is array[0]

/**
 * reduce() basics:
Normally you use reduce() to combine all elements into one final value — sum, average, concatenated string, etc.
But “combine” doesn’t have to mean addition. You can “combine” items by comparing them too.

How reduce runs here:
On the first call, maxUser is the first element (if you didn’t specify an initial value), and user is the second element.

What happens inside:
For each element, the function compares the current user’s activityCount with the maxUser’s count.

If user.activityCount is greater, it means we found a new “most active” user, so we return that user object.

Otherwise, we return the current maxUser.

That returned value becomes the maxUser for the next iteration.

Result:
By the end, reduce has compared every user once and is holding onto the one with the largest activityCount.

So even though reduce is often used for summing numbers, the core idea is:

it reduces an array to a single value by repeatedly applying a function that merges two elements into one.
 * 
 * / */

let expenses = [
  { description: 'groceries', amount: 50, category: 'food' },
  { description: 'noodels', amount: 70, category: 'food' },
  { description: 'uber ride', amount: 18, category: 'transport' },
  { description: 'movie tickets', amount: 24, category: 'entertainment' },
  { description: 'electricity bill', amount: 92, category: 'utilities' },
];

//datatype of accumulator: whateven u put in
// make expense report
let expenseReport = expenses.reduce(
  (report, expense) => {
    if (!report[expense.category]) {
      report[expense.category] = 0; // handle missing categories
    }
    report[expense.category] += expense.amount;
    return report; // must return accumulator
  },
  { food: 0, utilities: 0 },
);

console.log('expense report:', expenseReport);

// 1. **`reduce()` builds one final result**
//    It loops through every element in the array and keeps track of a single “accumulator” (in this case, `report`). Whatever you return at the end of each iteration becomes the accumulator for the next round.

// 2. **Your accumulator starts as `{ food: 0, utilities: 0 }`**
//    That’s the initial value you provided. It already has two categories, but others (like `transport` or `entertainment`) don’t exist yet, so you have to handle them dynamically.

// 3. **You must return the accumulator every time**
//    Inside the reducer, you must `return report;` at the end of each iteration.
//    If you don’t, the accumulator becomes `undefined` on the next loop, breaking the process.

// 4. **You initialize missing categories**
//    The line

//    ```js
//    if (!report[expense.category]) {
//      report[expense.category] = 0;
//    }
//    ```

//    checks if the category already exists in the accumulator.
//    If not, it creates it with a default value of `0`.
//    This prevents errors like trying to add to `undefined`.

// 5. **You add each expense’s amount to its category**

//    ```js
//    report[expense.category] += expense.amount;
//    ```

//    That line updates the total spending for each category.

// 6. **Final `expenseReport` object holds totals per category**
//    After `reduce()` finishes, you end up with something like:

//    ```js
//    {
//      food: 120,
//      utilities: 92,
//      transport: 18,
//      entertainment: 24
//    }
//    ```

//    This is your summarized expense report.

// 7. **Why this approach is powerful**

//    * Works dynamically — no need to know all categories in advance.
//    * Runs in a single pass over the array.
//    * Scales well if you add hundreds of categories or thousands of records.

// Essentially, `reduce()` here is being used as a smart “group and sum” function — one of the most common real-world use cases beyond just adding numbers.
