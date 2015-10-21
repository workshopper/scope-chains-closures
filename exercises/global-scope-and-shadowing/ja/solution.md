----

# Solution

The scope chain of the solution looks like this:

```
(global)
  quux
    ↑
    |
  foo()
 var bar
    ↑
    |
   zip()
 var quux
```

Following the arrows, we can see that the `quux` assigned inside `foo()` has
become globally scoped. This is a different `quux` from the one inside `zip()`,
which now shadows the globally scoped `quux`.

----

# Next lesson

Execute `$ADVENTURE_COMMAND` to move on to the next lesson: _Closures_.
