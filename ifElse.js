function prepareChai(type) {
  if (type === 'Masala Chai') {
    console.log('Adding spices to the chai');
  } else {
    console.log('Preparing regular chai');
  }
}

prepareChai('Masala Chai'); //argument
prepareChai('Ginger Chai');

//EK online store mein, agar customer ka total bill amount 1000 se zyada hai, to 10% discount milta hai, Nahi toh, full amount pay karna padta hai

function calculateTotal(amount) {
  //validation:convert to Number
  const newAmount = Number(amount);
  // if (newAmount > 1000) {
  //   return newAmount * 0.9;
  // } else {
  //   return newAmount;
  // }
  //or
  return newAmount > 1000 ? newAmount * 0.9 : amount;
}
//If newAmount > 1000, return newAmount * 0.9.
// Else, return the original amount.

// function's execution stop at the moment it encounters it's first return statement
let finalBill = calculateTotal(2000);
console.log(finalBill);

//switch
function trafficLight(color) {
  switch (color) {
    case 'red':
      console.log('stop');
      break;
    case 'yellow':
      console.log('slow down');
      break;
    case 'green':
      console.log('go....');
      break;
    default:
      console.log('chalan kaat do');
  }
}

trafficLight('yellow');

function checkTruthyValue(value) {
  const type = typeof value;
  if (value) {
    console.log(`✅ Value:`, value, `| Type: ${type} → Truthy`);
  } else {
    console.log(`❌ Value:`, value, `| Type: ${type} → Falsy`);
  }
}

checkTruthyValue(1);
checkTruthyValue(0);
checkTruthyValue('devashish');
checkTruthyValue('');
checkTruthyValue([]);
checkTruthyValue({});
checkTruthyValue(false);
checkTruthyValue(null);
checkTruthyValue(undefined);
checkTruthyValue(NaN);

// In JavaScript, every value is either **truthy** or **falsy** when evaluated in a Boolean context (like `if` conditions).

// **Falsy** values are only `false`, `0`, `''`, `null`, `undefined`, and `NaN`; everything else is **truthy**.

function login(username, password) {
  if ((username === 'admin' && password === '1234') || loginIp == '127') {
    console.log('Login success');
  } else {
    console.log('Invalid creds....');
  }
}
