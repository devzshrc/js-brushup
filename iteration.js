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
