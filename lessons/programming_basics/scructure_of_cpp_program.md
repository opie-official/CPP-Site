# 1. What Is a Program?

A program is a sequence of instructions that a computer executes to perform a task.
In C++, a program is written as source code—plain text files that follow the rules of the C++ language.

C++ programs are typically stored in files with the extension:

- .cpp — C++ source file

- .h or .hpp — header file (used for declarations)

Example:

``` 
main.cpp
math_utils.cpp
math_utils.h
```

# 2. Basic Layout of a C++ Program

A minimal but complete C++ program looks like this:

``` cpp
#include <iostream>

int main() {
std::cout << "Hello, world!" << std::endl;
return 0;
}
```

Even this small program contains all essential structural elements of C++.

Let’s break it down step by step.

# 3. Preprocessor Directives

  ``` cpp
  #include <iostream>
  ``` 

Lines starting with # are preprocessor directives. They are handled before compilation and instruct the compiler to:

- include other files
- define macros
- enable or disable code conditionally

_#include <iostream>_ tells the compiler to include the standard input/output library, which provides:

- std::cout
- std::cin
- std::endl

Important facts:

- < > is used for standard library headers

- " " is used for user-defined headers

Example:

``` cpp
#include "my_header.h"
```

# 4. The main() Function — Program Entry Point

``` cpp
int main() {
   return 0;
}
```

Every C++ program must have exactly one main() function. This is where program execution begins.

Key points:

- int is the return type
- main is the program entry point
- The operating system calls main()

The return value:

- 0 → program executed successfully

- non-zero → error occurred

# 5. Function Body and Code Blocks

 ```  cpp
  {
   std::cout << "Hello, world!" << std::endl;
   return 0;
   }
   ```

Curly braces { } define a block of code.  
A block:

- groups statements
- defines a scope
- controls variable lifetime

Everything inside main is executed sequentially, from top to bottom.

# 6. Statements and Semicolons
``` cpp
   std::cout << "Hello, world!" << std::endl;
```
This is a statement.

In C++:

- most statements end with a semicolon ;
- missing semicolons cause compilation errors

Examples of statements:
``` cpp
int x = 10;
x = x + 1;
return 0;
```
# 7. Namespaces and std::
``` cpp
 std::cout
```
C++ uses namespaces to organize identifiers and avoid name conflicts. std is the standard library namespace. Without std::, the compiler would not know where cout is defined.

Alternative approach:

- using namespace std;

However, this is not recommended in large programs because it may cause name collisions.

# 8. Comments in C++

Comments are ignored by the compiler and are used to explain code.
- Single-line comment
``` cpp
// This is a comment
```
- Multi-line comment
``` cpp
/*
This is a
multi-line comment
*/
```
Good comments explain:

- why something is done
- not what is obvious from the code

# 9. Header Files and Program Structure

In real projects, code is split into multiple files.

Example structure:
``` 
main.cpp
calculator.h
calculator.cpp
```
Header files (.h) contain declarations

Source files (.cpp) contain implementations

This improves:

- readability

- reuse

- compilation time

- maintainability



# 10. Summary of C++ Program Structure

A typical C++ program consists of:

- Preprocessor directives

- Optional global declarations

- The main() function

- Statements and expressions

- Code blocks with {}

- Comments for readability

- Mastering this structure is essential before learning:

- variables

- control flow

- functions

- classes

- memory management