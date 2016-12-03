----

# Solution

The scope chain you created now looks like this:

```
(global)
    ↑
    |
  foo()
 var bar
    ↑
    |
   zip()
 var quux
```

By following the arrows, we can see `zip()` has access to `var bar`, but `foo()` does not have access to `var quux`.

----

# Next lesson

Execute `$ADVENTURE_COMMAND` to move on to the next lesson: _Global Scope & Shadowing_.
