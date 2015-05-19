# Scopes

The main type of scope in Javascript is Lexical Scoping. Present in the language
from the very beginning, this is the scope created within a function, and the
one most developers are familiar with.[1]

ES6 recently defined Block Scoping. This scope is created within curly braced
blcoks.[2]

## Intializing Variables

The way a variable is initialized determines which scope type it is:

### Lexical Scope

`var` is used to denote a variable which is Lexically Scopped to the current
function.

### Block Scope

`let` & `const` are used to denote variables which are Block Scopped to the
current curly braced block.

----

# Your Mission

In an empty file, create a function `foo` which contains one variable lexically
scoped named `bar`.

Once complete, execute `$ADVENTURE_COMMAND verify <your-file.js>` to verify your
solution.

## Notes

 * [1]: There are also 3 other scopes in the language: `with`, `catch`, and
        `eval`. These tend not to be used much, so we will ignore them.
 * [2]: This workshop will concentrate only on Lexical Scoping.

----

# Resources

 * TODO
