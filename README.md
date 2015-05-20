# Scope Chains And Closures Workshop


## Getting Started

```
$ npm install -g scope-chains-closures
$ scope-chains-closures # or, shorter: sccjs
```

Select the first lesson using arrow keys, then press <enter>, and follow the
prompts.

## Help

Be sure to check your work first, which can often provide hints:

```
$ scope-chains-closures verify <your-file.js>
```

If you're still having troubles, post a question in the nodeschool issues
repository:
[http://bit.ly/scope-chains-question](http://bit.ly/scope-chains-question)

## CampJS

This workshop was originally created for [CampJS V](http://v.campjs.com) - a
weekend long unconference in Melbourne, Australia.

# Contributing

Pull Requests are welcome!

This is a truly _open_ open source project: If your contributions are of a high
quality, I will give you push permissions to make direct changes in the future.

# Support Development

If you like the workshop, consider buying me a beer with Bitcoin:

[![3JehsUfrs7PTCc6n1fmD5zTaTbucf6jd8W](http://zxing.org/w/chart?cht=qr&chs=230x230&chld=L&choe=UTF-8&chl=bitcoin%3A3JehsUfrs7PTCc6n1fmD5zTaTbucf6jd8W%3Fmessage%3DDonation%2520for%2520scope-chains-closures%2520workshop)](bitcoin:3JehsUfrs7PTCc6n1fmD5zTaTbucf6jd8W?message=Donation%20for%20scope-chains-closures%20workshop)

[**3JehsUfrs7PTCc6n1fmD5zTaTbucf6jd8W**](bitcoin:3JehsUfrs7PTCc6n1fmD5zTaTbucf6jd8W?message=Donation%20for%20scope-chains-closures%20workshop)


# Lessons

Lesson 1 (Scopes):
  Create a function `foo` which contains one variable lexically scoped called
  `bar`

  foo()
    - var bar

Lesson 2 (Scope Chains):
  Modify your solution from lesson 1 so `foo` contains another function `zip`
  which itself contains one variable lexically scopped called `quux`

  foo()
    - var bar
    zip()
      - var quux

Lesson 3 (Scope Chains: The Global Scope):
  (The global scope sits at the top of every scope chain. If a variable isn't
  scoped anywhere else, it is by default scoped to the global scope)
  Modify your solution from lesson 2 to set the value of `quux` inside `foo` to
  be true, and the value of `quux` inside `zip` to be `false`.

  global
    foo()
      - quux = true
      - var bar
      zip()
        - var quux = false

  (then an explanation of how you can't access the inner scope (`zip`) from the
  outer scope (`foo`). Instead, you end up creating a global variable `quux`,
  then 'shadowing' it later inside `zip`)

Lesson 4 (Closures):
  Modify your solution from lesson 3 so `zip` assigns the value true to `bar`,
  then return the function `zip` as the result of `foo`

  global
    - var quux = true
    foo()
      - var bar
      zip()
        - var quux = false
        - bar = true
      return zip

  (Congratulate them on creating their first closure)

Lesson 5 (Garbage Collection):
  ???


# Talk

## 5 Minute version

Minute 1:

[Slide: name]

"Can I get a show of hands: Who here would be confident explaining Scope Chains, Closures, and Garbage Collection to a JS newbie right now?"

[Slide: 4 points]

I'm going to talk about 4 things today:
 * The different kinds of scope
 * Scope Chains
 * Closures
 * (briefly) Garbage Collection

Minute 2:

[Slide: scopes]

Let's start with the different kinds of scopes:

[Slide: `var`]

 * `var` is lexically scoped (inside a function)
   * ie; That variable is available within the function it is defined in, but not outside it.

[Slide: `let` & `const`]

 * `let` & `const` are block scoped 
   * Block scoping means  ??

[Slide: hoisting]

It's worth mentioning that Hoisting can be the source of many scope-related bugs in JS. I wont cover it off in this talk, but it's definitely something you should be familiar with.

Minute 3:

[Slide: nested]

These scopes (lexical & block) can be nested!

[Slide: lexical in lexical]

 * A function inside another function is a lexical scope within a lexical scope.

[Slide: block in block]

 * A `for` loop inside a `for` loop is a block scope inside a block scope.

[Slide: block in function]

 * A `for` loop inside a `function` is a block scope inside a lexical scope.

[Slide: inner access outer]

An important note: Inner scopes can access the variables of outer scopes

[Slide: not outer access inner]

(but NOT vice-versa)

[Slide: multiple scopes]

You can have multiple scopes within another scope.

[Slide: tree structure]

These nested scopes sound like a tree structure.

And when you're looking from one scope up to its outer scopes (remember; inner scopes can access outer scopes, but not vice versa), that sounds like a chain...

[Slide: Scope Chain]

A Scope Chain.

Minute 4:

[Slide: Closure]

So what's a closure?
It's a scope that is referencing a variable in an outer scope (ie; higher up the scope chain).

[Slide: inner access outer]

If one of these functions references a variable from higher up the scope chain,

[Slide: closed over]

it is said to have **closed over** that variable.

The variable will stay closed over until that closure is no longer needed (eg; execution of the program has moved over and past it).

The interesting part is JS functions are first-class, so they can be passed around, returned from other functions, passed as parameters to other functions, etc. In that case, execution of the function may not occur until some later time in the program.

[Slide: closed over, long chain]

When a closure exists, the entire scope chain (all the scopes *up* the tree) must be kept in memory.

Minute 5:

[Slide: released scope]

Once the closure is no longer needed, it releases its hold on the scope chain.

[Slide: garbage collection of chain]

At this point, the Garbage Collector is able to come along and free the memory for that Scope Chain. That's essentially all Garbage Collection is; freeing up no longer needed scope chains.

[Slide: summary]

So there we have it:
 * The different kinds of scope (lexical & block)
 * Which can be nested, forming a chain where inner scopes can reference variables from outer scopes
 * A closure is a scope which references an outer scope's variable
 * Garbage collection can only occur for a scope chain when there are no closures over it

"Now we've wrapped up, can I get another show of hands who would be confident explaining Scope Chains, Closures, and Garbage Collection to a JS newbie?"

[Slide: name]

Thanks!


## Scrapped parts:

This is where **hoisting** gets tricky

**hoisting** is the name given to the first pass JS interpreters make over any code.
The second pass is execution.
During hoisting, all the variable and function declarations are gathered up. But *not* functions part of a function expression.
They're put into their relative scope. What is that scope? It's the lexical or block scope they were declared in.
