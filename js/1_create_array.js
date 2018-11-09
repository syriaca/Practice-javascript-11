// 1. Create a new array named languages that contains at least 7 programming languages.

let languages = ['javascript', 'html', 'css', 'c#', 'php', 'python', 'java'];
console.log(languages);

// 2. Use console.log to display the number of elements in the array:

console.log(languages.length);

/* 3. Use console.log to list the first element from the array using an index value. */

console.log(languages[0]);

/* 4. Use console.log to list the last element from the array using an index value. */
console.log(languages[6]);

// 5. Use an array method to add an element to the END of the array.
languages.push('node');

// 6. Use an array method to add an element to the BEGINNING of the array.
languages.unshift('ruby');

/* 7. Log all of the elements in the array as a single string using the array .join() method */
console.log(languages.join(' '));

// 8. Use an array method to REMOVE the LAST element from the array.
languages.pop();

// 9. Use an array method to REMOVE the first element from the array.
languages.shift();

/* 10. Log all of the elements in the array as a single string using the array .join() method. Thisis the same as step 7 above */
console.log(languages.join(', '));

// Run your code by typing node 1_create_array.js in the console below

console.log(languages);