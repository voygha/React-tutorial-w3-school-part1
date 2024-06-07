//The Code Doesn't Run

/*
Ternary Operator
The ternary operator is a simplified conditional operator like if / else.

Syntax: condition ? <expression if true> : <expression if false>

Here is an example using if / else:

*/

//Example
//Before:
const authenticated =true;

const renderApp= () =>{
    console.log("renderApp");
}

const renderLogin = () =>{
    console.log("Render Login");
}
//BEFORE
/* if (authenticated) {
  renderApp();
} else {
  renderLogin();
} */

//NOW
authenticated ? renderApp() : renderLogin();