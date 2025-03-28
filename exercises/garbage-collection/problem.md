# Garbage Collection

Memory in Javascript is managed automatically by the runtime. The runtime
decides when/if to release any allocated memory. This decision process is called
_Garbage Collection_.

Every javascript runtime has their own algorithm for garbage collection, but
most use a variation of Mark & Sweep. The Mark & Sweep algorithm works by
marking references to memory (variables, functions, etc) which are still
reachable from active code. Any reference which is not marked, is swept into
the garbage (i.e. the memory is freed).

This concept of marking reachable memory is particularly relevant to closures:

```
 someFunc()
  var bar
return inner
     ↑
     |
  inner()
 alert(bar)
     ↑
     ⋮
```

When the closure `inner()` is returned from `someFunc()`, it maintains its
reference to `bar`. The Mark & Sweep algorithm will mark `bar` as reachable, and
hence will _not_ garbage collect it.

For `inner()` to correctly resolve its reference to `bar`, not only does the
memory for `bar` need to be kept, but the scope chain which describes how to
reach `bar` must also be kept.

Once the reference to `inner()` is no longer required, it can be marked for
garbage collection, which in turn means `bar` can also be marked, and finally
the entire scope chain can be marked, resulting in the freeing of all the
memory.

In this way, Scope, Scope Chains, Closures, and Garbage Collection are all
closely related.

----

# Your Mission

In this challenge, you will be required to use Chrome DevTools for detecting
Garbage Collection events. Follow these steps to get a feel for what happens
when Chrome performs its Mark & Sweep algorithm:

1)  Fire up a new tab in Chrome
2)  Access DevTools (`F12, Ctrl + Shift + I` on Windows,	`Cmd + Opt + I` on Macs)
3)  Click on the Performance tab
4)  Ensure the settings are like so: `http://i.imgur.com/3RmsJ4I.png`
  a) Only "Memory" is selected from the options
5)  Click the solid-gray record button to begin capturing data.
6)  Visit `http://www.stackoverflow.com` (or your favourite website)
7)  Click the now-red record button to stop capturing data
8)  You should now see something similar to: `http://i.imgur.com/irsOtHQ.png`
9)  The part we're interested in is when memory suddenly drops:
    `http://i.imgur.com/FyMyRVI.png`
10)  Click this drop in memory to select it
11) Look for a yellow event called "Major GC" or "Minor GC": `http://i.imgur.com/3ieSxIZ.png`
12) Clicking this event will reveal information about total memory garbage
    collected, and how long it took.

One particularly interesting thing of note here is the length of time Garbage
Collection can take: Often well beyond the 16ms maximum required to keep it
within a single frame (at 60fps). While garbage collection occurs, it blocks the
main thread, which means other Javascript cannot be executed until the event
completes. Be conscious of how janky your application may become due to
extensive Garbage Collection events!

**Note**: If you'd like to get that lovely `[COMPLETED]` label for this lesson,
Run `$ADVENTURE_COMMAND verify`
