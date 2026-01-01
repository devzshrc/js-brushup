//String
// const str1 = 'Rohit';
// const day = 18;
// const str2 = `I am dev
// and this is on the second lines
// his fav number is ${day}`;
// console.log(str1, str2);

const str = `Hii everyone`;
console.log(str.length);
//spaces are also special characters that will be counted
console.log(str[4]);
console.log(str[5]);
// Strings are immutable
// str[2] = 'd';
// this is not possible
//original string -> is a primitive -> is not mutable

//uppercase
console.log(str.toUpperCase());
console.log(`Original string is still: ${str}`);

//str.toUpperCase -> is the applied to out original string or does it return a new string with applied changes
//answer is that we get a new string
console.log(str.indexOf('eve'));
//index will be returned
// if not found -> -1 will be returned
// in real life what we do is we convert the entire incoming string to uppercase and then operate on it to avoid capitalization search issues
//indexOf returns the first index found
//similarly we have lastIndexOf('eve')
//helpful if multifple instances are there and we want to find the last instance index
console.log(str.includes('eve'));
//returns boolean - true or false

// extracting substrings

// .slice(startIndex,endIndex): Extracts a section of a string and returns it as a new string
console.log(str.slice(1, 5));
//index 5 is not included
//STRING IS IMMUTABLE
//-ve index
console.log(str.slice(-4));
