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

By following the arrows, we can see `zip()` has access to `var bar`, but not the
other way around.

----

# Next lesson

Execute `$ADVENTURE_COMMAND` to move on to the next lesson: _Global Scope & Shadowing_.
