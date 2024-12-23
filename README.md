# JavaScript_Basic
Basic JavaScript
// Everything In Javascript Happen inside the execution context
// Execution context is further distributed into two Components
// 1.Memory Components or Veriable Enviroment
        This is where every variables and functions are stored in a "Key : Value" format
// 2.Code Components or Thread Of Execution
        This is the place where code is executed "One Line at a Time"
// *** JavaScript is a Synchronous Single Threaded Language ***
// Javascript execute code one line at a time in a top-down order only
// when ever any JS program is running it going to create an execution context 
// Each function invokation will create an execution context
// the main execution context is known as Global Execution Context
// all of the execution context is maintained by javascript engin in a stack known as Call stack
// with GEC at the bottom and each execution context created will be placed on top of it 
// execution will happen in LIFO format only
// once all the execution context is executed it will clear out the call stack
