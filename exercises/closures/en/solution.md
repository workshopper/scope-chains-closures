----

# Solution

Let's look at the scope chain for your solution:

```
  foo()
 var bar
return zip
    ↑
    |
  zip()
bar = true
```

By referencing `bar` within `zip`, we have created a _Closure_ where `zip()` _closes over_ the variable `bar` from its parent scope `foo()`.

Since we are returning the function `zip`, the reference to `bar` is maintained (and hence the closure is maintained) until `zip` is no longer required.

This has interesting implications for memory, which we will cover in the next lesson.

----

# Next lesson

Execute `$ADVENTURE_COMMAND` to move on to the next lesson: _Garbage Collection_.
