//THE CODE DOESN'T RUN

/*
Modules
JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain the code-base.

ES Modules rely on the import and export statements.


*/

/*
Export
You can export a function or variable from any file.

Let us create a file named person.js, and fill it with the things we want to export.

There are two types of exports: Named and Default.
*/

/*
Named Exports
You can create named exports two ways. In-line individually, or all at once at the bottom.

Example

person.js
*/

//In-line individually:
export const name = "Jesse";
export const age = 40;

//All at once at the bottom
const name1 = "Jesse";
const age1 = 40;

export { name1, age1 }



/**
Default Exports
Let us create another file, named message.js, and use it for demonstrating default export.

You can only have one default export in a file.

Example
message.js

 */


const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + 'years old.';
  };
  
  export default message;


/*
Import
You can import modules into a file in two ways, based on if they are named exports or default exports.

Named exports must be destructured using curly braces. Default exports do not.
*/


//Example
//Import named exports from the file person.js:
import { name2, age2 } from "./person.js";

console.log(name2, age2);

//Example
//Import a default export from the file message.js:

import message2 from "./message.js";