# Scope Chains And Closures Workshop

Scope, Scope Chains, Closures, and Garbage Collection all have one thing in
common: They're often hand-waved away. How do closures actually work? When does
Garbage Collection occur? What really IS a Scope Chain?

In this workshop, we will discover it's not black magic after all; No hand
waving is required to explain these language features, in fact you've been using
them all along without realising.

----

# Scopes

The main type of scope in Javascript is Lexical Scoping. Present in the language
from the very beginning, this is the scope created within a function, and the
one most developers are familiar with.[1]

ES6 recently defined Block Scoping. This scope is created within curly braced
blocks.[2]

## Initializing Variables

The way a variable is initialized determines which scope type it is:

### Lexical Scope

`var` is used to denote a variable which is Lexically Scoped to the current
function:

```js
function someFunc() {
  var aVariable;
}
```

*`aVariable` is lexically scoped within `someFunc`*

### Block Scope

`let` & `const` are used to denote variables which are Block Scoped to the
current curly braced block:

```js
if (true) {
  let aVariable;
}
```

*`aVariable` is block scoped within the `if`'s curly braces*

----

# Your Mission

In an empty file, create a function `foo` which contains one variable lexically
scoped named `bar`.

Once complete, execute `$ADVENTURE_COMMAND verify <your-file.js>` to verify your
solution.

## Notes

 * [1]: There are also 4 other scopes in the language: Global, `with`, `catch`,
        and `eval`. These tend not to be used much, so we will ignore them.
 * [2]: This workshop will concentrate only on Lexical Scoping.
