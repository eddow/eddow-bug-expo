# Bugs exposition

Running `npm start` here will raise these 2 errors:

```
ERROR in C:\dev\github\eddow-bug-expo\test\test1.ts
./test1.ts
[tsl] ERROR in C:\dev\github\eddow-bugS-expo\test\test1.ts(1,22)
      TS2307: Cannot find module 'module-foo' or its corresponding type declarations.

ERROR in C:\dev\github\eddow-bug-expo\test\test2.ts
./test2.ts
[tsl] ERROR in C:\dev\github\eddow-bug-expo\test\test2.ts(1,22)
      TS2307: Cannot find module './module-foo' or its corresponding type declarations.
```