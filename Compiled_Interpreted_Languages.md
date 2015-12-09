![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Compiled vs Interpreted Languages.
Programming Languages are typically categorized by the process we use to go from code written by us to runnable programs.

The processes are:  
1. Compilation  
2. Interpretation  

We'll discuss both. And we'll see how software passes through a couple of phases as it's being developed and used or executed.

## Objectives
By the end of this, students should be able to:  
- Learn a bit about how programs are understood by computer hardware.  
- Understand the difference between compiled and interpreted languages.  
- Use this knowledge to understand variable scope in Javascript.  
- Use this knowledge to understand what happens during compile time and runtime.  
- Provide the language needed to be able to communicate with other developers when discussing and evaluating programming languages.  


#### Program Creation/Development.
A developer writes code in a file using an editor. Perhaps in a source file named `hello_world.c`

```
$ touch hello_world.c
$ subl hello_world.c
```

Write some code in this file.

```c
/* Hello World program */
#include<stdio.h>
main(){
    printf("Hello World");
}
```

#### Program Compilation.
A developer *compiles* the code. This is the process of turning the text, i.e. source code, in the above file into a form,(ones and zeros), that can be executed by the computer. 

The resulting ones and zeros is often referred to as a *binary* or *executable*.

`Source Code` ---compilation--> `Executable`

Here we compile hello_world.c and produce an executable named hello_world: 
**Notice the executable is missing the file extension .c**

```
$ gcc -o hello_world hello_world.c
```

#### Program Execution.
A User will install the *executable*, `hello_world`, on their computer and run it.

```
$ hello_world
Hello World!
$
```

When we run this `hello_world` program the computer will load alll these 1's and 0's into the computer memory and then the computer's Central Processing Unit(CPU) will process these 1's and 0's.

Lets be bold, and open up that hello_world executable, I mena whats in there, huh?

`$ od -H hello_world`

#### Assembly Language (optional)

The 1's and 0's that are run by the CPU actually are representation of the CPU's *Assembly Language*. These are low level instructions that the CPU understands.

This will produce the actual assembly language for your computer's CPU in the `hello_world.s` file.

`$ gcc -S -c hello_world.c` 
### Lab

1. Create a program that will print "Hello my name is <your name". 
2. Run it.  

#### Compile Time vs Runtime. (Optional)

Compiling source code is a large area of interest and research. There are many steps involved in compilation. For example:

1. Tokenize/Lexical Analysis is where each character in source code is scanned and grouped into language constructs, or tokens. 
2. Generate internal structures to implement variable scope.
3. Building an Abstract Syntax Tree(AST). This will model the semantics/meaning of a program. Build expression trees where each node is a token and the tree structure captures the semantics of the program.
4. Generating lower level, intermediate code. This intermediate code can be Assembly Language or 1's and 0's for compiled languages. Or it can be bytecode for interpreted langauges.

`Lexical Analysis --> Build variable scope (Lexical Scope) ---> Build AST --> Generate executable or Bytecode`

Creating a running program, a process, is also a complex task.

1. Load executable into memory.
2. Find starting point of program.
3. Allocate memory for process.
.....
N. 1' and 0's read and run by CPU.

We'll dive into more of these topics later.

## Compiled Languages
The above is the process used for programming languages that are explicitly compiled. Compiled languages such as C, C++, Go, Swift, etc follow this process.

The source code is translated from text, i.e. source code, to ones and zeros, i.e. executables, that are understood and run by the computer's CPU. 

The Central Proccessing Unit(CPU) is an actual piece of hardware, a chip, that knows what to do with all these 1's and 0's in the executable.

## You Do
* Look at the executable file, it's a bunch of 1's and 0's that are represented using Hexidecimal/Hex. What's Hex?

* Draw a diagram of the above process and show it to another student and the instructor.

* Create a C program that will output your name.

## We Do

Show and discuss some diagrams created by students.

## Virtual Machines (VM)

There is the concept of running programs, executables, not directly on the computer's CPU, but running executables on a software representation of a CPU. This software representation of a CPU is a Virtual Machine (VM).

The VM is actually a program that when run acts like the computer's CPU.

An example of running a VM is starting nodejs and pass nodejs a javascript file, `$ node foo.js`

## I Do 
Draw diagram/s to represent how a VM works.

## Interpreted Languages

When creating a program for an interpreted language we skip the explicit compilation phase. Another words, the developer doesn't run a command to compile the source code into an executable. Like we did above.

Instead the developer will:

#### Program Creation
A developer writes code in a file using an editor. Perhaps in a source file named `hello_world.js`

```
$ touch hello_world.js
$ subl hello_world.js
```

Write some code.

```javascript
// Hello World program 
console.log('Hello World!');
```

#### Program Execution, i.e. Runtime.
A User will run install the source code `hello_world.js`, on their computer and run it.

```
$ node hello_world.js
Hello World!
$
```

Running the program above will:
* Start up the node program
* Which will load the hello_world.js file in.
* Pass the source code on to node's Javascript VM. 
* The Javascript VM will automatically compile the source code to "byte code".
* The Javascript VM will run the program's byte code. 

Just like the CPU knows what to do with the 1's and 0's in the executable. The VM knows what to do with the "byte code".

## You Do
Create a Javascript program that will output your name. *Should be a piece of cake, aye*

Enumerate each step, in your own words, that happens when one runs `node foo.js` to another student.

Listen to another students explaination of these steps and write them out, on a whiteboard, piece of paper, ...


## We Do
Show and discuss a student's explaination.

## Compiled vs Interpreted Languages
Here we used Javascript as the interpreted language, but there are many more interpreted languages. Java, Ruby, Python, Smalltalk, Lisp are all interpreted languages. Lisp is the granddad of interpreted languages.

There are many reasons why one would choose a compiled or interpreted langauge. For example, compiled languages run much faster and the compilation phase can help a developer determine if they are using the correct data types.

Intepreted languages are typically easier to develop with and easily run on a number of different platforms, such as Windows and Linux. These languages are typically more expressive, they are better at representing concepts in code.

There are lots of flame wars about these and other pros and cons of compiled vs interpreted langauges. IMO, use the right tool for the job. 

## Your Turn (Optional) 
Research the differences, pros and cons, of compiled and interpreted languages.

## Additional Resources

- [Compiled Languages](http://en.wikipedia.org/wiki/Compiled_language)
- [Interpreted Languages](http://en.wikipedia.org/wiki/Interpreted_language)
- [Programming Language Pragmatics](http://www.amazon.com/Programming-Language-Pragmatics-Third-Edition/dp/0123745144)

